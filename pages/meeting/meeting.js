// pages/meeting/meeting.js
const app = getApp()
const Utils = require('../../utils/util.js')

import {
  TTTMAEngine,
  TTTLog
} from '../../lib/miniapp-sdk-3t';

// 最大用户数量
const max_user = 7;
const Layouter = require('../../utils/layout.js');
const APPID = require('../../utils/config.js').APPID;
const TEST_SERVER = require('../../utils/config.js').TEST_SERVER;

/**
 * log relevant, remove these part and relevant code if not needed
 */
const Uploader = require('../../utils/uploader.js');
const LogUploader = Uploader.LogUploader;
const LogUploaderTask = Uploader.LogUploaderTask;

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
    /**
     * muted
     */
    muted: false,
    /**
     * beauty 0 - 10
     */
    beauty: 0,
    totalUser: 1,
    /**
     * debug
     */
    debug: false,
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
     * 是否拉流
     */
    pulling: false,
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
    this.role = options.role || "broadcaster";
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
      title: `${this.roomId}(${this.uid})`
    });
    wx.setKeepScreenOn({
      keepScreenOn: true
    });

    /**
     * please remove this part in your production environment
     */
    if (/^sdktest.*$/.test(this.roomId)) {
      this.testEnv = true
      wx.showModal({
        title: '提示',
        content: '您正处于测试环境',
        showCancel: false
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    let roomId = this.roomId;
    let uid = this.uid;
    Utils.log(`onReady`);

    // schedule log auto update, remove this if this is not needed
    this.logTimer = setInterval(() => {
      this.uploadLogs();
    }, 60 * 60 * 1000);

    // init layouter control
    this.initLayouter();

    // init TTT Engine
    this.initEngine(uid, roomId)
      .catch(e => {
        Utils.log(`init TTT Engine failed: ${e}`);
        wx.showToast({
          title: `客户端初始化失败`,
          icon: 'none',
          duration: 5000
        });
        //
        // 跳回首页
        wx.navigateTo({
          url: `../index/index`
        });
      });
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
  hasMedia(mediaType, cid) {
    let media = this.data.media || [];
    return media.filter(item => {
      return item.type === mediaType && `${item.cid}` === `${cid}`
    }).length > 0
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
  addMedia(mediaType, cid, url, options) {
    Utils.log(`add media ${mediaType} ${cid} ${url}`);
    let media = this.data.media || [];

    if (mediaType === 'pusher') {
      //pusher
      media.splice(0, 0, {
        key: options.key,
        type: mediaType,
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
  removeMedia: function(cid) {
    Utils.log(`remove media ${cid}`);
    let media = this.data.media || [];
    media = media.filter(item => {
      return `${item.cid}` !== `${cid}`
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
   * update media object
   * the media component will be fully refreshed if you try to update key
   * property.
   */
  updateMedia: function(cid, options) {
    Utils.log(`update media ${cid} ${JSON.stringify(options)}`);
    let media = this.data.media || [];
    let changed = false;
    for (let i = 0; i < media.length; i++) {
      let item = media[i];
      if (`${item.cid}` === `${cid}`) {
        media[i] = Object.assign(item, options);
        changed = true;
        Utils.log(`after update media ${cid} ${JSON.stringify(item)}`)
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
        if (i < max_user) {
          //show
          media[i].holding = false;
        } else {
          //hide 
          media[i].holding = true;
        }
      }

      if (media.length > max_user) {
        wx.showToast({
          title: '由于房内人数超过7人，部分视频未被加载显示',
        });
      }

      Utils.log(`updating media: ${JSON.stringify(media)}`);
      this.setData({
        media: media
      }, () => {
        resolve();
      });
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    let media = this.data.media || [];
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
    if (pages.length > 1) {
      //unlock join
      let indexPage = pages[0];
      indexPage.unlockJoin();
    }

    // unpublish sdk and leave roomId
    if (this.isBroadcaster()) {
      try {
        this.client && this.client.unpublish();
      } catch (e) {
        Utils.log(`unpublish failed ${e}`);
      }
    }
    // client.destroy 内部将自动调用 leave
    this.client && this.client.destroy();
  },

  /**
   * callback when leave button called
   */
  onLeaveClick: function() {
    wx.showModal({
      title: '确认',
      content: '将退出当前房间，确定吗？',
      showCancel: true,
      success: () => {
        if (!this.leaving) {
          this.leaving = true;
          this.navigateBack();
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

  /**
   * publish / unpublish
   */
  onPushClick: function() {
    if (this.data.pushing)
      this.publish()
    else
      this.unpublish();
  },

  publish: function() {
    new Promise((resolve, reject) => {
      if (this.data.connState === 2) {
        //and get my stream publish url
        if (this.isBroadcaster()) {
          let client = this.client
          client.publish({
            onSuccess: (data) => {
              Utils.log(`client publish success. url:${data.url}`);
              resolve(data.url);
            },
            onFailure: (e) => {
              Utils.log(`client publish failed: ${e.code} ${e.reason}`);
              reject(e)
            }
          });
        } else {
          resolve();
        }
      }
    }).then(url => {
      Utils.log(`publish roomId: ${this.roomId}, uid: ${this.uid} cid: ${this.cid} url: ${url}`);

      let ts = new Date().getTime();

      if (this.isBroadcaster()) {
        // first time init, add pusher media to view
        this.addMedia('pusher', this.cid, url, {
          key: ts
        });

        //
        this.setData({
          pushing: true
        })
      }
    }).catch(e => {
      Utils.log(`publish failed: ${e}`);
      wx.showToast({
        title: `流发布失败`,
        icon: 'none',
        duration: 5000
      });
    });
  },

  unpublish: function() {
    new Promise((resolve, reject) => {
      if (this.data.connState === 2) {
        let client = this.client
        client.unpublish({
          onSuccess: (data) => {
            Utils.log(`client unpublish success. url:${data.url}`);
            resolve(data.url);
          },
          onFailure: (e) => {
            Utils.log(`client unpublish failed: ${e.code} ${e.reason}`);
            reject(e)
          }
        });
      }
    }).then(url => {
      Utils.log(`unpublish roomId: ${this.roomId}, uid: ${this.uid} cid: ${this.cid}`);

      this.removeMedia(this.cid);

      //
      this.setData({
        pushing: false
      })
    }).catch(e => {
      Utils.log(`unpublish failed: ${e}`);
      wx.showToast({
        title: `停流失败`,
        icon: 'none',
        duration: 5000
      });
    });
  },

  /**
   * 推流状态更新回调
   * 向 CDN 推流失败时，回调
   */
  onPusherFailed: function() {
    Utils.log('pusher failed completely', "error");
    wx.showModal({
      title: '发生错误',
      content: '推流发生错误，请重新进入房间重试',
      showCancel: false,
      success: () => {
        this.navigateBack();
      }
    })

    //
    this.setData({
      pushing: false
    })
  },

  /**
   * 静音回调
   */
  onMuteClick: function() {
    this.setData({
      muted: !this.data.muted
    })
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
    this.setData({
      beauty: beauty
    })
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
      tasks.push(new LogUploaderTask(content, this.roomId, part++, ts, this.uid, this.cid));
    } while (logs.length > sliceSize)
    wx.showLoading({
      title: '0%',
      mask: true
    })
    LogUploader.off("progress").on("progress", e => {
      let remain = e.remain;
      let total = e.total;
      Utils.log(`log upload progress ${total - remain}/${total}`);
      if (remain === 0) {
        wx.hideLoading();
        wx.showToast({
          title: `上传成功`,
        });
      } else {
        wx.showLoading({
          mask: true,
          title: `${((total - remain) / total * 100).toFixed(2)}%`,
        })
      }
    });
    LogUploader.on("error"), e => {
      wx.hideLoading();
      wx.showToast({
        title: `上传失败: ${e}`,
      });
    }
    LogUploader.scheduleTasks(tasks);
  },

  /**
   * 上麦 / 下麦 切换
   */
  onSpeakTurnClick: function() {
    if (this.isBroadcaster()) {
      this.becomeAudience().then(() => {
        this.removeMedia(this.cid);
      }).catch(e => {
        Utils.log(`switch to audience failed ${e.stack}`);
      })
    } else {
      let ts = new Date().getTime();
      this.becomeBroadcaster().then(url => {
        this.addMedia('pusher', this.cid, url, {
          key: ts
        });
      }).catch(e => {
        Utils.log(`switch to broadcaster failed ${e.stack}`);
      })
    }
  },

  /**
   * 上传日志回调
   */
  onDebugClick: function() {
    let page = this;

    this.setData({
      debug: !this.data.debug
    })
    wx.showModal({
      title: '遇到使用问题?',
      content: '点击确定可以上传日志，帮助我们了解您在使用过程中的问题',
      success: function(res) {
        if (res.confirm) {
          console.log('用户点击确定')
          page.uploadLogs();
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    });
  },

  /**
   * 获取屏幕尺寸以用于之后的视窗计算
   */
  initLayouter: function() {
    // get window size info from systemInfo
    const systemInfo = app.globalData.systemInfo;
    // 64 is the height of bottom toolbar
    this.layouter = new Layouter(systemInfo.windowWidth, systemInfo.windowHeight - 64);
  },

  /**
   * 初始化 3t Engine (SDK)
   */
  initEngine: function(uid, roomId) {
    return new Promise((resolve, reject) => {
      let client = {}

      // Create TTTMAEngine
      Utils.log(`TTTMAEngine: ${TTTMAEngine}`);

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
      })

      // store TTT Engine 
      this.client = client;
      client.setRole(this.role);
      client.init({
        appId: APPID,
        userId: uid,
        onSuccess: () => {
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
              this.setData({
                connState: 2
              });

              const {
                connectId,
                pushUrl,
                peers
                // TODO : peers
              } = data;

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
              reject(e)
            }
          });
        },
        onFailure: (e) => {
          Utils.log(`client init failed: ${e} ${e.code} ${e.reason}`);
          reject(e);
        }
      });
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

  becomeBroadcaster: function() {
    return new Promise((resolve, reject) => {
      if (!this.client) {
        return reject(new Error("no client available"))
      }
      let client = this.client
      this.role = "broadcaster"
      client.setRole(this.role)
      Utils.log(`client switching role to ${this.role}`);
      client.publish({
        onSuccess: (url) => {
          Utils.log(`client publish success`);
          resolve(url);
        },
        onFailure: (e) => {
          Utils.log(`client publish failed: ${e.code} ${e.reason}`);
          reject(e)
        }
      });
    })
  },

  becomeAudience: function() {
    return new Promise((resolve, reject) => {
      if (!this.client) {
        return reject(new Error("no client available"))
      }

      let client = this.client
      client.unpublish(() => {
        Utils.log(`client unpublish success`);
        this.role = "audience"
        Utils.log(`client switching role to ${this.role}`);
        client.setRole(this.role)
        resolve();
      }, e => {
        Utils.log(`client unpublish failed: ${e.code} ${e.reason}`);
        reject(e)
      });
    })
  },

  /**
   * 如果
   */
  isBroadcaster: function() {
    return this.role === "broadcaster";
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
        Utils.log(`video rotated: ${e.rotation} ${e.cid}`)
        setTimeout(() => {
          const player = this.getPlayerComponent(e.cid);
          player && player.rotate(e.rotation);
        }, 1000);
      }
    });
    /**
     * fired when new stream join the room
     */
    client.on({
      event: "stream-added",
      callback: (e) => {
        let cid = e.cid;
        const ts = new Date().getTime();
        Utils.log(`stream ${cid} added`);
        /**
         * subscribe to get corresponding url
         */
        client.subscribe({
          userId: cid,
          onSuccess: (url, rotation) => {
            Utils.log(`stream ${cid} subscribed successful`);
            let media = this.data.media || [];
            let matchItem = null;
            for (let i = 0; i < media.length; i++) {
              let item = this.data.media[i];
              if (`${item.cid}` === `${cid}`) {
                //if existing, record this as matchItem and break
                matchItem = item;
                break;
              }
            }

            if (!matchItem) {
              //if not existing, add new media
              this.addMedia('player', cid, url, {
                key: ts,
                rotation: rotation
              })
            } else {
              // if existing, update property
              // change key property to refresh live-player
              this.updateMedia(matchItem.cid, {
                url: url
              });
            }
          },
          onFailure: (e) => {
            Utils.log(`stream subscribed failed ${e} ${e.code} ${e.reason}`);
          }
        });
      }
    });

    /**
     * remove stream when it leaves the room
     */
    client.on({
      event: "stream-removed",
      callback: (e) => {
        let cid = e.cid;
        Utils.log(`stream ${cid} removed`);
        this.removeMedia(cid);
      }
    });

    /**
     * kickout by the other user
     */
    client.on({
      event: "kickout",
      callback: (e) => {
        Utils.log('I got kicked out by the others');

        // update the conn state.
        this.setData({
          connState: 0
        });

        // destroy 
        client.destroy();
      }
    })

    /**
     * 与 miniapp-au 的连接已断开（尝试n次重连后的全局断开，才会触发该事件）
     */
    client.on({
      event: "disconnected",
      callback: (e) => {
        Utils.log('Websocket is disconnected');

        // update the conn state.
        this.setData({
          connState: 0
        });

        // destroy 
        client.destroy();
      }
    })

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
        Utils.log(`error: ${code}, reason: ${reason}`);
        let ts = new Date().getTime();

        // TODO : reconnect for some code
        // ...
      }
    });

    /**
     * there are cases when server require you to update
     * player url, when receiving such event, update url into
     * corresponding live-player, REMEMBER to update key property
     * so that live-player is properly refreshed
     * NOTE you can ignore such event if it's for pusher or happens before
     * stream-added
     */
    client.on({
      event: 'update-url',
      callback: (e) => {
        Utils.log(`update-url: ${JSON.stringify(e)}`);
        let cid = e.cid;
        let url = e.url;
        let ts = new Date().getTime();
        if (`${cid}` === `${this.cid}`) {
          // if it's not pusher url, update
          Utils.log(`ignore update-url`);
        } else {
          this.updateMedia(cid, {
            url: url
          });
        }
      }
    });
  }
})