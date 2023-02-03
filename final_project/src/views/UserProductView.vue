<template>
  <LoadingComponents :active="isLoading"></LoadingComponents>
  <div class="container-fluid">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link :to="{ path: '/user/cart' }">購物車</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <div class="h2"><b>{{ product.title }}</b></div>
        <div><b>{{ product.content }}</b></div>
        <div><b>{{ product.description }}</b></div>
        <img :src="product.imageUrl" alt="404" class="img-fluid mb-3">
      </article>
      <div class="col-4">
        <!-- 如果沒有特價，則顯示原價(origin_price) -->
        <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
        <div class="h6" v-if="product.price">
          <del>原價 {{ product.origin_price }} 元</del>
        </div>
        <div class="h5" v-if="product.price">現在只要 {{ product.origin_price }} 元</div>
        <hr />
      </div>
    </div>
    <div class="col-4">
      <button type="button" class="btn btn-outline-danger"
      @click="addToCart(product.id)">加入購物車</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {}, // 此產品的資料
      id: '', // 存此產品的id，用來call api，把此產品的資料全部傳過來
      isLoading: false, // 載入時的緩衝圈圈，預設是false
    };
  },
  methods: {
    getSingleProduct(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`;
      this.$http.get(api).then((response) => {
        console.log(response);
        this.product = response.data.product;
      });
    },
    addToCart(id, qty = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      // cart內含，此次購物的商品跟數量
      const cart = {
        product_id: id,
        qty,
      };
      this.isLoading = true;
      this.$http.post(api, { data: cart }).then((response) => {
        this.isLoading = false;
        // 把加入購物車的資訊傳送給吐司，顯示在畫面上
        this.$httpMessageState(response, '加入購物車');
        // 如果成功加入購物車，則轉至清單的畫面(user/cart)
        // 加入path就不會路徑搞錯，path可以從頭弄

        this.$router.push({ path: '/user/cart' });
      });
    },
  },
  created() {
    // 因為從(UserCartView中的查看更多)傳過來的時候，是以動態路由的方式傳送，所以會帶變數(id)
    // id其實為product.id，送過來就會變成productID
    // $router是指路由表;$router是路由的屬性之類的變數
    this.id = this.$route.params.productId;
    // console.log('id', this.id);
    this.getSingleProduct(this.id);
  },
};
</script>
