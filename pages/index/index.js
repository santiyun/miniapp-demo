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
    items: [{
      name: 'PUSH_STREAM',
      display: '推流',
      checked: 'true'
    }],
    // 入房间后，是否推流
    isPushOn: true
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

  checkboxChange(e) {
    this.setData({
      isPushOn: e.detail.value
    });
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
        wx.navigateTo({
          url: `../meeting/meeting?roomId=${roomId}&userId=${userId}&role=${role}`
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