import Modal from 'bootstrap/js/dist/modal';

export default {
  methods: {
    showModal() {
      this.modal.show(); // 呈現在畫面上
    },
    hideModal() {
      this.modal.hide();// 隱藏在畫面上
    },
  },
  mounted() {
    // 把Modal實體化
    this.modal = new Modal(this.$refs.modal);// 用this.$refs.modal引用ref.modal
  },
};
