<!-- 靈魂所在購物網的Navbar -->
<template><!-- navbar navbar-expand-md navbar-light bg-primary sticky-top -->
    <!-- .navbar-expand{-sm|-md|-lg|-xl|-xxl} 確認內容何時可以收起來 -->
    <nav class="navbar navbar-expand-lg navbar-scroll navbar-light bg-light sticky-top navbar-scroll" id="mynav" :class="{ 'opacity-25': navbarOpacity25===true}">
        <div class="container"><a aria-current="page" href="#/"
                class="active router-link-exact-active navbar-brand custom-navbar-brand">
                <img src="@/pic/logo2.png" height="50" alt="Logo" class="d-inline-block align-text-top">
            </a><button class="navbar-toggler ms-auto collapsed" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a href="#/notice" class="nav-link">新手須知</a></li>
                    <li class="nav-item"><a href="#/user/cart" class="nav-link">所有商品</a></li>
                    <li class="nav-item"><a href="#/discount" class="nav-link">優惠活動</a></li>
                    <li class="nav-item"><a href="#/connection" class="nav-link">聯絡我們</a></li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      navbarOpacity25: false,
    };
  },
  methods: {
    scrolled() {
      // 滑動滑鼠透明度降低，但回來的時候，透明度沒有回來
      this.navbarOpacity25 = true;
      console.log('navbarOpacity25', this.navbarOpacity25);
    },
  },
  created() {
    window.addEventListener('scroll', this.scrolled);
    // const myNav = document.getElementById('mynav');
    // const myNav = this.$refs.mynav;
    // console.log(myNav.classList);
    // window.onscroll = function () {
    //   console.log('myNav', myNav);
    //   // if (document.body.scrollTop >= 200) {
    //   //   myNav.classList.add('nav-colored');
    //   //   myNav.classList.remove('nav-transparent');
    //   // } else {
    //   //   myNav.classList.add('nav-transparent');
    //   //   myNav.classList.remove('nav-colored');
    //   // }
    // };
  },
};
</script>

<!-- <style>
body {
  background-color: yellow;
}
.nav-colored {
  background-color:#000;
}
.nav-transparent {
  background-color:transparent;
}
</style> -->
