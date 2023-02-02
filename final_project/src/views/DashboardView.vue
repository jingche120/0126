<template>
  <Navbar></Navbar>
  <!-- 有下面這行router-view才能顯示路徑下的頁面 -->
  <div class="container-fluid mt-3 position-relative">
    <ToastMessageComponents></ToastMessageComponents>
    <router-view />
  </div>
</template>

<script>

// 把元件ToastMessageComponents載入專案
import ToastMessageComponents from '@/components/ToastMessageComponents.vue';
// 用mitt做跨元件溝通
import emitter from '@/methods/emitter';
// 把元件Navbar載入專案
import Navbar from '../components/NavbarComponents.vue';

export default {
  created() {
    // 取出Token，並將Token加入headers中
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.isLoading = true;
    this.$http.defaults.headers.common.Authorization = token;
    this.isLoading = false;
    // 將帶有token的資料用api傳出去，檢查是否允許登入
    const api = `${process.env.VUE_APP_API}api/user/check`;
    // 為甚麼讀的到this.user
    this.isLoading = true;
    this.$http.post(api, this.user).then((res) => {
      this.isLoading = false;
      // 如果res.data.success不等於true，則代表尚未登入，轉移至登入畫面
      if (res.data.success !== true) {
        this.$router.push('/login');
      }
    });
  },
  components: {
    // 元件Navbar
    Navbar,
    ToastMessageComponents,
  },
  // provide 可以讓內層都可以使用，不用再宣告了
  // 內層用inject即可以使用
  provide() {
    return {
      emitter,
    };
  },
};
</script>
