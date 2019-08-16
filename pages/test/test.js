// pages/test/test.js
const app = getApp()
const Utils = require('../../utils/util.js')

// 最大用户数量
const MAX_USER = 7;
const Layouter = require('../../utils/layout.js');

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
     *   uid:
     *   holding: when set to true, the block will stay while native control hidden, used when needs a placeholder for media block,
     *   url: url of pusher/player
     *   left: x of pusher/player
     *   top: y of pusher/player
     *   width: width of pusher/player
     *   height: height of pusher/player
     * }
     */
    media: [],
    // 
    pullUrl: "rtmp://pull.3ttech.cn/sdk/miniapp-3t-stream",
    pushUrl: "rtmp://push.3ttech.cn/sdk/miniapp-3t-stream",
    debug: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    wx.setNavigationBarTitle({
      title: "测试"
    });
    wx.setKeepScreenOn({
      keepScreenOn: true
    });
    // store layouter control
	this.layouter = null;
	
	// 
	let ts = new Date().getTime();
    this.addMedia('pusher', 'miniapp-3t-stream-pusher', this.data.pushUrl, {
      key: ts
	});
	this.addMedia('player', 'miniapp-3t-stream-player', this.data.pullUrl, {
		key: ts,
		rotation: 0
	  });
	
	Utils.log(`media list: ${JSON.stringify(this.data.media)}`);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    // init layouter control
    this.initLayouter();
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
	  // 
      let player = this.getPlayerComponent();
      if (!player) {
        Utils.log(`player component no longer exists`, "error");
      } else {
        Utils.log(`player component start`);
        // while in background, the player maybe added but not starting
        // in this case we need to start it once come back
        player.start();
      }
    });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    let pages = getCurrentPages();
    if (pages.length > 1) {
      //unlock join
      let indexPage = pages[0];
      indexPage.unlockJoin();
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },

  bindPushInput(e) {
    this.setData({
      pushUrl: e.detail.value
    })
  },

  bindPullInput(e) {
    this.setData({
      pullUrl: e.detail.value
    })
  },

  /**
   * return player component
   */
  getPlayerComponent: function() {
    const tttPlayer = this.selectComponent(`#rtc-player`);
    return tttPlayer;
  },

  /**
   * return pusher component
   */
  getPusherComponent: function() {
    const tttPusher = this.selectComponent(`#rtc-pusher`);
    return tttPusher;
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
  addMedia(mediaType, uid, url, options) {
    Utils.log(`add media ${mediaType} ${uid} ${url}`);
    let media = this.data.media || [];

    if (mediaType === 'pusher') {
      //pusher
      media.splice(0, 0, {
        key: options.key,
        type: mediaType,
        uid: `${uid}`,
        holding: false,
        url: url,
        left: 0,
        top: 320,
        width: 200,
        height: 280
      });
    } else {
      //player
      media.push({
        key: options.key,
        rotation: options.rotation,
        type: mediaType,
        uid: `${uid}`,
        holding: false,
        url: url,
        left: 200,
        top: 320,
        width: 200,
        height: 280
      });
    }

    /*
    media = this.syncLayout(media);
	return this.refreshMedia(media);
	*/
    this.setData({
      media: media
    });
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

  switchDebug() {
    this.setData({
      debug: !this.data.debug
    })
  },

  onStartPushing: function(e) {
    /*
    let context = wx.createLivePusherContext(this);
    context.start();
    */
    let ts = new Date().getTime();
	this.updateMedia('miniapp-3t-stream-pusher', {
		url: this.data.pushUrl,
		key: ts
	});

	const tttPusher = this.getPusherComponent();
	tttPusher.start();
  },

  onStopPushing: function(e) {
	/*
    let context = wx.createLivePusherContext(this);
	context.stop();
	*/
	
	const tttPusher = this.getPusherComponent();
	tttPusher.stop();
  },
  
  /**
   * 推流状态更新回调
   * 向 CDN 推流失败时，回调
   */
  onPushFailed: function(e) {
    Utils.log(`ttt-pusher failed!!!. pusher failed: ${JSON.stringify(e.detail.errMsg)}`);
	// 
	
	let msg = JSON.stringify(e.detail.errMsg);
	if (e.detail.errCode === -1307) {
		msg = '推流失败：到 CDN 网络断连，且经多次重连抢救无效，更多重试请自行重启推流'
	}

    wx.showToast({
      title: `小程序报错. pusher failed. errCode: ${e.detail.errCode} errMsg: ${msg}`,
      icon: 'none',
      duration: 5000
    });
  },

  onStartPlaying: function(e) {
    let ts = new Date().getTime();
	this.updateMedia('miniapp-3t-stream-player', {
		url: this.data.pullUrl,
		key: ts
	});
	
	const tttPlayer = this.getPlayerComponent();
	tttPlayer.start();
  },

  onStopPlaying: function(e) {
	const tttPlayer = this.getPlayerComponent();
	tttPlayer.stop();
  },

  onPause: function() {
    let context = wx.createLivePusherContext(this);
    context && context.pause();
  },

  onResume: function() {
    let context = wx.createLivePusherContext(this);
    context && context.resume();
  }
})
