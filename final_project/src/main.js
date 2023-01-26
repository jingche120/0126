import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
import router from './router';

// 因為要加入.use(axuios)，所以要把這行改掉
// createApp(App).use(router).mount('#app');
const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
