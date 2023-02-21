<template>
    <NavbarOfSoul></NavbarOfSoul>
    <header class="py-5 bg-image-full h50" style="background-image: url('https://source.unsplash.com/wfh8dDlNFOk/1600x900')">
            <div class="text-center my-5">
                <img class="img-fluid rounded-circle mb-4" src="@/pic/ConnectionView/test.jpg" alt="..." />
                <h1 class="text-white fs-3 fw-bolder">Lin</h1>
                <p class="text-white-50 mb-0">我是這個電商網站的作者</p>
            </div>
        </header>
        <!-- Content section-->
        <section class="py-5">
            <div class="container my-5">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <h2>聯絡方式</h2>
                        <ul>
                            <li>電子信箱: sinonno1310220@gmail.com</li>
                            <li>手機: 0936XXXXXX</li>
                            <li>LineID: linfw923</li>
                            <li>Instergram: XXX</li>
                        </ul>
                        <!--                         <p class="lead">A single, lightweight helper class allows you to add engaging, full width background images to sections of your page.</p>
                        <p class="mb-0">The universe is almost 14 billion years old, and, wow! Life had no problem starting here on Earth! I think it would be inexcusably egocentric of us to suggest that we're alone in the universe.</p> -->
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import NavbarOfSoul from '@/components/NavbarOfSoul.vue';

export default {
  components: {
    NavbarOfSoul,
  },
};
</script>
