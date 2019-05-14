//index.js

import { version, TTTClient } from '../../lib/miniapp-sdk-3t';

//获取应用实例
const app = getApp()

let _miniappSdk = null

Page({
	data: {
		motto: `3t-miniapp-sdk: version-${version}`,
		userInfo: {},
		hasUserInfo: false,
		canIUse: wx.canIUse('button.open-type.getUserInfo')
	},
	//事件处理函数
	bindViewTap: function ()
	{
		wx.navigateTo({
			url: '../logs/logs'
		})
	},
	bindInit: function ()
	{
		//
		console.log('TTTClient:', TTTClient);

		_miniappSdk = new TTTClient({ appId: 'test900572e02867fab8131651339518', userId: 654321 });
		if (!!_miniappSdk) {
			_miniappSdk.init({ appId: 'test900572e02867fab8131651339518', userId: 654321 });
			_miniappSdk.on({ event:'streamAdd', callback:this.onStreamAdd});
			_miniappSdk.on({ event: 'streamRemove', callback: this.onStreamRemove });
		}
	},
	onStreamAdd:function(id)
	{
		console.log('demo onStreamAdd=>', id);
	},
	onStreamRemove: function (id) {
		console.log('demo onStreamRemove=>', id);
	},
	bindJoin: function ()
	{
		if (!!_miniappSdk)
			_miniappSdk.join({
				role:2,
				roomId: 9876333,
				userId: 654321,
				onSuccess: () =>
				{
					console.log('login OK')
				},
				onFailure: (err) =>
				{
					console.log('login Failed: ', err)
				}
			});
	},
	bindLeave: function ()
	{
		console.log('bindLeave _miniappSdk: ', _miniappSdk)
		if (!!_miniappSdk)
			_miniappSdk.leave()
	},
	bindDestroy: function ()
	{
		console.log('bindDestroy _miniappSdk: ', _miniappSdk)
		if (!!_miniappSdk)
			_miniappSdk.destroy()
	},
	bindPublish:function ()
	{
		if (!!_miniappSdk)
			_miniappSdk.publish({
				onSuccess: () => {
					console.log('publish OK')
				},
				onFailure: (err) => {
					console.log('publish Failed: ', err)
				}
			});
	},
	bindUnpublish:function ()
	{
		if (!!_miniappSdk)
			_miniappSdk.unpublish({
				onSuccess: () => {
					console.log('unpublish OK')
				},
				onFailure: (err) => {
					console.log('unpublish Failed: ', err)
				}
			});
	},
	onLoad: function ()
	{
		if (app.globalData.userInfo)
		{
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		}
		else if (this.data.canIUse)
		{
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res =>
			{
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		}
		else
		{
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res =>
				{
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}
	},
	getUserInfo: function (e)
	{
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	}
})
