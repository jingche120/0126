<!-- 優惠活動介面 -->
<template>
  <NavbarOfSoul></NavbarOfSoul>
  <!-- 慶祝一周年優惠 -->
  <div class="row">
    <section class="anniversary container py-5 my-sm-5 d-flex flex-column justyfy-content-center align-items-center">
      <h3 class="anniversary-title fs-1 fw-bold text-center mb-4"> 一週年慶祝活動 </h3>
      <p class="fs-5 text-center text-muted"> 慶祝靈魂所在一週年，輸入優惠碼 <b><em>lovesoulation</em></b> 即可整單9折</p>
    </section>
  </div>
</template>

<script>
import NavbarOfSoul from '@/components/NavbarOfSoul.vue';

export default {
  components: {
    NavbarOfSoul,
  },
};
</script>
