<!-- 要讓所有元件都可以使用到這個通知功能(吐司)，所以把通知功能(吐司)獨立出來 -->
<!-- ToastMessageComponents 是吐司列表 -->
<template>
    <!-- 定位 -->
    <div class="toast-container position-absolute pe-3 top-0 end-0" style="z-index: 1050">
    <!-- 用列表的方式呈現 -->
    <Toast v-for="(msg,key) in message" :key="key" :msg="msg"></Toast>
    </div>
</template>

<script>
import Toast from '@/components/ToastComponents.vue';

export default {
  components: {
    Toast,
  },
  data() {
    return {
      message: [],
    };
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { style = 'success', title, content } = message;
      this.message.push({ style, title, content });
    });
  },
};
</script>
