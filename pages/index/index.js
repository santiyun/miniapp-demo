const app = getApp()
const Utils = require('../../utils/util.js')

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // used to store user info like portrait & nickname
    userInfo: {},
    hasUserInfo: false,
    // whether to disable join btn or not
    disableJoin: false,
    chkPushOn: [{
      name: 'PUSH_STREAM',
      display: '推流',
      checked: true
	}],
	chkAutoPull: [{
		name: 'AUTO_SUBSCRIBE',
		display: '自动拉流',
		checked: false
	  }],
    // 入房间后，是否推流
	isPushOn: true,
	// 入房间后，是否自动拉流
	isAutoPull: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.roomId = "9876000";
    this.userId = "9876333";

    //
    this.lock = false;
    let userInfo = wx.getStorageSync("userInfo");
    if (userInfo) {
      this.setData({
        hasUserInfo: true,
        userInfo: userInfo
      });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 只有提供了该回调才会出现转发选项
   */
  onShareAppMessage() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 进入 推拉流测试 页面
   */
  onTestClick: function() {
    // go to test page if roomId is 'test'
    wx.navigateTo({
      url: `../test/test`
    });
  },

  /**
   * callback to get user info
   * using wechat open-type
   */
  onJoinClick: function(e) {
    let userInfo = e.detail.userInfo || {};
    // store data for next launch use
    wx.setStorage({
      key: 'userInfo',
      data: userInfo,
    })
    this.onJoin(userInfo);
  },

  checkboxChangePushOn(e) {
	let value = e.detail.value.toString();
	let items = this.data.chkPushOn || [];

	let isPushOn = false;

    for (let i = 0; i < items.length; i++) {
	  let item = items[i];
	  
      if (value.search(`${item.name}`) !== -1) {
        isPushOn = true;
	  } else {
		isPushOn = false;
	  }
    }

	this.setData({
	  isPushOn: isPushOn
	});
	
	Utils.log(`checkboxChangePushOn : ${this.data.isPushOn}`);
  },

  checkboxChangeAutoPull(e) {
	let value = e.detail.value.toString();
	let items = this.data.chkAutoPull || [];

	let isAutoPull = false;

    for (let i = 0; i < items.length; i++) {
	  let item = items[i];
	  
      if (value.search(`${item.name}`) !== -1) {
        isAutoPull = true;
	  } else {
		isAutoPull = false;
	  }
    }

	this.setData({
	  isAutoPull: isAutoPull
	});
	
	Utils.log(`checkboxChangeAutoPull : ${this.data.isAutoPull}`);
  },

  /**
   * check if join is locked now, this is mainly to prevent from clicking join btn to start multiple new pages
   */
  checkJoinLock: function() {
    return !(this.lock || false);
  },

  lockJoin: function() {
    this.lock = true;
  },

  unlockJoin: function() {
    this.lock = false;
  },

  onJoin: function(userInfo) {
    userInfo = userInfo || {};
    let roomId = this.roomId || "";
    let userId = this.userId || "";

    let t = (typeof userId);

    if (!roomId || !userId) {
      wx.showToast({
        title: '请提供相应参数',
        icon: 'none',
        duration: 2000
      })
    } else {
      if (this.checkJoinLock()) {
        this.lockJoin();
        //
		let role = this.data.isPushOn ? "broadcaster" : "audience";
		let autoPull = this.data.isAutoPull;

        wx.navigateTo({
          url: `../meeting/meeting?roomId=${roomId}&userId=${userId}&role=${role}&autoPull=${autoPull}`
        });
      }
    }
  },

  onInputRoomId: function(e) {
    let value = e.detail.value;
    this.roomId = value;
  },

  onInputUserId: function(e) {
    let value = e.detail.value;
    this.userId = value;
  }
})