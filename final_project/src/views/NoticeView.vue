<template>
    <!-- props :active=isLoading 載入完整畫面後，緩衝才結束 -->
    <!-- isLoading 宣告為全域變數 -->
    <!-- <LoadingComponents :active="isLoading"></LoadingComponents> -->
    <div class="index">
    <NavbarOfSoul></NavbarOfSoul>
        <!-- 附個衝浪圖 -->
        <!-- 衝浪介紹的摘要 -->
        <!-- section[盛行] -->
        <section id="fashionable">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6 order-lg-2">
                        <div class="p-5"><img class="img-fluid rounded-circle" src="@/pic/NoticeView/SurfofHistory.jpg"
                                alt="衝浪運動的起源" /></div>
                    </div>
                    <div class="col-lg-6 order-lg-1">
                        <div class="p-5">
                            <h2>衝浪越來越盛行</h2>
                            <p>近幾年來，衝浪這項運動在台灣逐漸盛行，尤其是宜蘭的烏石港，暑假必定人滿為患。<br>
                                對於衝浪新手來說，台灣有那些地方可以衝浪以及衝浪需要什麼裝備呢</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- section[環境] -->
        <section id="environment">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="p-5"><img class="img-fluid rounded-circle" src="@/pic/NoticeView/SurfofEnvironment.jpg"
                                alt="衝浪環境" /></div>
                    </div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <h2>台灣適合衝浪的地方</h2>
                            <ul>
                                <li>新北福隆</li>
                                <li>墾丁佳樂水</li>
                                <li>台東東河</li>
                                <li>宜蘭外澳</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- section1[衝浪裝備] -->
        <section id="equipage">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6  order-lg-2">
                        <div class="p-5"><img class="img-fluid rounded-circle" src="@/pic/NoticeView/SurfofEquipage.jpg"
                                alt="..." /></div>
                    </div>
                    <div class="col-lg-6  order-lg-1">
                        <div style="padding: 3rem">
                            <h2>衝浪所需裝備</h2>
                            <ul>
                                <li>衝浪板</li>
                                <li>腳繩</li>
                                <li>防寒衣</li>
                                <li>防曬</li>
                                <li>沙灘褲</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <FooterComponents></FooterComponents>
</template>

<script>
import NavbarOfSoul from '@/components/NavbarOfSoul.vue';
import FooterComponents from '@/components/FooterComponents.vue';

export default {
  data() {
    return {
    };
  },
  methods: {

  },
  components: {
    NavbarOfSoul,
    FooterComponents,
  },
  created() {

  },
};
</script>
