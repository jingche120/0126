<template>
    <!-- props :active=isLoading" 前內後外 -->
    <LoadingComponents :active="isLoading"></LoadingComponents>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th>折扣百分比</th>
          <th>到期日</th>
          <th>是否啟用</th>
          <th>編輯</th>
        </tr>
      </thead>
      <tbody v-for="item in coupons" :key="item.id">
      <!-- 每次建立一個for迴圈時，就需要有一個專屬的key值 -->
        <tr>
          <td>{{ item.name }}</td><!--折價券名稱-->
          <td>{{ item.discount }}</td><!--折扣比例-->
          <td>{{ item.deadline }}</td><!--到期日-->
          <td>
            <!-- 如果屬性is_enable為true，則是啟用狀態;如果屬性is_enable為false，則是未啟用狀態 -->
            <span class="text-success" v-if="item.is_enable">啟用</span>
            <span class="text-danger" v-else>不啟用</span>
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
    @update-product="updateProduct"></ProductModal>
  <!-- @emit-pages="getProducts" emit事件，由內層向外層傳送 -->
  <!-- :pages="pagination" props事件，由外層向內層傳送 -->
  <PaginationComponents @emit-pages="getProducts" :pages="pagination"></PaginationComponents>
  <DelModal :item="tempProduct" ref="delModal" @del-item="delProduct"/>
  </template>

<script>
export default {
  data() {
    return {
      coupons: [ // 所有折價券
        {
          name: 'good', // 折價券名稱
          discount: 50, // 折扣比例
          deadline: '2023/2/10', // 到期日
          is_enable: true, // 是否啟用
        },
        {
          name: 'birthday', // 折價券名稱
          discount: 10, // 折扣比例
          deadline: '2023/2/31', // 到期日
          is_enable: false, // 是否啟用
        },
      ],
    };
  },
};
</script>
