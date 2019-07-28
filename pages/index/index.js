const app = getApp()
const Utils = require('../../utils/util.js')

const {
  version
} = require('../../lib/miniapp-sdk-3t')

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
    chkUserRoles: [{
      name: 'CHAIRMAN',
      display: '主播',
      value: 1
    }, {
      name: 'PARTICIPANT',
      display: '副播',
      checked: 'true',
      value: 2
    }, {
      name: 'AUDIENCE',
      display: '观众',
      value: 3
    }],
    // 用户角色
    userRole: 2,
    // 
    chkPushOn: [{
      name: 'PUSH_STREAM',
      display: '自动推流',
      checked: false
    }],
    chkAutoPull: [{
      name: 'AUTO_SUBSCRIBE',
      display: '自动拉流',
      checked: false
    }],
    // 入房间后，是否自动推流
    isAutoPush: false,
    // 入房间后，是否自动拉流
    isAutoPull: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.roomId = "";
    this.userId = "";

    // 
    Utils.log(`index page onLoad: ${JSON.stringify(version)}`);

    //
    let userInfo = wx.getStorageSync("userInfo");
    if (userInfo) {
      this.setData({
        hasUserInfo: true,
        userInfo: userInfo
      });
    }

    // 
    this.setData({
      masdkVersion: `${JSON.stringify(version)}`
    });
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

  radioChangeUserRole: function(e) {
    let value = e.detail.value.toString();
    let items = this.data.chkUserRoles || [];

    let role = 0;

    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      if (value.search(`${item.name}`) !== -1) {
        role = item.value;
        break;
      }
    }

    this.setData({
      userRole: role
    });

    Utils.log(`radioChangeUserRole : ${this.data.userRole}`);
  },

  checkboxChangeAutoPush(e) {
    let value = e.detail.value.toString();
    let items = this.data.chkPushOn || [];

    let isAutoPush = false;

    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      if (value.search(`${item.name}`) !== -1) {
        isAutoPush = true;
        break;
      }
    }

    this.setData({
      isAutoPush: isAutoPush
    });

    Utils.log(`checkboxChangeAutoPush : ${this.data.isAutoPush}`);
  },

  checkboxChangeAutoPull(e) {
    let value = e.detail.value.toString();
    let items = this.data.chkAutoPull || [];

    let isAutoPull = false;

    for (let i = 0; i < items.length; i++) {
      let item = items[i];

      if (value.search(`${item.name}`) !== -1) {
        isAutoPull = true;
        break;
      }
    }

    this.setData({
      isAutoPull: isAutoPull
    });

    Utils.log(`checkboxChangeAutoPull : ${this.data.isAutoPull}`);
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
      });
    } else {
      //
      let role = this.data.userRole;
      let autoPull = this.data.isAutoPull;
      let autoPush = this.data.isAutoPush;

      wx.navigateTo({
        url: `../meeting/meeting?roomId=${roomId}&userId=${userId}&role=${role}&autoPull=${autoPull}&autoPush=${autoPush}`
      });
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