/*
 * @Author: your name
 * @Date: 2021-01-13 15:34:31
 * @LastEditTime: 2021-01-20 19:08:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /git-test/src/main.js
 */
import Vue from 'vue';
import App from './App.vue';
import './assets/font/common.css';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;

import { Upload, Loading, Image } from 'element-ui';
Vue.component(Upload.name, Upload);
Vue.component(Image.name, Image);
Vue.use(Loading);

new Vue({
  render: h => h(App)
}).$mount('#app');
