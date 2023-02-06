import { createApp } from 'vue';
// 匯入VeeValidate(表單驗證)主套件
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
// 匯入VeeValidate(表單驗證)所有規則
import AllRules from '@vee-validate/rules';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import router from './router';
import { currency, date } from './methods/filters';
import $httpMessageState from './methods/pushMessageState';
// 載入bootstrap-icons套件，之後直接用<i class="bi bi-trash-fill"></i>即可
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.vue';

// 因為要加入.use(axios)，所以要把這行改掉
// createApp(App).use(router).mount('#app');
const app = createApp(App);
// 用全域變數的方式加入千分號
app.config.globalProperties.$filters = { date, currency };
// 此函式的用途是整合 Ajax 的錯誤事件，統一整理發送給予 Toast 處理
app.config.globalProperties.$httpMessageState = $httpMessageState;
app.use(router);
app.use(VueAxios, axios);
app.component('LoadingComponents', Loading);// 用全域註冊的方式，載入Loading這個元件
// 註冊 vee-validate 三個全域元件
app.component('FormComponents', Form);
app.component('FieldComponents', Field);
app.component('ErrorMessageComponents', ErrorMessage);

// 把所有VeeValidate(表單驗證)的規則，加入rule內，這樣才可以呼叫
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
  // console.log('rule', rule);
});
// VeeValidate(表單驗證)一輸入即驗證
configure({
  validateOnInput: true,
});
app.component('FormComponent', Form);
app.component('FieldComponent', Field);
app.component('ErrorMessageComponent', ErrorMessage);
app.mount('#app');
