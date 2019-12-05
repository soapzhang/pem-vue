// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {getRequest} from './utils/api'
import {postRequest} from './utils/api'
import {deleteRequest} from './utils/api'
import {putRequest} from './utils/api'
import store from './store/store'


Vue.use(VueResource);
Vue.use(elementUI);
Vue.prototype.$getRequest=getRequest
Vue.prototype.$postRequest=postRequest
Vue.prototype.$deleteRequest=deleteRequest
Vue.prototype.$putRequest=putRequest
Vue.config.productionTip = false
Vue.config.debug=true

router.beforeEach((to,from,next)=>{
  next()
  // if(to.name=='login'){
  //   next();
  //   return;
  // };
  // var name = window.localStorage.getItem("userInfo");
  // if(name=='未登录'){
  //   if(to.meta.requireAuth||to.name==null){
  //     next({path:'/',query:{redirect:to.path}});
  //   }else{
  //     next();
  //   }
  // }else{
  //
  // }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
