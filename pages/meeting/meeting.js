// pages/meeting/meeting.js
const app = getApp()
const Utils = require('../../utils/util.js')

import { TTTMAEngine, TTTLog } from '../../lib/miniapp-sdk-3t';

// 
// 最大用户数量
const MAX_USER = 7;
const Layouter = require('../../utils/layout.js');
const APPID = require('../../utils/config.js').APPID;
const TEST_SERVER = require('../../utils/config.js').TEST_SERVER;

/**
 * log relevant, remove these part and relevant code if not needed
 */
const Uploader = require('../../utils/uploader.js');
const LogUploader = Uploader.LogUploader;
const LogUploaderTask = Uploader.LogUploaderTask;
//

Page({

  /**
   * 页面的初始数据
   */
  data: {
    /**
     * media objects array
     * this involves both player & pusher data
     * we use type to distinguish
     * a sample media object
     * {
     *   key: **important, change this key only when you want to completely refresh your dom**,
     *   type: pusher / player,
     *   uid: userId,
     *   cid: cid of stream,
     *   holding: when set to true, the block will stay while native control hidden, used when needs a placeholder for media block,
     *   url: url of pusher/player
     *   left: x of pusher/player
     *   top: y of pusher/player
     *   width: width of pusher/player
     *   height: height of pusher/player
     * }
     */
    media: [],
	userIds: [], // 当前房间内的用户列表
	userTotal: 0,
	logClues: '', // 日志跟踪用
	loginStatus: '', // 当前登录状态
    /**
     * muted
     */
    muted: false,
    showHDTips: false, // 默认不显示清晰度弹窗
    mode: "RTC",
    /**
     * beauty 0 - 10
     */
    beauty: 0,
    totalUser: 1,
    selectIndex: 0,
    selectUserId: 0,
    /**
     * debug
     */
    debug: true, // 默认开启 debug
    /**
     * 登录状态
     * 0 -- idle
     * 1 -- joining
     * 2 -- joined
     */
    connState: 0,
    /**
     * 当前的推流状态
     */
    pushing: false,
    /**
     * 是否启用摄像头
     */
    enableCamera: true,
    /**
     * 横屏 or 竖屏
     */
    orientation: 'vertical'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    Utils.log(`onLoad`);
    // get roomId from page query param
    this.roomId = options.roomId;
    // default role to broadcaster
    this.role = parseInt(options.role) || 1;
    // 是否自动拉流
    this.autoPull = false; // (options.autoPull === 'true') ? true : false;
    // 是否自动推流
    this.autoPush = false; // (options.autoPush === 'true') ? true : false;

    Utils.log(`this.autoPull : ${this.autoPull} this.autoPush : ${this.autoPush}`);
    //

    this.uid = options.userId;

    // cid -- connectId 由 gateway 统一生成 -- 在 join 的 response 中返回来
    // 故，此处初始化为 ''
    this.cid = "";
    // store TTT Engine client
    this.client = null;
    // store layouter control
    this.layouter = null;
    // prevent user from clicking leave too fast
    this.leaving = false;

    // page setup
    wx.setNavigationBarTitle({
      title: `${this.roomId}(${this.uid})-(role:${this.role})`
    });
    wx.setKeepScreenOn({ keepScreenOn: true });

    /**
     * please remove this part in your production environment
     */
    if (/^sdktest.*$/.test(this.roomId)) {
      this.testEnv = true
      wx.showModal({
        title: '提示',
        content: '您正处于测试环境',
        showCancel: false
      });
	}
	
    // init layouter control
    this.initLayouter();

	// 自动加载 pusher
	if (this.canPublsh()) {
		// first time init, add pusher media to view		
		let ts = new Date().getTime();

		this.addMedia('pusher', this.uid, /*this.cid*/'', '', { key: ts });
		// 
	}
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    let roomId = this.roomId;
    let uid = this.uid;
    Utils.log(`onReady`);

	/*
    // schedule log auto update, remove this if this is not needed
    this.logTimer = setInterval(() => {
      this.uploadLogs();
	}, 60 * 60 * 1000);
	*/

    // init TTT Engine
    this.initEngine(uid, roomId)
      .then(() => {
		let userIds = this.data.userIds || [];
		Utils.log(`init TTT Engine ok. userIds: ${JSON.stringify(userIds)}`);

		// 如果是 主播， 才执行 setSEI
		if (this.role == 1) {
			this.setSEI(userIds, 1);
		}

        if (this.autoPush) {
          this.publish(false);
        }
      })
      .catch(e => {
        Utils.log(`init TTT Engine failed: ${e.code} ${e.reason}`);
        wx.showToast({
          title: `登录失败：${e.code} ${e.reason}`,
          icon: 'none',
          duration: 5000
        });
        //
					
		setTimeout(() => {
			wx.reLaunch({
				url: '../index/index'
			});
		//	this.navigateIndex();
		}, 3000);
      });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let media = this.data.media || [];
    Utils.log('onShow ...media: ', media);

    media.forEach(item => {
      if (item.type === 'pusher') {
        //return for pusher
        return;
      }
      let player = this.getPlayerComponent(item.cid);
      if (!player) {
        Utils.log(`player ${item.cid} component no longer exists`, "error");
      } else {
        // while in background, the player maybe added but not starting
        // in this case we need to start it once come back
        player.start();
      }
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  onError: function(e) {
    Utils.log(`error: ${JSON.stringify(e)}`);
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    Utils.log(`onUnload`);
    clearInterval(this.logTimer);
    this.logTimer = null;

    // unlock index page join button
    let pages = getCurrentPages();
    if (pages.length >= 1) {
      //unlock join
      let indexPage = pages[0];
    }

    // unpublish sdk and leave roomId
    if (this.canPublsh()) {
      try {
        if (!!this.client) {
          this.client.unpublish({
            onSuccess: () => {},
            onFailure: (e) => {}
          });
        } else {
          reject({
            code: 400,
            reason: "TTTEngine is null. Are you init?"
          });
        }
      } catch (e) {
        Utils.log(`unpublish failed ${e}`);
      }
    }
    // client.destroy 内部将自动调用 leave
    this.client && this.client.destroy();

	// 
    wx.reLaunch({
      url: '../index/index'
	});
	// this.navigateIndex();
  },

  /**
   * 只有提供了该回调才会出现转发选项
   */
  onShareAppMessage() {

  },

  /**
   * calculate size based on current media length
   * sync the layout info into each media object
   */
  syncLayout(media) {
    let sizes = this.layouter.getSize(media.length);
    for (let i = 0; i < sizes.length; i++) {
      let size = sizes[i];
      let item = media[i];

      if (item.holding) {
        //skip holding item
        continue;
      }

      item.left = parseFloat(size.x).toFixed(2);
      item.top = parseFloat(size.y).toFixed(2);
      item.width = parseFloat(size.width).toFixed(2);
      item.height = parseFloat(size.height).toFixed(2);
    }
    return media;
  },

  /**
   * check if current media list has specified cid & mediaType component
   */
  hasMedia(mediaType, uid) {
    let media = this.data.media || [];
    return media.filter(item => {
      return item.type === mediaType && `${item.uid}` === `${uid}`
    }).length > 0;
  },

  /**
   * add media to view
   * type: pusher / player
   * *important* here we use ts as key, when the key changes
   * the media component will be COMPLETELY refreshed
   * this is useful when your live-player or live-pusher
   * are in a bad status - say -1307. In this case, update the key
   * property of media object to fully refresh it. The old media
   * component life cycle event detached will be called, and
   * new media component life cycle event ready will then be called
   */
  addMedia(mediaType, uid, cid, url, options) {
    Utils.log(`add media ${mediaType} ${cid} ${url}`);
    let media = this.data.media || [];

    if (mediaType === 'pusher') {
      //pusher
      media.splice(0, 0, {
        key: options.key,
        type: mediaType,
        uid: uid,
        cid: `${cid}`,
        holding: false,
        url: url,
        left: 0,
        top: 0,
        width: 0,
        height: 0
      });
    } else {
      //player
      media.push({
        key: options.key,
        rotation: options.rotation,
        type: mediaType,
        uid: uid,
        cid: `${cid}`,
        holding: false,
        url: url,
        left: 0,
        top: 0,
        width: 0,
        height: 0
      });
    }

    media = this.syncLayout(media);
    return this.refreshMedia(media);
  },

  /**
   * remove media from view
   */
  removeMedia: function(uid) {
    Utils.log(`remove media ${uid}`);
    let media = this.data.media || [];
    media = media.filter(item => {
      return `${item.uid}` !== `${uid}`
    });

    if (media.length !== this.data.media.length) {
      media = this.syncLayout(media);
      this.refreshMedia(media);
    } else {
      Utils.log(`media not changed: ${JSON.stringify(media)}`)
      return Promise.resolve();
    }
  },

  /**
   * remove all the media item
   */
  removeAllMedia: function(mediaType) {
    Utils.log('remove all the media item');
    let media = this.data.media || [];
    media = media.filter(item => {
      return `${item.type}` !== `${mediaType}`
    });

    if (media.length !== this.data.media.length) {
      media = this.syncLayout(media);
      this.refreshMedia(media);
    }
  },

  /**
   * update media object
   * the media component will be fully refreshed if you try to update key
   * property.
   */
  updateMedia: function(uid, options) {
    Utils.log(`update media ${uid} ${JSON.stringify(options)}`);
    let media = this.data.media || [];
    let changed = false;
    for (let i = 0; i < media.length; i++) {
      let item = media[i];
      if (`${item.uid}` === `${uid}`) {
        media[i] = Object.assign(item, options);
        changed = true;
        Utils.log(`after update media ${uid} ${JSON.stringify(item)}`)
        break;
      }
    }

    if (changed) {
      return this.refreshMedia(media);
    } else {
      Utils.log(`media not changed: ${JSON.stringify(media)}`)
      return Promise.resolve();
    }
  },

  /**
   * call setData to update a list of media to this.data.media
   * this will trigger UI re-rendering
   */
  refreshMedia: function(media) {
    return new Promise((resolve) => {
      for (let i = 0; i < media.length; i++) {
        if (i < MAX_USER) {
          //show
          media[i].holding = false;
        } else {
          //hide 
          media[i].holding = true;
        }
      }

      if (media.length > MAX_USER) {
        wx.showToast({ title: '由于房内人数超过7人，部分视频未被加载显示' });
      }

      Utils.log(`updating media: ${JSON.stringify(media)}`);
      this.setData({
        media: media
      }, () => {
        resolve();
      });
    });
  },

  onModeClick: function(event) {
    var mode = "RTC";
    switch (event.target.dataset.mode) {
      case "SD":
        mode = "SD";
        break;
      case "HD":
        mode = "HD";
        break;
      case "FHD":
        mode = "FHD";
        break;
      case "RTC":
        mode = "RTC";
        break;
    }

    this.setData({
      mode: mode,
      showHDTips: false
    });
  },

  bindPickerChange: function(e) {
    let index = e.detail.value;
    const selectUserId = this.data.userIds[index];
    this.setData({
      selectIndex: index,
      selectUserId: selectUserId
    });

    Utils.log(`picker发送选择改变，选中项为：${e.detail.value} selectUserId: ${this.data.selectUserId}`);
  },

  /**
   * callback when leave button called
   */
  onLeaveClick: function() {
    wx.showModal({
      title: '确认',
      content: '将退出当前房间，确定吗？',
      showCancel: true,
      success: (res) => {
        if (res.confirm) {
          if (!this.leaving) {
			this.leaving = true;
			
			let client = this.client;
			if (!!client) {
				client.destroy({
					onSuccess : () => {},
					onFailure : () => {}
				});
			}

            wx.reLaunch({
              url: '../index/index'
			});

			// this.navigateIndex();
          }
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  /**
   * navigate to previous page
   * if started from shared link, it's possible that
   * we have no page to go back, in this case just redirect
   * to index page
   */
  navigateBack: function() {
    Utils.log(`attemps to navigate back`);
    if (getCurrentPages().length > 1) {
      //have pages on stack
      wx.navigateBack({});
    } else {
      //no page on stack, usually means start from shared links
      wx.redirectTo({
        url: '../index/index',
      });
    }
  },

  navigateIndex: function() {
	wx.redirectTo({
        url: '../index/index',
      });
  },

  onSubscribeClick: function() {
    if (this.data.selectUserId !== 0) {
      this.subscribe(this.data.selectUserId, false);
    } else {
      wx.showToast({
        title: `请选择 userId`,
        icon: 'none',
        duration: 5000
      });
    }
  },

  /**
   * unsubscribe
   */
  onUnsubscribeClick: function() {
    if (this.data.selectUserId !== 0) {
      this.unsubscribe(this.data.selectUserId, true);
    } else {
      wx.showToast({
        title: `请选择 userId`,
        icon: 'none',
        duration: 5000
      });
    }
  },

  subscribe: function(userId, isUpdate) {
	// 最多 7 路
	if (this.data.media.length >= MAX_USER) {
		wx.showToast({
			title: `当前已到最大支持路数： ${MAX_USER}`,
			icon: 'none',
			duration: 5000
		  });

		return;
	}
	
    // 
    new Promise((resolve, reject) => {
      if (this.data.connState === 2) {
        // TODO : retrieve the userId & connectId from peers(local store)
        // 
        let client = this.client;
        if (!!client) {
			wx.showToast({
				title: '已发出请求，请稍候',
				icon: 'none',
				duration: 5000
			});

          client.subscribe({
			userId,
			isUpdate,
            onSuccess: (data) => {
              Utils.log(`client subscribe success. url:${data.url}`);
              resolve(data);
            },
            onFailure: (e) => {
              Utils.log(`client subscribe failed: ${e.code} ${e.reason}`);
              reject(e);
            }
          });
        } else {
          reject({
            code: 400,
            reason: "TTTEngine is null. Are you init?"
          });
        }
      } else {
        reject({
          code: 400,
          reason: `connState : ${this.data.connState}. 尚未完成加入房间`
        });
      }
    }).then(data => {
      Utils.log(`subscribe url: ${data.url}`);

	  if (this.hasMedia('player', data.userId)) {
		// if existing, update property
        // change key property to refresh live-player
        this.updateMedia(data.userId, { url: data.url });
      } else {  
        //if not existing, add new media
		let ts = new Date().getTime();

		this.addMedia('player', data.userId, data.connectId, `${data.url}`, {
          key: ts,
          rotation: data.rotation
		});
		
		let client = this.client;
		if (!!client) {
			const player = this.getPlayerComponent(data.connectId);
			player && player.setMediaStatCB({
				userId: data.userId,
				callback: (opts) => {
					// 
					const { code, type, userId, message } = opts;
					client.mediaStat({ code, type, userId, message });
				}
			});
		}
		// 
      }
      //
    }).catch(e => {
      Utils.log(`subscribe failed: ${e.code} ${e.reason}`);
      wx.showToast({
        title: `拉流失败: ${JSON.stringify(e)}`,
        icon: 'none',
        duration: 5000
      });
    });
  },

  unsubscribe: function(userId, isTip) {
    Utils.log(`unsubscribe ${userId} media`);
    new Promise((resolve) => {
      // 
      this.removeMedia(userId);
      // 

      let client = this.client;
      if (!!client) {
        client.unsubscribe({
          userId,
          onSuccess: () => {},
          onFailure: (e) => {}
        });
      }
      resolve();
    }).catch(e => {
      Utils.log(`unsubscribe ${userId} failed: ${e.code} ${e.reason}`);
    });
  },

  resubscribeAll: function() {
    Utils.log(`resubscribeAll media`);
    new Promise((resolve) => {
	  // 
	  let media = this.data.media || [];
	  // 
      for (let i = 0; i < media.length; i++) {
		let item = media[i];
		
		if (`${item.type}` !== 'player')
			continue;

		//
		this.subscribe(item.uid, true);
      }

      resolve();
    }).catch(e => {
      Utils.log(`resubscribeAll failed: ${e.code} ${e.reason}`);
    });
  },

  unsubscribeAll: function() {
    Utils.log(`unsubscribeAll media`);
    new Promise((resolve) => {
	  // 
	  let media = this.data.media || [];
	  // 
      for (let i = 0; i < media.length; i++) {
		let item = media[i];

		if (`${item.type}` !== 'player')
			continue;

        let client = this.client;
        if (!!client) {
          client.unsubscribe({
            userId: item.uid,
            onSuccess: () => {},
            onFailure: (e) => {}
          });
        }
      }

      this.removeAllMedia('player');

	  resolve();
    }).catch(e => {
      Utils.log(`unsubscribeAll failed: ${e.code} ${e.reason}`);
    });
  },

  /**
   * publish / unpublish
   */
  onPublishClick: function() {
    if (!this.data.pushing)
      this.publish(false);
    else
      this.unpublish();
  },

  publish: function(isUpdate) {
	if (this.data.pushing) {
		wx.showToast({
			title: '当前已推流',
			icon: 'none',
			duration: 3000
		});
	
		return;
	}

	// 最多 7 路
	if (this.data.media.length >= MAX_USER) {
		wx.showToast({
			title: `当前已到最大支持路数： ${MAX_USER}`,
			icon: 'none',
			duration: 5000
		});

		return;
	}

	let curTS = new Date().getTime();
	Utils.log(`****** client publish curTS: ${curTS}`);
	
    new Promise((resolve, reject) => {
      if (this.data.connState === 2) {
        // and get my stream publish url
        if (this.canPublsh()) {
          let client = this.client;
          if (!!client) {
			wx.showToast({
				title: '已发出请求，请稍候',
				icon: 'none',
				duration: 5000
			});
		
            client.publish({
				isUpdate,
              onSuccess: (data) => {
                Utils.log(`client publish success. url:${data.url}`);
                resolve(data.url);
              },
              onFailure: (e) => {
                Utils.log(`client publish failed: ${e.code} ${e.reason}`);
                reject(e);
              }
            });
          } else {
            reject({
              code: 400,
              reason: "TTTEngine is null. Are you init?"
            });
          }
        } else {
          reject({
            code: 400,
            reason: "Publish forbidden. Please check you user-role."
          });
        }
      } else {
        reject({
          code: 400,
          reason: `connState : ${this.data.connState}. 尚未完成加入房间`
        });
      }
    }).then(url => {
      Utils.log(`publish roomId: ${this.roomId}, uid: ${this.uid} cid: ${this.cid} url: ${url}`);

		if (this.hasMedia('pusher', this.uid)) {
			// if existing, update property
			// change key property to refresh live-player
			this.updateMedia(this.uid, { url });
		}
		// 
		const tttPusher = this.getPusherComponent();
		if (!!tttPusher) {
			let client = this.client;
			if (!!client) {
				// 1. 将 netstatus 日志采集回调 植入 tttPusher 中
				tttPusher && tttPusher.setMediaStatCB({
					userId: this.uid,
					callback: (opts) => {
					const { code, type, userId, message } = opts;
				
					client.mediaStat({ code, type, userId, message });
					}
				});
			}
		
			tttPusher.start();
		}

        //
        this.setData({ pushing : true });
    }).catch(e => {
	  Utils.log(`publish failed: ${e.code} ${e.reason}`);
	  // 
	  // this.removeMedia(this.uid);
	  // 
      wx.showToast({
        title: `推流失败: ${e.code} ${e.reason}`,
        icon: 'none',
        duration: 5000
      });
    });
  },

  unpublish: function() {
    Utils.log(`client unpublish`);
    new Promise((resolve, reject) => {
	  // 
	  if (this.hasMedia('pusher', this.uid)) {
		// if existing, update property
		// change key property to refresh live-player
		this.updateMedia(this.uid, { url : '' });
	  }

	  if (this.data.pushing) {
		// 
		const tttPusher = this.getPusherComponent();
		if (!!tttPusher) {
			tttPusher.stop();
		}
		// this.removeMedia(this.uid);
		//
		this.setData({ pushing : false });
	  }

      // 
      if (this.data.connState === 2) {
        let client = this.client;
        if (!!client) {
          client.unpublish({
            onSuccess: () => {},
            onFailure: (e) => {}
          });
        }
      }
      resolve();
      // 
    }).then(() => {
      Utils.log(`unpublish roomId: ${this.roomId}, uid: ${this.uid} cid: ${this.cid}`);
    }).catch(e => {
      Utils.log(`unpublish failed: ${e.code} ${e.reason}`);
    });
  },

  /**
   * 
   * @param {*} e 
   */
  onPullFailed: function(e) {
    Utils.log(`ttt-player failed!!!. player failed: ${JSON.stringify(e.detail.errMsg)}`);
	//

    this.unsubscribe(e.detail.userId, false);

	let msg = JSON.stringify(e.detail.errMsg);
	if (e.detail.errCode === -2301) {
		msg = '拉流失败：到 CDN 网络断连，且经多次重连抢救无效，更多重试请自行重启拉流'
	}

    wx.showToast({
      title: `小程序报错. player failed: ${msg}`,
      icon: 'none',
      duration: 5000
    });
  },

  /**
   * 推流状态更新回调
   * 向 CDN 推流失败时，回调
   */
  onPushFailed: function(e) {
    Utils.log(`ttt-pusher failed!!!. pusher failed: ${JSON.stringify(e.detail.errMsg)}`);
    //
    this.unpublish();

	/*
    // 重试
    setTimeout(() => {
      this.publish();
	}, 1000);
	*/

	let msg = JSON.stringify(e.detail.errMsg);
	if (e.detail.errCode === -1307)
	{
		msg = '推流失败：到 CDN 网络断连，且经多次重连抢救无效，更多重试请自行重启推流'
	}

    wx.showToast({
      title: `小程序报错. pusher failed. errCode: ${e.detail.errCode} errMsg: ${msg}`,
      icon: 'none',
      duration: 5000
    });
  },

  // 踢出指定用户
  onKickoutClick: function() {
    // 
    if (!this.data.selectUserId) {
      wx.showToast({
        title: `请选择 userId`,
        icon: 'none',
        duration: 5000
      });
      return;
    }
    wx.showModal({
      title: 'kickout?',
      content: `点击确定将踢出用户 ${this.data.selectUserId}，是否确定？`,
      success: (res) => {
        if (res.confirm) {
          // 
          let client = this.client;
		  if (!client)
			return;
		  client.kickout({
			userId: this.data.selectUserId,
			onSuccess: () => {
				Utils.log('client kickout success.');
			},
			onFailure: (e) => {
				Utils.log(`client kickout failed: ${e.code} ${e.reason}`);
				wx.showToast({
					title: `client kickout failed: ${e.code} ${e.reason}`,
					icon: 'none',
					duration: 5000
				});
			}
		  });
        }
      }
    });
    //
  },

  /**
   * 静音回调
   */
  onMuteClick: function() {
    this.setData({ muted : !this.data.muted });

    Utils.log(`muted : ${this.data.muted}`);
  },

  /**
   * 摄像头方向切换回调
   */
  onSwitchCameraClick: function() {
    Utils.log(`switching camera`);
    // get pusher component via id
    const tttPusher = this.getPusherComponent();
    tttPusher && tttPusher.switchCamera();
  },

  /**
   * 美颜回调
   */
  onMakeupClick: function() {
    let beauty = this.data.beauty == 5 ? 0 : 5;
    this.setData({ beauty : beauty });
  },

  /**
   * 上传日志
   */
  uploadLogs: function() {
    let logs = Utils.getLogs();
    Utils.clearLogs();

    let totalLogs = logs.length;
    let tasks = [];
    let part = 0;
    let ts = new Date().getTime();
    // 1w logs per task slice
    const sliceSize = 500;
    do {
      let content = logs.splice(0, sliceSize);

      // 
      console.log(`uploadLogs -- ${part} : ${content}`);
      // 
      tasks.push(new LogUploaderTask(content, this.roomId, part++, ts, this.uid, this.cid));
	} while (logs.length > sliceSize)
	
    wx.showLoading({ title: '0%', mask: true });
	
    LogUploader.off("progress").on("progress", e => {
      let remain = e.remain;
      let total = e.total;
      Utils.log(`log upload progress ${total - remain}/${total}`);
      if (remain === 0) {
        wx.hideLoading();
        wx.showToast({ title: `上传成功`, });
      } else {
        wx.showLoading({
          mask: true,
          title: `${((total - remain) / total * 100).toFixed(2)}%`,
        });
      }
    });
    LogUploader.on("error"), e => {
      wx.hideLoading();
      wx.showToast({ title: `上传失败: ${e}` });
    }
    LogUploader.scheduleTasks(tasks);
  },

  onSwitchMode: function() {
    var showTips = !this.data.showHDTips;
    this.setData({ showHDTips : showTips });
  },

  /**
   * 是否开启 debug
   */
  onDebugClick: function() {
	this.setData({ debug: !this.data.debug });
	
	// 
	this.injectMediaStat();

	// 
	this.onUpload();
  },

  onUpload: function() {
	wx.getStorageInfo({
		success (res) {
		  console.log(res.keys);
		  console.log(res.currentSize);
		  console.log(res.limitSize);

		  for (let i = 0; i < res.keys.length; i++) {
			let item = res.keys[i];
			wx.getStorage({
				key: item,
				success (res) {
				  console.log(`--- --- --- ${res.data}`);
				}
			  });
			}
		}
	  });
	  wx.clearStorage();
	  //
	/*
    let page = this;

    wx.showModal({
      title: '遇到使用问题?',
      content: '点击确定可以上传日志，帮助我们了解您在使用过程中的问题',
      success: function(res) {
        if (res.confirm) {
          page.uploadLogs();
        } else if (res.cancel) {}
      }
	});
	*/
  },

  /**
   * 获取屏幕尺寸以用于之后的视窗计算
   */
  initLayouter: function() {
    // get window size info from systemInfo
    const systemInfo = app.globalData.systemInfo;
    // 64 is the height of bottom toolbar
    // 120 is the height of input area 
    this.layouter = new Layouter(systemInfo.windowWidth, systemInfo.windowHeight - 64 - 120);
  },

  /**
   * 向 ttt-pusher，ttt-player 注入 媒体传输统计 的回调函数
   */
  injectMediaStat: function() {
	let client = this.client;
	if (!client) {
		return;
	}

    // 1. 将 netstatus 日志采集回调 植入 tttPusher 中
    const tttPusher = this.getPusherComponent();
    tttPusher && tttPusher.setMediaStatCB({
      userId: this.uid,
      callback: (opts) => {
        const { code, type, userId, message } = opts;
        client.mediaStat({ code, type, userId, message });
      }
    });

    // 2. 将 netstatus 日志采集回调 植入 tttPlayer 中
    let media = this.data.media || [];
    for (let i = 0; i < media.length; i++) {
      let item = media[i];

      const player = this.getPlayerComponent(item.cid);
      player && player.setMediaStatCB({
        userId: this.uid,
        callback: (opts) => {
          const { code, type, userId, message } = opts;
          client.mediaStat({ code, type, userId, message });
        }
      });
    }
  },

  /**
   * 初始化 3t Engine (SDK)
   */
  initEngine: function(uid, roomId) {
    return new Promise((resolve, reject) => {
      let client = {}

      // Create TTTMAEngine
      Utils.log(`TTTMAEngine`);

      client = new TTTMAEngine({
        appId: APPID,
        userId: uid,
        server: (this.testEnv ? TEST_SERVER : null)
      });

      // Set log callback
      let log3t = new TTTLog({
        level: -1,
        callback: (text) => {
          // callback to expose sdk logs
          Utils.log(text);
        }
      });

      // store TTT Engine 
      this.client = client;
      if (!!client) {
		  // 
        client.setRole({
          role: this.role,
          onSuccess: () => {},
          onFailure: () => {}
        });
        // 调用 TTTEngine 初始化
        client.init({
          appId: APPID,
          userId: uid,
          onSuccess: (e) => {
			// 
			const { logClues } = e;
			this.setData({ logClues : logClues });

            Utils.log(`client init success`);

            //subscribe stream events from TTT Engine
            // 注：一定要确保 subscribeEvents 在 join 之前调用 -- 以免 join 成功后来自下层的事件不能无遗漏地上上层投递
            this.subscribeEvents(client);

            // pass key instead of undefined if certificate is enabled
            client.join({
              roomId: roomId,
              userId: uid,
              onSuccess: (data) => {
                // store the conn state.
                this.setData({ connState : 2 });

                const { connectId, pushUrl, peers } = data;

                this.cid = connectId;
                // TODO : peers

                //
                for (const peer of peers) {
                  Utils.log(`peer: connectId: ${peer.connectId} userId: ${peer.userId} role: ${peer.role}`);
                }

                Utils.log(`client join room success. connectId: ${connectId} pushUrl: ${pushUrl} peers: ${peers}`);

                resolve();
              },
              onFailure: (e) => {
                Utils.log(`client join room failed: ${e.code} ${e.reason}`);

                reject(e);
              }
            });
          },
          onFailure: (e) => {
            Utils.log(`client init failed: ${e} ${e.code} ${e.reason}`);

            reject(e);
		  }// ,
		  // disAppAuth : true, // 
          // disIploc: true, //
          // auServer: "wss://stech.3ttech.cn/miniappau" // "wss://gzeduservice.3ttech.cn/miniappau"
        });
      } else {
        reject({
          code: 400,
          reason: "TTTEngine is null. Are you init?"
        });
      }
    });
  },

  /**
   * return player component via cid
   */
  getPlayerComponent: function(cid) {
    const tttPlayer = this.selectComponent(`#rtc-player-${cid}`);
    return tttPlayer;
  },

  /**
   * return pusher component
   */
  getPusherComponent: function() {
    const tttPusher = this.selectComponent(`#rtc-pusher`);
    return tttPusher;
  },

  setSEI: function(users, type) {
    Utils.log(`setSEI ${type}`);
    //
    let sei = {
      ts: '',
      ver: '20161227',
      canvas: {
        bgrad: [
          232,
          230,
          232
        ],
        h: 640,
        w: 368
      },
      mid: '',
      pos: []
    };

    // 
    let position = {
      id: 0,
      h: 0,
      w: 0,
      x: 0,
      y: 0,
      z: 1
    };

    sei.mid = this.uid; // 主播userId
    sei.ts = new Date().getTime(); // +new Date();

    // for 主播位置
    position.id = this.uid; // 被定位的用户userId
    position.x = 0;
    position.y = 0;
    position.w = 0.5;
    position.h = 0.5;
    position.z = 0;

    sei.pos.push(position);

	Utils.log(`setSEI users: ${JSON.stringify(users)}`);
    // for 列表中其他用户位置
    for (let i = 0; i < users.length; i++) {
      let item = users[i];

	  let position = {
        id: item,
        h: 0.25,
        w: 0.33,
        x: ((sei.pos.length - 1) % 3) * 0.33,
        y: parseInt((sei.pos.length - 1) / 3) * 0.25 + 0.5,
        z: 1
	  };
	  
	  if (sei.pos.filter(it => {
		return `${it.id}` === `${item}`
	  }).length > 0)
	    continue;

		Utils.log(`setSEI for user: ${item} position: ${JSON.stringify(position)}`);

      sei.pos.push(position);
    }

	Utils.log(`setSEI sei.pos: ${JSON.stringify(sei.pos)} sei: ${JSON.stringify(sei)}`);

    let client = this.client;
    if (!!client) {
      client.setSEI({
        userId: this.uid,
        opType: type,
        sei,
        onSuccess: () => {},
        onFailure: () => {}
      });
    } else {
      reject({
        code: 400,
        reason: "TTTEngine is null. Are you init?"
      });
    }
  },

  /**
   * 如果
   */
  canPublsh: function() {
    return (this.role === 1 || this.role === 2);
  },

  stopAllMedia: function() {
	this.unpublish();
	// 
	this.unsubscribeAll();
  },

  /**
   * 注册stream事件
   */
  subscribeEvents: function(client) {
    /**
     * sometimes the video could be rotated
     * this event will be fired with ratotion
     * angle so that we can rotate the video
     * NOTE video only supportes vertical or horizontal
     * in case of 270 degrees, the video could be
     * up side down
     */
    client.on({
      event: "video-rotation",
      callback: (e) => {
        Utils.log(`event: video-rotated: ${e.rotation} ${e.cid}`);
        setTimeout(() => {
          const player = this.getPlayerComponent(e.cid);
          player && player.rotate(e.rotation);
        }, 1000);
      }
    });

    client.on({
      event: "session-status",
      callback: (e) => {
        Utils.log(`event: session-status -- uid: ${e.uid} cid: ${e.cid} status: ${e.status}`);
		// 
		let loginStatus = '';
		if (e.code == 3000) {
			loginStatus = '正在重连'
		} else if (e.code == 200) {
			loginStatus = '已连接'
		} else if (e.code == 210) {
			loginStatus = '登录在线'
		} else if (e.code == 300) {
			loginStatus = '已连接'
		} else if (e.code == 310) {
			loginStatus = '登录在线'
		} else if (e.code == 1000) {
			loginStatus = '最终失败'
		} else
		{
			loginStatus = '未知'
		}

		this.setData({
			loginStatus
		});

		// 已登录在线
		if (e.code == 310 || e.code == 210) {
			this.setData({ connState : 2 });

			// 此处仅仅是清空 -- 因为 sdk 内部随后会将所有 users ，通过 user-online 通知上来
			let userIds = [];

			this.setData({
				userIds     : userIds,
				userTotal   : 0
			});
		}

		// 当前断网进入重连状态 -- 
		if (e.code == 3000) {
			this.setData({ connState : 0 });
			// 
			// 关闭所有 media
			this.stopAllMedia();
		}

		if (e.code == 310) {
			/* 暂不再执行 自动 重新推流
			// 重连且登录成功
			// 尝试将之前的 推流/拉流 自动恢复
			if (this.data.pushing) {
				this.publish(true);
			}
			*/
			// 
			this.resubscribeAll();
        }
		wx.showToast({
            title: `session-status：${e.status}`,
            icon: 'none',
            duration: 5000
          });
      }
    });

    client.on({
      event: "user-online",
      callback: (userData) => {
        Utils.log(`event: user-online uid: ${userData.userId}`);
        // 
        let userIds = this.data.userIds || [];
        userIds.push(`${userData.userId}`);
		//
		let userTotal = userIds.length;

        let index = 0;
        let selectUserId = userIds[0];
        this.setData({
		  userIds      : userIds,
		  userTotal,
          selectIndex  : index,
          selectUserId : selectUserId
        });
		//

		// 如果是 主播， 才执行 setSEI
		if (this.role == 1) {
			this.setSEI(userIds, 1);
		}

        Utils.log(`event: user-online -- userIds: ${JSON.stringify(userIds)}`);
      }
    });

    client.on({
      event: "user-offline",
      callback: (userId) => {
        Utils.log(`event: user-offline -- uid: ${userId}`);

        // 
        if (this.hasMedia('player', userId)) {
          // 
          // this.unsubscribe(userId, false);
          // 首先移除该用户流（如果已存在）
          this.removeMedia(userId);
        }

        // 
        let userIds = this.data.userIds || [];
        userIds = userIds.filter(item => {
          return `${item}` != `${userId}`
		});

		// 如果是 主播， 才执行 setSEI
		if (this.role == 1) {
			this.setSEI(userIds, 1);
		}

        Utils.log(`event: user-offline -- userIds: ${JSON.stringify(userIds)}`);

        // 
        let index = 0;
		let selectUserId = 0;

		let userTotal = userIds.length;
        if (userTotal > 0) {
          selectUserId = userIds[0];
          index = 0;
		}
		
        this.setData({
		  userIds      : userIds,
		  userTotal,
          selectIndex  : index,
          selectUserId : selectUserId
        });
      }
    });

    /**
     * fired when new stream join the room
     */
    client.on({
      event: "stream-added",
      callback: (e) => {
        let userId = e.uid;
        const ts = new Date().getTime();
        Utils.log(`event: stream-added -- uid: ${userId} this.autoPull: ${this.autoPull}`);

        // 如果勾选了 自动拉流 ，则自动拉取该用户流
        if (this.autoPull) {
          this.subscribe(userId, false);
        }
        // 
      }
    });

    /**
     * remove stream when it leaves the room
     */
    client.on({
      event: "stream-removed",
      callback: (e) => {
        let uid = e.uid;
        Utils.log(`event: stream-removed -- uid: ${uid}`);
        //
        if (this.hasMedia('player', uid)) {
          this.unsubscribe(uid, false);
          // 首先移除该用户流（如果已存在）
          this.removeMedia(uid);
        }
      }
    });

    /**
     * kickout by the other user
     */
    client.on({
      event: "kickout",
      callback: (e) => {
        Utils.log('I got kicked out by the others');

        let errObj = e || {};
        let uid = errObj.uid || 0;
        let reason = errObj.reason || "";
        Utils.log(`event: kickout -- uid: ${uid}, reason: ${reason}`);

        // update the conn state.
        this.setData({ connState: 0 });

		// 关闭所有 media
		this.stopAllMedia();

		// 
        // destroy 
        client.destroy();

        wx.showToast({
          title: '被踢出，将退回首页',
          icon: 'none',
          duration: 5000
        });

        setTimeout(() => {
          wx.reLaunch({
            url: '../index/index'
		  });

		  // this.navigateIndex();
        }, 5000);
      }
    })

    /**
     * 与 miniapp-au 的连接已断开（尝试n次重连后的全局断开，才会触发该事件）
     */
    client.on({
      event: "disconnected",
      callback: (e) => {
        Utils.log('event: disconnected');

        // update the conn state.
        this.setData({ connState : 0 });

		// 关闭所有 media
		this.stopAllMedia();

        // destroy 
        client.destroy();

        wx.showToast({
          title: '彻底断开，将退回首页',
          icon: 'none',
          duration: 5000
        });

        setTimeout(() => {
          wx.reLaunch({
            url: '../index/index'
		  });

		  // this.navigateIndex();
        }, 5000);
      }
    });

    /**
     * when bad thing happens - we recommend you to do a 
     * full reconnect when meeting such error
     * it's also recommended to wait for few seconds before
     * reconnect attempt
     */
    client.on({
      event: "error",
      callback: (e) => {
        let errObj = e || {};
        let code = errObj.code || 0;
        let reason = errObj.reason || "";
        Utils.log(`event: error -- code: ${code}, reason: ${reason}`);
        let ts = new Date().getTime();

        // TODO : reconnect for some code
        // ...
      }
    });
  }
})
