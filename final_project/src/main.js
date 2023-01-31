import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import App from './App.vue';
import router from './router';

// 因為要加入.use(axuios)，所以要把這行改掉
// createApp(App).use(router).mount('#app');
const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.component('LoadingComponents', Loading);// 用全域註冊的方式，載入Loading這個元件
app.mount('#app');
