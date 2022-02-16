// 配置
window.Config = {

  // 站点名
  SiteName: '运行状态 | Yumoe',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'https://cute-kitten-3677.moebest.workers.dev/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm788991515-ccf39d7877cc649fa2c83607',
    'm789044892-2526bb1a27af5e27efd32619',
    'm789470473-21211393c1dbbc06052d1823',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Homepage',
      url: 'https://yumoe.live/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/yb/uptime-status'
    }
  ]
};
