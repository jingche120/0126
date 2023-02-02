<!-- 用戶端的首頁 -->
<template>
  <!-- 因為跟後台的導覽列(NavbarComponents)不一樣，所以重寫一個 -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/user/cart">用戶端範例</router-link>
    </div>
  </nav>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessageComponents></ToastMessageComponents>
    <!-- router-view會顯示子路由下的東西 -->
    <router-view></router-view>

  </div>
</template>

<script>
// 用mitt做跨元件溝通
import emitter from '@/methods/emitter';
// 引入吐司(提示區塊)
import ToastMessageComponents from '@/components/ToastMessageComponents.vue';

export default {
  data() {
    return {
    };
  },
  methods: {
  },
  created() {
  },
  components: {
    ToastMessageComponents,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
