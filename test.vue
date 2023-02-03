購物車，所有產品也放這
<template>
  <!-- 因為適用到vue，所以active前面需要:，也因為Loading是宣告在全域，所以可以直接用 -->
  <LoadingComponents :active="isLoading"></LoadingComponents>
  <div class="container">
    <div class="row mt-4">
      <div class="col-md-7">
        <table class="table align-middle" v-for="item in products" :key="item.id">
          <thead>
            <tr>
              <th>圖片</th>
              <th>產品名稱</th>
              <th>價格</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in products" :key="item.id">
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
                  <!-- : 為用vue來操控標籤屬性 -->
                  <!-- 當this.status.loadingItem === item.id時，把此按鈕隱藏起來-->
                  <button type="button" class="btn btn-outline-danger"
                  :disabled="this.status.loadingItem === item.id" @click="addCart(item.id)">
                    <!-- 如果有點擊，才會觸發圈圈 -->
                    <div v-if="this.status.loadingItem == item.id"
                    class="spinner-grow spinner-grow-sm text-danger" role="status"
                    >
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    加入購物車
                  </button>
                  <!-- <div> {{ item.id }}</div>
                  <div v-if="this.status.loadingItem === item.id">測試{{}}</div> -->
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--右側購物車資訊  -->
      <div class="col-md-5">
        <div class="sticky-top">
          <table class="table align-middle">
            <thead>
              <tr>
                <th></th>
                <th>品名</th>
                <th style="width: 110px">數量</th>
                <th>單價</th>
              </tr>
            </thead>
            <tbody>
            <template v-if="cart.carts">
              <tr v-for="item in cart.carts" :key="item.id">
                <td>
                  <!-- 刪除的垃圾桶icon -->
                  <button type="button" class="btn btn-outline-danger btn-sm"
                          :disabled="status.loadingItem === item.id"
                          @click="removeCartItem(item)">
                    <i class="bi bi-x"></i>
                  </button>
                </td>
                <td>
                  {{ item.product.title }}
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                  </div>
                </td>
                <td>
                  <div class="input-group input-group-sm">
                    <!-- 這是輸入產品數量那邊的button，最小值為1，且當還沒更新好前，該btn為disabled的狀態。
                      當值有變，則會觸發change這個HTML的DOM，去getCart()，去更改總金額-->
                    <label class="input-group-text" :for="item+'qty'">
                      <input type="number" class="form-control" :id="item+'qty'"
                      v-model.number="item.qty" min="1"
                      :disabled="item.id === this.status.loadingItem" @change="updateCart(item)">
                    / {{ item.product.unit }}
                    </label>
                  </div>
                </td>
                <td class="text-end">
                  <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
                  {{ $filters.currency(item.final_total) }}
                </td>
              </tr>
            </template>
            </tbody>
            <tfoot>
            <tr>
              <td colspan="3" class="text-end">總計</td>
              <td class="text-end">{{ $filters.currency(cart.total) }}</td>
            </tr>
            <tr v-if="cart.final_total !== cart.total">
              <td colspan="3" class="text-end text-success">折扣價</td>
              <td class="text-end text-success">{{ $filters.currency(cart.final_total) }}</td>
            </tr>
            </tfoot>
          </table>
          <div class="input-group mb-3 input-group-sm">
            <label class="input-group-append" :for="item+'coupon'">
            <input type="text" v-model="coupon_code" placeholder="請輸入優惠碼" :id="item+'coupon'"
            class="form-control">
              <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </label>
          </div>
        </div>
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
      // isLoading 這個由全域變數宣告的緩衝，是在載入頁面的時候會觸發的緩衝，整個頁面都會是轉圈圈
      status: {
        // (loadingItem)是當使用者按下新增事購物車的時候，為了防止使用者以為還沒好，然後重複點擊，所以在還沒傳到後端前，這個按鈕都會是disabled
        loadingItem: '',
      },
      cart: {}, // 購物車清單列表
      coupon_code: '',
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
        console.log('product', response.data);
        // 把資料存在此檔案
        this.products = response.data.products;// 把產品存下來
        this.isLoading = false;// 把分頁資訊存在來
      });
    },

    // getProduct()取得單一商品資訊，動態路由
    getProduct(id) {
      this.$router.push(`/user/product/${id}`); // 父節點路徑開始算
    },

    // 加入購物車，要重新觸發一次取得購物車列表
    addCart(id) {
      // 觸發loadingItem，當點下加入購物車的時候，loadingItem為此產品的id，執行完才會變空值
      // 當button判斷到loadingItem為此產品的id，則disabled
      // console.log('loadingItem', `${this.status.loadingItem === id}`);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.$http.post(api, { data: cart }).then((response) => {
        console.log('addCart', response);
        this.status.loadingItem = '';
      });
    },

    // 取得購物車清單 /api/:api_path/cart
    getCart() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        console.log(response);
        this.cart = response.data.data;
        this.isLoading = false;
      });
    },

    // 更新購物車清單
    // 因為API會要該產品的id和該產品的數量，所以帶入該產品的所有資訊
    // 當還沒更新完時，該btn disabled(不顯示)
    // item.id 是這個訂單列表的id; item.product_id 是這個訂單列表中的某一項產品ID
    //
    updateCart(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const list = { product_id: item.product_id, qty: item.qty };
      this.status.loadingItem = item.id;
      this.$http.put(url, { data: list }).then((response) => {
        console.log('更新購物車清單', response);
        this.getCart();
        this.status.loadingItem = '';
      });
    },
    // 刪除某一筆購物車資料，會帶入購物車內該產品的id
    removeCartItem(item) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        console.log(response);
        this.getCart();
        this.isLoading = false;
      });
    },
  },
  created() {
    // 因為客戶不用驗證，所以一進來就是商品列表
    this.getProducts();
    this.getCart();
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
