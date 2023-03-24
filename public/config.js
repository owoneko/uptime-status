// 配置
window.Config = {

  // 站点名
  SiteName: '运行状态 | Imoe',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'api.lty.fun',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm793963303-bcb29b34ad2f7903c31ba131',
    'm793963314-6f5450d4663ceaebec448a12',
    'm793988806-da8819311e203eb8a276c673',
    'm793988816-02ad122183bfc38021b5c539',
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
      url: 'https://imoe.fun'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/yb/uptime-status'
    }
  ]
};
