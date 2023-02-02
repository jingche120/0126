<!-- 購物車，所有產品也放這 -->
<template>
  <!-- 因為適用到vue，所以active前面需要:，也因為Loading是宣告在全域，所以可以直接用 -->
  <LoadingComponents :active="isLoading"></LoadingComponents>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-7">
        <table class="table align-middle">
          <thead>
            <tr>
              <th>圖片</th>
              <th>產品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody v-for="item in products" :key="item.id">
            <td style="width: 200px">
              <div style="height: 100px; background-size: cover; background-position: center">
                <img width="120" :src= "item.imageUrl" alt="404" />
              </div>
            </td>
            <td><a href="#" class="text-dark">{{ item.title }}</a></td>
            <td>
              <!-- 如果沒有特價，則顯示原價(origin_price) -->
              <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
              <div class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</div>
              <div class="h5" v-if="item.price">現在只要 {{ item.origin_price }} 元</div>
            </td>
            <!-- 查看更多 & 放到購物車 -->
            <td>
              <!-- btn-group-sm 就連最小螢幕size(sm)，也要執行這行 -->
              <div class="btn-group btn-group-sm">
                <button type="button" class="btn btn-outline-secondary"
                @click="getProduct(item.id)">查看更多</button>
                <button type="button" class="btn btn-outline-danger">加入購物車</button>
              </div>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// 用mitt做跨元件溝通
import emitter from '@/methods/emitter';

export default {
  data() {
    return {
      products: [], // 所有產品列表
      product: {}, // 分頁資訊
      status: {
        loadingItem: '', // 判斷是否要轉圈圈的狀態
      },
    };
  },
  methods: {
    // getProducts()取得商品列表
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      // isLoading 已經用全域變數的方式註冊了，可直接使用
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        // 從遠端取得資料了，可以把緩衝的圈圈關掉
        this.isLoading = false;
        console.log('response', response.data);
        // 把資料存在此檔案
        this.products = response.data.products;// 把產品存下來
        this.isLoading = false;// 把分頁資訊存在來
      });
    },
    // getProduct()取得單一商品資訊，動態路由
    getProduct(id) {
      this.$router.push(`/user/product/${id}`); // 父節點路徑開始算
    },
  },
  created() {
    // 因為客戶不用驗證，所以一進來就是商品列表
    this.getProducts();
  },
  components: {
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
