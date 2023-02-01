<template>
  <!-- props :active=isLoading" 前內後外 -->
  <LoadingComponents :active="isLoading"></LoadingComponents>

  <div class="text-end">
    <!-- 因為是呼叫函式，所以要有() -->
    <button class="btn btn-primary" type="button" @click="openModal(true)">
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
          {{ $filters.currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <!-- 如果屬性is_enable為true，則是啟用狀態;如果屬性is_enable為false，則是未啟用狀態 -->
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-danger" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
            @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm"
            @click="openDelProductModal(item)">刪除</button>
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
  @update-product="updateProduct"
  @cancel-modal="cancelModal"
  ></ProductModal>
<!-- @emit-pages="getProducts" emit事件，由內層向外層傳送 -->
<!-- :pages="pagination" props事件，由外層向內層傳送 -->
<PaginationComponents @emit-pages="getProducts" :pages="pagination"></PaginationComponents>
<DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"/>
</template>

<script>
import PaginationComponents from '@/components/PaginationComponents.vue';
import ProductModal from '../components/ProductModal.vue';
import DelModal from '../components/DelModal.vue';
// 用mitt來做跨元件間溝通

export default {
  data() {
    return {
      products: [], // 所有產列表
      pagination: {}, // 換頁時所要的產品資料
      tempProduct: {}, // 要傳送到內層(ProductModal)的產品資料
      isNew: false, // isNew用來判斷是新增(true)還是編輯(false)
      isLoading: false, // 載入時的緩衝圈圈，預設是false
    };
  },
  methods: {
    // 取得所有商品的列表
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        // 從遠端取得資料了
        this.isLoading = false;
        console.log(response);
        this.products = response.data.products;
        this.pagination = response.data.pagination;
      });
    },
    // 當在表單(modal)中新增或修改，都會觸發updateProduct()函式
    updateProduct(item) {
      console.log(item);
      this.tempProduct = item;
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';

      // 修改
      if (this.isNew === false) {
        // /api/:api_path/admin/product/:id
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.isLoading = true;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        this.isLoading = false;
        // console.log(response);
        productComponent.hideModal();// 已經修改完了，把modal關掉(隱藏)
        if (response.data.success) {
          this.getProducts();
          this.emitter.emit('push-message', {
            style: 'success',
            title: '更新成功',
          });
        } else {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: '更新失敗',
            content: response.data.message.join(','),
          });
        }
      });
    },
    openModal(isNew, item) {
      // 新增
      if (isNew === true) {
        this.tempProduct = {};
      } else {
      // 修改
        this.tempProduct = { ...item };// 深層拷貝，複製一份，不會互相影響
      }
      this.isNew = isNew; // 把openModal的isNew值，儲存到this.isNew
      const productComponent = this.$refs.productModal;
      productComponent.showModal();// 要新增資料，所以把modal叫出來
    },
    // 開啟刪除 Modal
    openDelProductModal(item) {
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.isLoading = false;
        console.log(response.data);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getProducts();
      });
    },
    // 當按下modal鐘右上方的X，則會關閉modal視窗
    cancelModal() {
      const productComponent = this.$refs.productModal;
      productComponent.hideModal();
    },
  },
  created() {
    this.getProducts();
  },
  components: {
    ProductModal,
    DelModal,
    PaginationComponents,
  },
  // 用inject讀入外層給內層用的東西
  inject: ['emitter'],
};
</script>
