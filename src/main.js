import Vue from 'vue'
import App from './App'


Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main','pages/new_list/main', 'pages/person_center/main'],
    plugins: {
      "myPlugin": {
        "version": "1.0.2",
        "provider": "wxd21053e30be9caa7"
      }
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '蝶恋花',
      navigationBarTextStyle: 'black',
      navigationStyle: custom
    },
    tabBar: {
      list: [
        {
          "pagePath": "pages/index/main",
          "text": "首页",
          "iconPath": "static/images/index.png",
          "selectedIconPath": "static/images/indexsel.png"
        },
        {
          "pagePath": "pages/new_list/main",
          "text": "资讯",
          "iconPath": "static/images/news.png",
          "selectedIconPath": "static/images/newssel.png"
        },
        {
          "pagePath": "pages/person_center/main",
          "text": "我的",
          "iconPath": "static/images/myself.png",
          "selectedIconPath": "static/images/myselfsel.png"
        }
      ]
    }
  }
}
