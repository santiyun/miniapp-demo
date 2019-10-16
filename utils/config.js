const APPID = 'a967ac491e3acf92eed5e1b5ba641ab7';
const TEST_APPID = 'test900572e02867fab8131651339518';
const IPLOC_SERVER = '';
const AU_SERVER = 'wss://gzeduservice.3ttech.cn/miniappau';

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
  APPID        : APPID,
  TEST_APPID   : TEST_APPID,
  IPLOC_SERVER : IPLOC_SERVER,
  AU_SERVER    : AU_SERVER
}
