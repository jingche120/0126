<template>
    <div>
        Dashboard
    </div>
</template>

<script>
export default {
  created() {
    // 取出Token，並將Token加入headers中
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = token;
    // 將帶有token的資料用api傳出去
    const api = `${process.env.VUE_APP_API}api/user/check`;
    // 為甚麼讀的到this.user
    this.$http.post(api, this.user).then((res) => {
      // 如果res.data.success不等於true，則代表尚未登入，轉移至登入畫面
      if (res.data.success !== true) {
        this.$router.push('login');
      }
    });
  },
};
</script>
