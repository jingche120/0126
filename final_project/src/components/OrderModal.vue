<template>
  <!-- 建立ProductModal，即彈出視窗 -->
  <!-- modal，且用ref屬性(modal)，讓之後可以即接用this.$refs.modal來呼叫 -->
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true"
    ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>訂單細節</span>
          </h5>
          <!-- 下面的btn為右邊的X鈕 -->
          <button type="button" class="btn-close" @click="$emit('cancel-modal')"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <h2>用戶資料</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <span class="form-label">姓名</span>
                <span class="form-label">要帶入的名字</span>
              </div>
              <hr>
              <div class="mb-3">
                <span class="form-label">Email</span>
                <span class="form-label">要帶入的信箱</span>
              </div>
              <hr>
            </div>
            <div class="col-sm-8">
              <div>
                <h2>訂單細節</h2>
              </div>
                <div class="row gx-2">
                  <div class="col-md-6">
                    <span class="form-label">訂單編號</span>
                  </div>
                  <div class="col-md-6">
                    <span class="form-label">要帶入的訂單編號</span>
                  </div>
                </div>
              <hr />
                <div class="row gx-2">
                  <div class="col-md-6">
                    <span class="form-label">下單時間</span>
                  </div>
                  <div class="col-md-6">
                    <span class="form-label">要帶入的下單時間</span>
                  </div>
                </div>
              <hr />
              <div class="row gx-2">
                  <div class="col-md-6">
                    <span class="form-label">付款時間</span>
                  </div>
                  <div class="col-md-6">
                    <span class="form-label">要帶入的付款時間</span>
                  </div>
                </div>
              <hr />
              <div class="row gx-2">
                  <div class="col-md-6">
                    <span class="form-label">付款狀態</span>
                  </div>
                  <div class="col-md-6">
                    <span class="form-label">要帶入的付款狀態</span>
                  </div>
                </div>
              <hr />
              <div class="row gx-2">
                  <div class="col-md-6">
                    <span class="form-label">總金額</span>
                  </div>
                  <div class="col-md-6">
                    <span class="form-label">要帶入的總金額</span>
                  </div>
                </div>
              <hr />
              <div class="mb-3">
                <label for="content"
                class="form-label">說明內容
                  <textarea type="text" class="form-control" id="content"
                  v-model="tempProduct.content" placeholder="請輸入產品說明內容"></textarea>
                </label>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <label class="form-check-label" for="is_enabled">
                    <input class="form-check-input" type="checkbox"
                      v-model="tempProduct.is_enabled" :true-value="1"
                      :false-value="0" id="is_enabled" />
                    是否啟用
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary"
          data-bs-dismiss="modal">
            取消
          </button>
          <!-- @click="$emit('update-product', temPoduct)"
          用點擊的方式觸發向外傳送事件($emit)，$emit('向外傳送事件名稱',所要帶出去的值)-->
          <button type="button" class="btn btn-primary"
          @click="$emit('update-product', tempProduct)">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  // props適用物件的方式接收
  props: {
    product: {
      type: Object,
      default() { return {}; }, // 預設為空物件
    },
  },
  // 因為props，資料是單向從外層傳遞到內層，所以要用watch來監聽值是否被改變，當值改變時，用自己的temPoduct來儲存
  watch: {
    product() {
      this.tempProduct = this.product;
      // 多圖範例
      if (!this.tempProduct.images) {
        this.tempProduct.images = [];
      }
    },
  },
  data() {
    return {
      modal: {},
      tempProduct: {}, // 用來接收(props)從購物清單列表傳入進來的資料
    };
  },
  methods: {
    uploadFile() { // 上傳圖片
      // console.dir(uploadFile);所需要上傳的資料在files屬性內
      const uploadedFile = this.$refs.fileInput.files[0];
      const formData = new FormData();// 因為上傳圖片的api要求是以Form的形式上傳
      formData.append('file-to-upload', uploadedFile);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.isLoading = true;
      this.$http.post(url, formData).then((res) => {
        this.isLoading = false;
        console.log(res.data);
        if (res.data.success) {
          this.tempProduct.imageUrl = res.data.imageUrl;
        }
      });
    },
  },
  mixins: [modalMixin],
};
</script>
