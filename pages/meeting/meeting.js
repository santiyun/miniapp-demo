// pages/meeting/meeting.js
const app = getApp();
const Utils = require('../../utils/util.js');

const TTTMAEngine = require('../../lib/3T_Miniapp_SDK_for_WeChat');
// import * as TTTMAEngine from '../../lib/3T_Miniapp_SDK_for_WeChat';
// import { Client, TTTLog } from '../../lib/3T_Miniapp_SDK_for_WeChat';

// 
// 最大用户数量
const MAX_USER = 7;
const Layouter = require('../../utils/layout.js');
const APPID = require('../../utils/config.js').APPID;
const TEST_APPID = require('../../utils/config.js').TEST_APPID;
const IPLOC_SERVER = require('../../utils/config.js').IPLOC_SERVER;

/**
 * log relevant, remove these part and relevant code if not needed
 */
const Uploader = require('../../utils/uploader.js');
const LogUploader = Uploader.LogUploader;
const LogUploaderTask = Uploader.LogUploaderTask;
//

// for layout
const splitWnd1 = [{ x: 0, y: 0 }];
const splitWnd4 = [{ x: 0, y: 0 }, { x: 0.5, y: 0 }, { x: 0, y: 0.5 }, { x: 0.5, y: 0.5 }];
const splitWnd9 = [{ x: 0, y: 0 }, { x: 0.33, y: 0 }, { x: 0.66, y: 0 }, { x: 0, y: 0.33 }, { x: 0.33, y: 0.33 }, { x: 0.66, y: 0.33 }, { x: 0, y: 0.66 }, { x: 0.33, y: 0.66 }, { x: 0.66, y: 0.66 }];

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
		 *   streamId: streamId | videoDevId
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
		userIds: [], // 当前通道内的用户列表
		userTotal: 0,
		logClues: '', // 日志跟踪用
		loginStatus: '', // 当前登录状态
		/**
		 * muted
		 */
		muted: false,
		muteRemote: false,
		showHDTips: false, // 默认不显示清晰度弹窗
		mode: 'RTC',
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
		debug: false, // 默认关闭 debug
		videoType: '', // videoType : 0 - camera, 1 - screen
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
		audioPushing: false,
		videoPushing: false,
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
	onLoad: function (options)
	{
		// Utils.log(`onLoad`);
		// get roomId from page query param
		this.roomId = options.roomId;
		// default role to broadcaster
		this.role = parseInt(options.role) || 1;
		// 是否自动拉流
		this.autoPull = (options.autoPull === 'true') ? true : false;
		// 是否自动推流
		this.autoPush = (options.autoPush === 'true') ? true : false;
		// 
		this.appId = options.appId;
		// 
		this.customServer = options.customServer;
		// 
		this.isCustom = (options.isCustom === 'true') ? true : false;
		// 
		this.isTest = (options.isTest === 'true') ? true : false;
		// 
		this.logSubmit = (options.logSubmit === 'true') ? true : false;

		Utils.log(`<demo> this.autoPull : ${this.autoPull} this.autoPush : ${this.autoPush} isCustom: ${this.isCustom} customServer: ${this.customServer}`);
		//

		this.uid = options.userId;

		// cid -- connectId 由 gateway 统一生成 -- 在 join 的 response 中返回来
		// 故，此处初始化为 ''
		this.cid = '';
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
		wx.setKeepScreenOn({
			keepScreenOn: true
		});

		// init layouter control
		this.initLayouter();
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function ()
	{
		let roomId = this.roomId;
		let uid = this.uid;
		let appId = this.appId;
		let isTest = this.isTest;

		// init TTT Engine
		this.initEngine(appId, uid, roomId, isTest)
			.then(() =>
			{
				let userIds = this.data.userIds || [];
				Utils.log(`<demo> init TTT Engine ok. userIds: ${JSON.stringify(userIds)}`);

				if (!!this.client)
				{
					const opts = {
						url: `rtmp://push.3ttest.cn/sdk2/${appId}-${roomId}`,
						avMode: 'audio'
					};
					this.client.setRtmpUrl(opts, () =>
					{
						Utils.log(`<demo> setRtmpUrl ok - opts: ${JSON.stringify(opts)}`);
					}, (e) =>
					{
						Utils.log(`<demo> setRtmpUrl fail - opts: ${JSON.stringify(opts)} - ${e.code} ${e.reason}`);
					});
				}

				if (this.role !== 3 && this.autoPush)
				{
					this.publish({ mode: 'av', isUpdate: false });
				}
			})
			.catch(e =>
			{
				Utils.log(`<demo> init TTT Engine failed: ${JSON.stringify(e)}`);
				wx.showToast({
					title: `登录失败 -- ${JSON.stringify(e)}`,
					icon: 'none',
					duration: 5000
				});
				//

				setTimeout(() =>
				{
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
	onShow: function ()
	{
		let media = this.data.media || [];
		Utils.log('<demo> onShow ...media: ', media);

		media.forEach(item =>
		{
			if (item.type === 'pusher')
			{
				//return for pusher
				return;
			}
			let player = this.getPlayerComponent(item.cid);
			if (!player)
			{
				Utils.log(`<demo> player ${item.cid} component no longer exists`, 'error');
			}
			else
			{
				// while in background, the player maybe added but not starting
				// in this case we need to start it once come back
				player.start();
			}
		});
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () { },

	onError: function (e) { Utils.log(`<demo> error: ${JSON.stringify(e)}`); },

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function ()
	{
		// Utils.log(`onUnload`);
		clearInterval(this.logTimer);
		this.logTimer = null;

		// unlock index page join button
		let pages = getCurrentPages();
		if (pages.length >= 1)
		{
			//unlock join
			let indexPage = pages[0];
		}

		// unpublish sdk and leave roomId
		if (this.canPublsh())
		{
			try
			{
				if (!!this.client)
				{
					this.client.unpublish(() => {
						Utils.log('<demo> unpublish succ');
					}, (e) => {
						Utils.log(`<demo> unpublish fail - ${e}`);
					});
				}
				else
				{
					reject({
						code: 400,
						reason: 'TTTEngine is null. Are you init?'
					});
				}
			}
			catch (e)
			{
				Utils.log(`<demo> unpublish fail - ${e}`);
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
	onShareAppMessage: function () { },

	/**
	 * calculate size based on current media length
	 * sync the layout info into each media object
	 */
	syncLayout: function (media)
	{
		let sizes = this.layouter.getSize(media.length);
		for (let i = 0; i < sizes.length; i++)
		{
			let size = sizes[i];
			let item = media[i];

			if (item.holding)
			{
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
	hasMedia: function (mediaType, uid, streamId)
	{
		let media = this.data.media || [];
		return media.filter(item =>
		{
			return item.type === mediaType && `${item.uid}` === `${uid}` && (streamId === '' || item.streamId === streamId)
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
	addMedia: function (mediaType, uid, streamId, cid, url, videoType, options)
	{
		Utils.log(`<demo> add media ${mediaType} ${cid} ${url}`);
		let media = this.data.media || [];

		// 将 pusher 放置到首位
		if (mediaType === 'pusher')
		{
			//pusher
			media.splice(0, 0, {
				key: options.key,
				type: mediaType,
				uid: uid,
				streamId: streamId,
				cid: `${cid}`,
				holding: false,
				url: url,
				videoType,
				left: 0,
				top: 0,
				width: 0,
				height: 0
			});
		}
		else
		{
			//player
			media.push({
				key: options.key,
				rotation: options.rotation,
				type: mediaType,
				uid: uid,
				streamId: streamId,
				cid: `${cid}`,
				holding: false,
				url: url,
				videoType,
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
	removeMedia: function (uid, streamId)
	{
		Utils.log(`<demo> remove media - uid: ${uid} streamId: ${streamId}`);
		let media = this.data.media || [];
		media = media.filter(item =>
		{
			return !(`${item.uid}` === `${uid}` && (streamId === '' || item.streamId === streamId))
		});

		if (media.length !== this.data.media.length)
		{
			media = this.syncLayout(media);
			this.refreshMedia(media);
		}
		else
		{
			Utils.log(`<demo> media not changed: ${JSON.stringify(media)}`)
			return Promise.resolve();
		}
	},

	/**
	 * remove all the media item
	 */
	removeAllMedia: function (mediaType)
	{
		Utils.log('<demo> remove all the media item');
		let media = this.data.media || [];
		media = media.filter(item =>
		{
			return `${item.type}` !== `${mediaType}`
		});

		if (media.length !== this.data.media.length)
		{
			media = this.syncLayout(media);
			this.refreshMedia(media);
		}
	},

	/**
	 * update media object
	 * the media component will be fully refreshed if you try to update key
	 * property.
	 */
	updateMedia: function (uid, streamId, options)
	{
		Utils.log(`<demo> update media ${uid} ${JSON.stringify(options)}`);
		let media = this.data.media || [];
		let changed = false;
		for (let i = 0; i < media.length; i++)
		{
			let item = media[i];
			if (`${item.uid}` === `${uid}` && (streamId === '' || streamId === item.streamId))
			{
				media[i] = Object.assign(item, options);
				changed = true;
				Utils.log(`<demo> after update media ${uid} ${JSON.stringify(item)}`)
				break;
			}
		}

		if (changed)
		{
			return this.refreshMedia(media);
		}
		else
		{
			Utils.log(`<demo> media not changed: ${JSON.stringify(media)}`)
			return Promise.resolve();
		}
	},

	/**
	 * call setData to update a list of media to this.data.media
	 * this will trigger UI re-rendering
	 */
	refreshMedia: function (media)
	{
		return new Promise((resolve) =>
		{
			/*
			for (let i = 0; i < media.length; i++) {
			  if (i < MAX_USER) {
				//show
				media[i].holding = false;
			  } else {
				//hide 
				media[i].holding = true;
			  }
			}
			*/

			if (media.length > MAX_USER)
			{
				wx.showToast({
					title: '由于房内人数超过7人，部分视频未被加载显示'
				});
			}

			Utils.log(`<demo> updating media: ${JSON.stringify(media)}`);
			this.setData({ media: media }, () => { resolve(); });
		});
	},

	onModeClick: function (event)
	{
		var mode = 'RTC';
		switch (event.target.dataset.mode)
		{
			case 'SD':
				mode = 'SD';
				break;
			case 'HD':
				mode = 'HD';
				break;
			case 'FHD':
				mode = 'FHD';
				break;
			case 'RTC':
				mode = 'RTC';
				break;
		}

		this.setData({
			mode: mode,
			showHDTips: false
		});
	},

	bindPickerChange: function (e)
	{
		let index = e.detail.value;
		const selectUserId = this.data.userIds[index];
		this.setData({
			selectIndex: index,
			selectUserId: selectUserId
		});

		Utils.log(`<demo> picker发送选择改变，选中项为：${e.detail.value} selectUserId: ${this.data.selectUserId}`);
	},

	/**
	 * callback when leave button called
	 */
	onLeaveClick: function ()
	{
		wx.showModal({
			title: '确认',
			content: '将退出当前通道，确定吗？',
			showCancel: true,
			success: (res) =>
			{
				if (res.confirm)
				{
					if (!this.leaving)
					{
						this.leaving = true;

						let client = this.client;
						if (!!client)
						{
							client.destroy();
						}
						wx.reLaunch({
							url: '../index/index'
						});

						// this.navigateIndex();
					}
				}
				else if (res.cancel)
				{
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
	navigateBack: function ()
	{
		Utils.log(`<demo> attemps to navigate back`);
		if (getCurrentPages().length > 1)
		{
			//have pages on stack
			wx.navigateBack({});
		}
		else
		{
			//no page on stack, usually means start from shared links
			wx.redirectTo({
				url: '../index/index',
			});
		}
	},

	navigateIndex: function ()
	{
		wx.redirectTo({
			url: '../index/index',
		});
	},

	/**
	 * 订阅选定的用户的音视频
	 */
	onSubscribeClick: function ()
	{
		if (this.data.selectUserId !== 0)
		{
			this.subscribe(this.data.selectUserId, '', '0', false);
		}
		else
		{
			wx.showToast({
				title: '请从左侧列表中选择 userId',
				icon: 'none',
				duration: 5000
			});
		}
	},

	/**
	 * unsubscribe
	 */
	onUnsubscribeClick: function ()
	{
		if (this.data.selectUserId !== 0)
		{
			this.unsubscribe(this.data.selectUserId, '', true);
		}
		else
		{
			wx.showToast({
				title: '请从左侧列表中选择 userId',
				icon: 'none',
				duration: 5000
			});
		}
	},

	subscribe: function (userId, streamId, videoType, isUpdate)
	{
		// 最多 7 路
		if (this.data.media.length >= MAX_USER)
		{
			wx.showToast({
				title: `已到最大支持路数： ${MAX_USER}`,
				icon: 'none',
				duration: 5000
			});

			return;
		}

		if (this.hasMedia('player', userId, streamId))
		{
			// TODO : retrieve the userId & connectId from peers(local store)
			wx.showToast({
				title: '该路流已存在，无需重复',
				icon: 'none',
				duration: 5000
			});

			return;
		}

		// 
		new Promise((resolve, reject) =>
		{
			let client = this.client;
			if (this.data.connState === 2 && !!client)
			{
				// TODO : retrieve the userId & connectId from peers(local store)
				wx.showToast({
					title: '已发出请求，请稍候',
					icon: 'none',
					duration: 5000
				});

				// 
				const opts = {
					// isUpdate,
					streamId,
					userId
				};
				client.subscribe(
					opts,
					(data) => {
						Utils.log(`<demo> client subscribe succ - opts: ${JSON.stringify(opts)} data :${JSON.stringify(data)}`);
						resolve(data);
					}, (e) => {
						Utils.log(`<demo> client subscribe fail - opts: ${JSON.stringify(opts)} - ${e.code} ${e.reason}`);
						reject(e);
					});
			}
			else
			{
				reject({
					code: 400,
					reason: `connState : ${this.data.connState}. 尚未完成加入通道`
				});
			}
		}).then(data =>
		{
			Utils.log(`<demo> subscribe url: ${data.url}`);

			if (this.hasMedia('player', data.userId, data.streamId))
			{
				// if existing, update property
				// change key property to refresh live-player
				this.updateMedia(data.userId, data.streamId, {
					url: data.url
				});
			}
			else
			{
				//if not existing, add new media
				let ts = new Date().getTime();

				this.addMedia('player', data.userId, data.streamId, data.connectId, `${data.url}`, videoType, {
					key: ts,
					rotation: data.rotation
				});

				/*
				let client = this.client;
				if (!!client)
				{
					const player = this.getPlayerComponent(data.connectId);
					player && player.setMediaStatCB({
						userId: data.userId,
						callback: (opts) =>
						{
							// 
							const {
								code,
								type,
								userId,
								message
							} = opts;
							client.mediaStat(code, type, userId, message);
						}
					});
				}
				*/
			}

			// 
			this.setLiveMixerLayout();
		}).catch(e =>
		{
			Utils.log(`<demo> subscribe failed - ${e.code} ${e.reason}`);

			wx.showToast({
			  title: `拉流失败 -- ${JSON.stringify(e)}`,
			  icon: 'none',
			  duration: 5000
			});
		});
	},

	unsubscribe: function (userId, streamId, isTip)
	{
		Utils.log(`<demo> unsubscribe media -  userId: ${userId} streamId: ${streamId}`);
		new Promise((resolve) =>
		{
			let client = this.client;
			if (!!client)
			{
				const opts = {
					streamId,
					userId
				};
				client.unsubscribe(
					opts,
					() => {
						Utils.log(`<demo> client unsubscribe succ - opts: ${JSON.stringify(opts)} url:${data.url}`);
						// 
						this.removeMedia(userId, streamId);

						// 
						this.setLiveMixerLayout();
					}, (e) => {
						Utils.log(`<demo> client unsubscribe fail - opts: ${JSON.stringify(opts)} - ${e.code} ${e.reason}`);
					});
			}
			resolve();
		}).catch(e =>
		{
			Utils.log(`<demo> unsubscribe ${userId} failed: ${e.code} ${e.reason}`);
		});
	},

	resubscribeAll: function ()
	{
		Utils.log(`<demo> resubscribeAll media`);
		new Promise((resolve) =>
		{
			// 
			let media = this.data.media || [];
			// 
			for (let i = 0; i < media.length; i++)
			{
				let item = media[i];

				if (`${item.type}` !== 'player')
					continue;

				//
				this.subscribe(item.uid, '', item.videoType, true);
			}

			resolve();
		}).catch(e =>
		{
			Utils.log(`<demo> resubscribeAll failed: ${e.code} ${e.reason}`);
		});
	},

	unsubscribeAll: function ()
	{
		Utils.log(`<demo> unsubscribeAll media`);
		new Promise((resolve) =>
		{
			// 
			let media = this.data.media || [];
			// 
			for (let i = 0; i < media.length; i++)
			{
				let item = media[i];

				if (`${item.type}` !== 'player')
					continue;

				let client = this.client;
				if (!!client)
				{
					const opts = {
						streamId,
						userId   : item.uid
					};
					client.unsubscribe(opts, () => {
							Utils.log(`<demo> unsubscribe fail - opts: ${JSON.stringify(opts)}`);
						}, (e) => {
							Utils.log(`<demo> unsubscribe fail - opts: ${JSON.stringify(opts)} - ${e}`);
						});
				}
			}

			this.removeAllMedia('player');

			resolve();
		}).catch(e =>
		{
			Utils.log(`<demo> unsubscribeAll failed: ${e.code} ${e.reason}`);
		});
	},

	/**
	 * publish / unpublish
	 */
	onPublishClick: function ()
	{
		if (!this.data.audioPushing && !this.data.videoPushing)
			this.publish({ mode: 'av', isUpdate: false });
		else
			this.unpublish({ mode: 'av' });
	},

	onPublishAudioClick: function ()
	{
		// NON-SUPPORTED
	},

	onPublishVideoClick: function ()
	{
		if (!this.data.videoPushing)
		{
			this.setData({
				enableCamera: true
			});

			this.publish({ mode: 'video', isUpdate: false });
		}
		else
		{
			this.setData({
				enableCamera: false
			});

			this.unpublish({ mode: 'video' });
		}
	},

	publish: function (opts)
	{
		const {
			mode,
			isUpdate
		} = opts;

		// 最多 7 路
		if (this.data.media.length >= MAX_USER)
		{
			wx.showToast({
				title: `已到最大支持路数 -- ${MAX_USER}`,
				icon: 'none',
				duration: 5000
			});

			return;
		}

		let curTS = new Date().getTime();
		Utils.log(`<demo> ****** client publish - opts: ${JSON.stringify(opts)} curTS: ${curTS}`);

		new Promise((resolve, reject) =>
		{
			let client = this.client;
			if (this.data.connState === 2 && !!client)
			{
				// and get my stream publish url
				if (this.canPublsh())
				{
					wx.showToast({
						title: '已发出请求，请稍候',
						icon: 'none',
						duration: 5000
					});

					if (mode === 'av')
					{
						client.publish(
							(data) =>
							{
								Utils.log(`<demo> client publish succ - data: ${JSON.stringify(data)}`);
								resolve(data.url);
							},
							(e) =>
							{
								Utils.log(`<demo> client publish fail - ${e.code} ${e.reason}`);
								reject(e);
							}); // ,
						// isUpdate);
					}
					else if (mode == 'video')
					{
						client.publishVideo(
							(data) =>
							{
								Utils.log(`<demo> client publish video succ - url:${data.url}`);
								resolve(data.url);
							},
							(e) =>
							{
								Utils.log(`<demo> client publish video fail - ${e.code} ${e.reason}`);
								reject(e);
							}); // ,
					}
					else if (mode == 'audio')
					{
						client.publishAudio(
							(data) =>
							{
								Utils.log(`<demo> client publish audio succ - url:${data.url}`);
								resolve(data.url);
							},
							(e) =>
							{
								Utils.log(`<demo> client publish audio fail - ${e.code} ${e.reason}`);
								reject(e);
							}); // ,
					}
					else
					{
						reject({
							code: 400,
							reason: 'Unknown publish MODE'
						});
					}
				}
				else
				{
					reject({
						code: 400,
						reason: '请求被拒，请检查用户角色'
					});
				}
			}
			else
			{
				reject({
					code: 400,
					reason: `connState : ${this.data.connState}. 尚未完成加入通道`
				});
			}
		}).then(url =>
		{
			Utils.log(`<demo> publish roomId: ${this.roomId}, uid: ${this.uid} cid: ${this.cid} url: ${url}`);

			if (this.hasMedia('pusher', this.uid, `${this.uid}`))
			{
				// if existing, update property
				// change key property to refresh live-player
				this.updateMedia(this.uid, `${this.uid}`, { url });
			}
			else
			{
				// first time init, add pusher media to view		
				let ts = new Date().getTime();

				this.addMedia('pusher', this.uid, `${this.uid}`, this.cid, url, '0', { key: ts });
				// 
			}
			// 
			this.setLiveMixerLayout();

			/*
			const tttPusher = this.getPusherComponent();
			if (!!tttPusher) {
				  let client = this.client;
				  if (!!client) {
					  // 1. 将 netstatus 日志采集回调 植入 tttPusher 中
					  tttPusher && tttPusher.setMediaStatCB({
						  userId: this.uid,
						  callback: (opts) => {
						  const { code, type, userId, message } = opts;
				  	
						  client.mediaStat( code, type, userId, message );
						  }
					  });
				  }
		  	
				  tttPusher.start();
			}
			*/

			// 
			if (mode === 'audio')
			{
				this.setData({
					audioPushing: true
				});
			}
			else if (mode === 'video')
			{
				this.setData({
					videoPushing: true
				});
			}
			else if (mode === 'av')
			{
				this.setData({
					audioPushing: true,
					videoPushing: true
				});
			}
		}).catch(e =>
		{
			Utils.log(`<demo> publish failed: ${e.code} ${e.reason}`);
			// 

			if (e.code === 1099) // NONSUPPORT
			{
				return;
			}

			// 
			wx.showToast({
				title: `提示 -- ${e.reason}`,
				icon: 'none',
				duration: 5000
			});

			// 
			if (mode === 'audio')
			{
				this.setData({
					audioPushing: false
				});
			}
			else if (mode === 'video')
			{
				this.setData({
					videoPushing: false
				});
			}
			else if (mode === 'av')
			{
				this.setData({
					audioPushing: false,
					videoPushing: false
				});
			}
		});
	},

	unpublish: function (opts)
	{
		const {
			mode
		} = opts;

		Utils.log(`<demo> client unpublish - opts: ${JSON.stringify(opts)} this.data.audioPushing: ${this.data.audioPushing} this.data.videoPushing: ${this.data.videoPushing}`);
		new Promise((resolve, reject) =>
		{
			let client = this.client;
			if (this.data.connState === 2 && !!client)
			{
				if (mode === 'av')
				{
					client.unpublish((opts) => resolve(), (e) => reject(e));

					this.setData({
						audioPushing: false,
						videoPushing: false
					});
				}
				else if (mode === 'video')
				{
					client.unpublishVideo((opts) => resolve(), (e) => reject(e));

					this.setData({
						videoPushing: false
					});
				}
				else if (mode === 'audio')
				{
					client.unpublishAudio((opts) => resolve(), (e) => reject(e));

					this.setData({
						audioPushing: false
					});
				}
			}
			else
			{
				reject({
					code: 400,
					reason: '尚未完成加入通道`'
				});
			}
			// 
		}).then(() =>
		{
			// 
			if (!this.data.audioPushing && !this.data.videoPushing)
			{
				this.removeMedia(this.uid, `${this.uid}`);
			}
			// 
			this.setLiveMixerLayout();

			// 
			Utils.log(`<demo> unpublish - this.data.audioPushing: ${this.data.audioPushing} this.data.videoPushing: ${this.data.videoPushing} roomId: ${this.roomId}, uid: ${this.uid} cid: ${this.cid}`);
		}).catch(e =>
		{
			Utils.log(`<demo> unpublish failed: ${e.code} ${e.reason}`);
		});
	},

	/**
	 * 
	 * @param {*} e 
	 */
	onPullFailed: function (e)
	{
		Utils.log(`<demo> ttt-player failed!!!. player failed: ${JSON.stringify(e.detail.errMsg)}`);
		//

		this.unsubscribe(e.detail.userId, '', false);

		let msg = JSON.stringify(e.detail.errMsg);
		if (e.detail.errCode === -2301)
		{
			msg = '拉流失败：到 CDN 网络断连，且经多次重连抢救无效，更多重试请自行重启拉流'
		}

		wx.showToast({
			title: `小程序 player 报错 -- ${msg}`,
			icon: 'none',
			duration: 5000
		});
	},

	/**
	 * 推流状态更新回调
	 * 向 CDN 推流失败时，回调
	 */
	onPushFailed: function (e)
	{
		Utils.log(`<demo> ttt-pusher failed!!!. pusher failed: ${JSON.stringify(e.detail.errMsg)}`);
		//
		this.unpublish({ mode: 'av' });

		let msg = JSON.stringify(e.detail.errMsg);
		if (e.detail.errCode === -1307)
		{
			msg = '推流失败：到 CDN 网络断连，且经多次重连抢救无效，更多重试请自行重启推流'
		}

		wx.showToast({
			title: `小程序 pusher 报错 -- errCode: ${e.detail.errCode} errMsg: ${msg}`,
			icon: 'none',
			duration: 5000
		});
	},

	// 踢出指定用户
	onKickoutClick: function ()
	{
		// 
		if (!this.data.selectUserId)
		{
			wx.showToast({
				title: '请从左侧列表中选择 userId',
				icon: 'none',
				duration: 5000
			});
			return;
		}
		wx.showModal({
			title: 'kickout?',
			content: `点击确定将踢出用户 ${this.data.selectUserId}，是否确定？`,
			success: (res) =>
			{
				if (res.confirm)
				{
					// 
					let client = this.client;
					if (!client)
						return;
					client.kickout(this.data.selectUserId, () => { }, (e) => { });
				}
			}
		});
		//
	},

	/**
	 * 静音回调
	 */
	onMuteLocalClick: function ()
	{
		this.setData({
			muted: !this.data.muted
		});

		Utils.log(`<demo> muted : ${this.data.muted}`);

		// 
		// this.onEnableCamera();
	},

	onEnableCamera: function ()
	{
		this.setData({
			enableCamera: !this.data.enableCamera
		});

		Utils.log(`<demo> enableCamera : ${this.data.enableCamera}`);
	},

	/**
	 * 摄像头方向切换回调
	 */
	onSwitchCameraClick: function ()
	{
		Utils.log(`<demo> switching camera`);
		// get pusher component via id
		const tttPusher = this.getPusherComponent();
		tttPusher && tttPusher.switchCamera();
	},

	/**
	 * 美颜回调
	 */
	onMakeupClick: function ()
	{
		let beauty = this.data.beauty == 5 ? 0 : 5;
		this.setData({
			beauty: beauty
		});
	},

	onMuteClick: function ()
	{
		let client = this.client;
		if (!client)
		{
			return;
		}

		var muteRemote = !this.data.muteRemote;
		this.setData({
			muteRemote: muteRemote
		});

		if (muteRemote)
		{
			client.mute(this.data.selectUserId, () => { }, (e) => { });
		}
		else
		{
			client.unmute(this.data.selectUserId, () => { }, (e) => { });
		}
	},

	onSwitchMode: function ()
	{
		var showTips = !this.data.showHDTips;
		this.setData({
			showHDTips: showTips
		});
	},

	/**
	 * 是否开启 debug
	 */
	onDebugClick: function ()
	{
		this.setData({
			debug: !this.data.debug
		});

		// 
		this.injectMediaStat();

		// 
		this.onUpload();
	},

	onUpload: function ()
	{
		wx.getStorageInfo({
			success(res)
			{
				console.log(res.keys);
				console.log(res.currentSize);
				console.log(res.limitSize);

				for (let i = 0; i < res.keys.length; i++)
				{
					let item = res.keys[i];
					wx.getStorage({
						key: item,
						success(res)
						{
							console.log(`--- --- --- ${res.data}`);
						}
					});
				}
			}
		});
		wx.clearStorage();
		//
	},

	/**
	 * 获取屏幕尺寸以用于之后的视窗计算
	 */
	initLayouter: function ()
	{
		// get window size info from systemInfo
		const systemInfo = app.globalData.systemInfo;
		// 64 is the height of bottom toolbar
		// 120 is the height of input area 
		this.layouter = new Layouter(systemInfo.windowWidth, systemInfo.windowHeight - 80 - 50);
	},

	/**
	 * 向 ttt-pusher，ttt-player 注入 媒体传输统计 的回调函数
	 */
	injectMediaStat: function ()
	{
		let client = this.client;
		if (!client)
		{
			return;
		}

		// 1. 将 netstatus 日志采集回调 植入 tttPusher 中
		const tttPusher = this.getPusherComponent();
		tttPusher && tttPusher.setMediaStatCB({
			userId: this.uid,
			callback: (opts) =>
			{
				const {
					code,
					type,
					userId,
					message
				} = opts;
				client.mediaStat(code, type, userId, message);
			}
		});

		// 2. 将 netstatus 日志采集回调 植入 tttPlayer 中
		let media = this.data.media || [];
		for (let i = 0; i < media.length; i++)
		{
			let item = media[i];

			const player = this.getPlayerComponent(item.cid);
			player && player.setMediaStatCB({
				userId: this.uid,
				callback: (opts) =>
				{
					const {
						code,
						type,
						userId,
						message
					} = opts;
					client.mediaStat(code, type, userId, message);
				}
			});
		}
	},

	/**
	 * 初始化 3t Engine (SDK)
	 */
	initEngine: function (appId, uid, roomId, isTest)
	{
		return new Promise((resolve, reject) =>
		{
			let client = {}

			// Create Client
			Utils.log(`<demo> initEngine ...`);

			// isTest 用来表明是否为 测试环境 -- true：测试环境；false：生产环境
			const miniappAuServer = this.customServer;
			// const appId = TEST_APPID;// APPID;// ;
			// TEST_APPID
			TTTMAEngine.TTTLog.setLogSubmit(Boolean(this.logSubmit));

			client = new TTTMAEngine.Client(appId, uid, isTest);
			// store TTT Engine 
			this.client = client;
			if (!!client)
			{
				// 
				client.setLogLevel('LOG_DEBUG');
				// 
				client.setUserRole(this.role, () => { }, () => { });
				// client.setPort(8443);
				// 
				// 调用 TTTEngine 初始化
				client.init(
					{
						appId,
						userId: uid,
						role: this.role,
						rtmpUrl: `rtmp://push.3ttest.cn/sdk2/${appId}-${roomId}`,
						disIploc: this.isCustom,// true, // disIploc
						auServer: miniappAuServer // 'miniapp1.3ttech.cn' // 'stech.3ttech.cn' // 'gzeduservice.3ttech.cn' // customServer
					},
					(e) =>
					{
						// 
						const {
							logClues
						} = e;
						this.setData({
							logClues: logClues
						});

						Utils.log(`<demo> client init success`);

						//subscribe stream events from TTT Engine
						// 注：一定要确保 subscribeEvents 在 join 之前调用 -- 以免 join 成功后来自下层的事件不能无遗漏地上上层投递
						this.subscribeEvents(client);

						// pass key instead of undefined if certificate is enabled
						client.join(
							'',
							roomId,
							(data) =>
							{
								// store the conn state.
								this.setData({
									connState: 2
								});

								const {
									connectId,
									pushUrl,
									peers
								} = data;

								this.cid = connectId;

								Utils.log(`<demo> client join room success. connectId: ${connectId} pushUrl: ${pushUrl} peers: ${peers}`);

								resolve();
							},
							(e) =>
							{
								Utils.log(`<demo> client join room failed: ${e.code} ${e.reason}`);

								reject(e);
							});
					},
					(e) =>
					{
						Utils.log(`<demo> client init failed: ${e} ${e.code} ${e.reason}`);

						reject(e);
					}
				);
			}
			else
			{
				reject({
					code: 400,
					reason: 'TTTEngine is null. Are you init?'
				});
			}
		});
	},

	/**
	 * return player component via cid
	 */
	getPlayerComponent: function (cid)
	{
		const tttPlayer = this.selectComponent(`#rtc-player-${cid}`);
		return tttPlayer;
	},

	/**
	 * return pusher component
	 */
	getPusherComponent: function ()
	{
		const tttPusher = this.selectComponent(`#rtc-pusher`);
		return tttPusher;
	},

	setLiveMixerLayout: function ()
	{
		if (!this.client)
		{
			return;
		}

		// 
		let liveMixerLayout = {
			backgroundColor: 0x000000,
			width: 640,
			height: 360,
			users: []
		}

		let media = this.data.media || [];
		let nCnt = media.length;

		let wh = 1;
		let splitWnd = [];
		if (nCnt <= 1)
		{
			wh = 1;
			splitWnd = splitWnd1;
		}
		else if (nCnt <= 4)
		{
			wh = 0.5
			splitWnd = splitWnd4;
		}
		else if (nCnt <= 9)
		{
			wh = 0.33
			splitWnd = splitWnd9;
		}
		else
			; // TODO : 

		let nIndex = 0;

		for (let i = 0; i < media.length; i++)
		{
			let item = media[i];
			if (Boolean(item))
			{
				let user = {};
				// 
				user.userId = item.uid;
				user.streamId = item.streamId;
				user.x = splitWnd[nIndex].x;
				user.y = splitWnd[nIndex].y;
				user.w = wh;
				user.h = wh;
				user.z = 0;
				user.renderMode = 'scale';

				liveMixerLayout.users.push(user);

				nIndex++;
			}
		}

		console.log(`<demo> setLiveMixerLayout - liveMixerLayout: ${JSON.stringify(liveMixerLayout)}`);

		this.client.setLiveMixerLayout(liveMixerLayout, () => { }, () => { });
	},

	/**
	 * 如果
	 */
	canPublsh: function ()
	{
		return (this.role === 1 || this.role === 2);
	},

	stopAllMedia: function ()
	{
		this.unpublish({ mode: 'av' });
		// 
		this.unsubscribeAll();
	},

	/**
	 * 注册stream事件
	 */
	subscribeEvents: function (client)
	{
		/**
		 * sometimes the video could be rotated
		 * this event will be fired with ratotion
		 * angle so that we can rotate the video
		 * NOTE video only supportes vertical or horizontal
		 * in case of 270 degrees, the video could be
		 * up side down
		 */
		client.on(
			'video-rotation',
			(e) =>
			{
				Utils.log(`<demo> event [video-rotated] - ${e.rotation} ${e.cid}`);
				setTimeout(() =>
				{
					const player = this.getPlayerComponent(e.cid);
					player && player.rotate(e.rotation);
				}, 1000);
			});

		client.on(
			'session-status',
			(e) =>
			{
				Utils.log(`<demo> event [session-status] - uid: ${e.uid} cid: ${e.cid} status: ${e.status}`);
				// 
				let loginStatus = '';
				if (e.code == 3000)
				{
					loginStatus = `正在重连 - ${client.auServer}`
				} else if (e.code == 200)
				{
					loginStatus = `已连接 - ${client.auServer}`
				} else if (e.code == 210)
				{
					loginStatus = `登录在线 - ${client.auServer}`
				} else if (e.code == 300)
				{
					loginStatus = `已连接: ${client.auServer}`
				} else if (e.code == 310)
				{
					loginStatus = `登录在线 - ${client.auServer}`
				} else if (e.code == 1000)
				{
					loginStatus = `最终失败 - ${client.auServer}`
				} else
				{
					loginStatus = `未知 - ${client.auServer}`
				}

				this.setData({
					loginStatus
				});

				// 已登录在线
				if (e.code == 310 || e.code == 210)
				{
					this.setData({
						connState: 2
					});

					// 此处仅仅是清空 -- 因为 sdk 内部随后会将所有 users ，通过 user-online 通知上来
					this.setData({
						userIds: [],
						userTotal: 0
					});
				}

				// 当前断网进入重连状态 -- 
				if (e.code == 3000)
				{
					this.setData({
						connState: 0
					});
					// 
					// 关闭所有 media
					this.stopAllMedia();
				}

				if (e.code == 310)
				{
					Utils.log(`<demo> event [session-status] - uid: ${e.uid} e.code: ${e.code}`);
					// 重连且登录成功 -- 自动推流
					if (this.role !== 3 && !this.data.audioPushing && !this.data.videoPushing)
					{
						this.publish({ mode: 'av', isUpdate: true });
					}
					// 
					this.resubscribeAll();
				}
				// 
				wx.showToast({
					title: `${loginStatus}`,
					icon: 'none',
					duration: 5000
				});
			});

		client.on(
			'user-online',
			(userData) =>
			{
				const { userId, role, ueType } = userData;

				Utils.log(`<demo> event [user-online] - uid: ${userId} role: ${role} ueType: ${ueType}`);

				// 
				let userIds = this.data.userIds || [];

				userIds.push(`${userId}`);
				//
				let userTotal = userIds.length;

				let index = 0;
				let selectUserId = userIds[0];
				this.setData({
					userIds: userIds,
					userTotal,
					selectIndex: index,
					selectUserId: selectUserId
				});
				//

				Utils.log(`<demo> event [user-online] - userIds: ${JSON.stringify(userIds)}`);
				// 
				wx.showToast({
					title: `user-online - userId: ${userId}`,
					icon: 'none',
					duration: 5000
				});
			});

		client.on(
			'user-offline',
			(userData) =>
			{
				const { userId } = userData;

				Utils.log(`<demo> event [user-offline] - uid: ${userId}`);

				// 
				if (this.hasMedia('player', userId, ''))
				{
					// 
					// this.unsubscribe(userId, '', false);
					// 首先移除该用户流（如果已存在）
					this.removeMedia(userId, '');
				}

				// 
				this.setLiveMixerLayout();

				// 
				let userIds = this.data.userIds || [];
				userIds = userIds.filter(item =>
				{
					return `${item}` != `${userId}`
				});

				Utils.log(`<demo> event [user-offline] - userIds: ${JSON.stringify(userIds)}`);

				// 
				let index = 0;
				let selectUserId = 0;

				let userTotal = userIds.length;
				if (userTotal > 0)
				{
					selectUserId = userIds[0];
					index = 0;
				}

				this.setData({
					userIds: userIds,
					userTotal,
					selectIndex: index,
					selectUserId: selectUserId
				});
				// 
				wx.showToast({
					title: `user-offline - userId: ${userId}`,
					icon: 'none',
					duration: 5000
				});
			});

		client.on(
			'video-update',
			(e) =>
			{
				const userId = e.uid;
				const videoType = e.videoType;

				const ts = new Date().getTime();
				Utils.log(`<demo> event [video-update] - ${JSON.stringify(e)}`);

				this.setData({
					videoType: videoType
				});

				wx.showToast({
					title: `video-update - videoType: ${e.videoType} mediaType: ${e.mediaType}`,
					// title: `session-status：${e.status}`,
					icon: 'none',
					duration: 5000
				});
			});

		/**
		 * rtmp-failure
		 */
		client.on(
			'rtmp-success',
			(e) =>
			{
				const rtmpUrl = e.rtmpUrl;
				const status = e.status;
				const reason = e.reason;
				Utils.log(`<demo> event [rtmp-success] - ${JSON.stringify(e)}`);

				// 
				wx.showToast({
					title: `rtmp-success - status: ${status} rtmpUrl: ${rtmpUrl}`,
					icon: 'none',
					duration: 5000
				});
			});

		/**
		 * rtmp-failure
		 */
		client.on(
			'rtmp-failure',
			(e) =>
			{
				const rtmpUrl = e.rtmpUrl;
				const status = e.status;
				const reason = e.reason;
				Utils.log(`<demo> event [rtmp-failure] - ${JSON.stringify(e)}`);

				// 
				wx.showToast({
					title: `rtmp-failure - status: ${status} rtmpUrl: ${rtmpUrl}`,
					icon: 'none',
					duration: 5000
				});
			});

		/**
		 * fired when new stream join the room
		 */
		client.on(
			'stream-added',
			(e) =>
			{
				const userId = e.uid;
				const streamId = e.streamId;
				const ts = new Date().getTime();
				Utils.log(`<demo> event [stream-added] - ${JSON.stringify(e)} this.autoPull: ${this.autoPull}`);

				// 如果勾选了 自动拉流 ，则自动拉取该用户流
				if (this.autoPull)
				{
					this.subscribe(userId, streamId, e.videoType, false);
				}
				// 
				wx.showToast({
					title: `stream-added - userId: ${userId} streamId: ${streamId} videoType: ${e.videoType} mediaType: ${e.mediaType}`,
					icon: 'none',
					duration: 5000
				});
			});

		/**
		 * remove stream when it leaves the room
		 */
		client.on(
			'stream-removed',
			(e) =>
			{
				const userId = e.uid;
				const streamId = e.streamId;
				Utils.log(`<demo> event [stream-removed] - ${JSON.stringify(e)}`);
				//
				if (this.hasMedia('player', userId, streamId))
				{
					this.unsubscribe(userId, streamId, false);
					// 首先移除该用户流（如果已存在）
					this.removeMedia(userId, streamId);
				}

				// 
				this.setLiveMixerLayout();
				
				// 
				wx.showToast({
					title: `stream-removed - userId: ${userId} streamId: ${streamId}`,
					icon: 'none',
					duration: 5000
				});
			});

		/**
		 * kickout by the other user
		 */
		client.on(
			'kickout',
			(e) =>
			{
				let errObj = e || {};
				let uid = errObj.uid || 0;
				let reason = errObj.reason || '';
				Utils.log(`<demo> event [kickout] - uid: ${uid}, reason: ${reason}`);

				// update the conn state.
				this.setData({
					connState: 0
				});

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

				setTimeout(() =>
				{
					wx.reLaunch({
						url: '../index/index'
					});

					// this.navigateIndex();
				}, 5000);
			});

		/**
		 * 与 miniapp-au 的连接已断开（尝试n次重连后的全局断开，才会触发该事件）
		 */
		client.on(
			'disconnected',
			(e) =>
			{
				Utils.log('<demo> event [disconnected]');

				// update the conn state.
				this.setData({
					connState: 0
				});

				// 关闭所有 media
				this.stopAllMedia();

				// destroy 
				client.destroy();

				wx.showToast({
					title: '彻底断开，将退回首页',
					icon: 'none',
					duration: 5000
				});

				setTimeout(() =>
				{
					wx.reLaunch({
						url: '../index/index'
					});

					// this.navigateIndex();
				}, 5000);
			});

		/**
		 * when bad thing happens - we recommend you to do a 
		 * full reconnect when meeting such error
		 * it's also recommended to wait for few seconds before
		 * reconnect attempt
		 */
		client.on(
			'error',
			(e) =>
			{
				let errObj = e || {};
				let code = errObj.code || 0;
				let reason = errObj.reason || '';
				Utils.log(`<demo> event [error] - code: ${code} reason: ${reason}`);
				let ts = new Date().getTime();

				// TODO : reconnect for some code
				// ...
			});
	}
})
