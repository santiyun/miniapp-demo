const APPID = 'a967ac491e3acf92eed5e1b5ba641ab7'; // 'test900572e02867fab8131651339518';
const TEST_SERVER = 'wss://sdkdemo1.3ttech.cn:5443';

if (APPID === '')
{
  wx.showToast(
    {
      title: `请在config.js中提供正确的appid`,
      icon: 'none',
      duration: 5000
    });
}

module.exports = {
  APPID: APPID
}
