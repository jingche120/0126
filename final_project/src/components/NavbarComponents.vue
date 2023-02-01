<!-- 把Navbar獨立成一元件 -->
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">作品</a>
        <button class="navbar-toggler" type="button"
        data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#/dashboard/products">產品</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#/dashboard/orders">訂單</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#/dashboard/coupons">優惠券</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" @click.prevent="logout">登出</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api).then((res) => {
        // console.log(res);
        if (res.data.success) {
          this.$router.push('/login');
        }
      });
    },
  },
};
</script>
