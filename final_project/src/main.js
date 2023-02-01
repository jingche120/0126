import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';
import $httpMessageState from './methods/pushMessageState';

// 因為要加入.use(axuios)，所以要把這行改掉
// createApp(App).use(router).mount('#app');
const app = createApp(App);
// 用全域變數的方式加入千分號
app.config.globalProperties.$filters = { date, currency };
// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.use(router);
app.use(VueAxios, axios);
app.component('LoadingComponents', Loading);// 用全域註冊的方式，載入Loading這個元件
app.mount('#app');
