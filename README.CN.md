# TTT Miniapp SDK Tutorial

## 简介

本 Demo 基于 TTT Miniapp SDK 开发，开发者可以通过微信小程序实现与 3T 其他各端间视频通话及互动直播等功能。

本文主要有如下内容：

* 集成 TTT Miniapp SDK
* 加入频道
* 推流
* 订阅远端流
* 离开频道

## 开发环境

1. 请确保本地已安装微信开发者工具
2. 请确保有一个支持 **live-pusher** 和 **live-player** 组件的微信公众平台账号
   * 只有特定行业的认证企业账号才可使用这两个组件。详情请[点击这里](https://developers.weixin.qq.com/miniprogram/dev/component/live-player.html)
3. 请确保在微信公众平台账号的开发设置中，设置以下域名请求权限：

[request合法域名]中配置如下：
 * https://apiusercenter.3ttech.cn
 * https://log.wushuangtech.com:15100

[socket合法域名]中配置如下：
 * https://miniapp1.3ttech.cn
 * https://miniapp2.3ttech.cn
 * https://miniapp3.3ttech.cn
 * https://miniapp4.3ttech.cn

## 运行示例程序
 
1. 首先应具备 三体云 AppID
2. 下载本页示例程序
3. 打开 *utils* 文件夹，在 *config.js* 文件中设置正确的 App ID：

    	const APPID = 'abcdefg'
    	
4. 下载 [TTT Miniapp SDK](https://xxx.3ttech.cn/downloads)，将 SDK 重新命名为 “miniapp-sdk-3t.js"，保存到本示例程序的 *lib* 目录下
5. 启动微信开发者工具并导入该示例程序
6. 输入频道名，加入频道。邀请你的朋友加入同一个频道，就可以开始视频互通了。

## 联系我们

* 完整的 API 文档请参考 [开发者中心](https://3ttech.cn/index.php?menu=115&type=MiniApp)

## 代码许可

MIT 许可 (MIT)
