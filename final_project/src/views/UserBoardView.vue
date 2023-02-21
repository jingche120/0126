<!-- 用戶端的首頁 -->
<template>
  <!-- 用靈魂所在購物網的navbar -->
  <NavbarOfSoul></NavbarOfSoul>
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
// 引入靈魂所在購物網的navbar
import NavbarOfSoul from '@/components/NavbarOfSoul.vue';

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
    NavbarOfSoul,
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
