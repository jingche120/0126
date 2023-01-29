<template>
  <div class="text-end">
    <!-- 因為是呼叫函式，所以要有() -->
    <button class="btn btn-primary" type="button" @click="openModal">
      增加一個產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody v-for="item in products" :key="item.id">
    <!-- 每次建立一個for迴圈時，就需要有一個專屬的key值 -->
      <tr>
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ item.origin_price }}
        </td>
        <td class="text-right">
          {{ item.price }}
        </td>
        <td>
          <!-- 如果屬性is_enable為true，則是啟用狀態;如果屬性is_enable為false，則是未啟用狀態 -->
          <span class="text-success" v-if="item.is_enable">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm">編輯</button>
            <button class="btn btn-outline-danger btn-sm">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
<!-- ref=productModal，讓這個ProductModal可以被別人呼叫
:product="temProduct" [往內層傳送]前(內)層(props中的變數名稱)內後(此)外(ProductsView此層的變數)
@update-product="updateProduct" [往內層向外傳送]前(內)層($emit的變數名稱)內後外(要觸發此層的哪個函式)
-->
<ProductModal ref="productModal"
  :product="tempProduct"
  @update-product="updateProduct"></ProductModal>
</template>

<script>
import ProductModal from '../components/ProductModal.vue';

export default {
  data() {
    return {
      products: [], // 所有產列表
      pagination: {}, // 換頁時所要的產品資料
      tempProduct: {}, // 要傳送到內層(ProductModal)的產品資料
    };
  },
  methods: {
    // 取得所有商品的列表
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products`;
      this.$http.get(api).then((res) => {
        console.log(res);
        this.products = res.data.products;
        this.pagination = res.data.pagination;
      });
    },
    updateProduct(item) {
      this.tempProduct = item;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      const productComponent = this.$refs.productModal;
      this.$http.post(api, { data: this.tempProduct }).then((response) => {
        console.log(response);
        productComponent.hideModal();
        this.getProducts();
      });
    },
    openModal() {
      this.tempProduct = {};
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
  },
  created() {
    this.getProducts();
  },
  components: {
    ProductModal,
  },
};
</script>
