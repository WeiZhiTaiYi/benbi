import Vue from 'vue'
import Router from 'vue-router'
import ad from './views/ad'
import Sign from  './views/Sign.vue'
import addSafefive from './views/addSafefive.vue'
import appRegister from './views/appRegister.vue'
import addSafe from './views/addSafe.vue'
import AppDateils from './views/AppDateils.vue'
import AppStringbox from './views/AppStringbox.vue'
import AppDetails from './views/about/AppDetails.vue'
import AppMenu from './views/AppMenu.vue'
import Appstringboxcomplete from './views/Appstringboxcomplete'
import App1 from './views/App1.vue'
import Appzt from './views/Appzt'
import RelevantWhole from './views/RelevantWhole'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'ad',
      component: ad,
    },
    {
      path: '/Sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/addSafefive',
      name: 'addSafefive',
      component: addSafefive
    },
    {
      path:'/appRegister',
      name:'appRegister',
      component: appRegister
    },
    {
      path:'/addSafe',
      name:'addSafe',
      component: addSafe
    },
    {
      path:'/AppDateils',
      name:'AppDateils',
      component: AppDateils,
      // children:[{
      //   path:'/Appstringboxcomplete',
      //   name:'Appstringboxcomplete',
      //   component: Appstringboxcomplete
      // }]
    },
    {
      path:'/Appstringboxcomplete',
      name:'Appstringboxcomplete',
      component: Appstringboxcomplete,
      children:[
          {
            path:'/Appzt',
            name:'Appzt',
            component:Appzt,
          },
          {
            path:'/App1',
            name:'App1',
            component:App1,
          },
          {
            path:'/RelevantWhole',
            name:'RelevantWhole',
            component:RelevantWhole,
          },
          {
            path:'/AppStringbox',
            name:'AppStringbox',
            component: AppStringbox
          },
      ]
    },
    {
      path:'/AppMenu',
      name:'AppMenu',
      component:AppMenu
    },
    {
      path:'/AppDetails',
      name:'AppDetails',
      component:AppDetails
    },
  ]
})
