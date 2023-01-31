<template>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="pre_page">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item" v-for="page in pages.total_pages" :key="page"
        :class="{ 'active': page === pages.current_page }">
          <a class="page-link" href="#" @click.prevent="updatePage(page)">
            {{ page }}
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="next_page">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </template>

<script>
export default {
  // 從外層讀入page的資訊
  props: [
    'pages',
  ],
  methods: {
  // 把現在在第幾頁傳去，在使用getProducts時，才可以正確的呼叫該頁面資料
    updatePage(page) {
    // emit('emit事件的名稱',要傳出去的參數)
      this.$emit('emit-pages', page);
    //   console.log(typeof (this.pages.current_page));
    },
    // 按前一頁，則觸發pre_page來判斷
    pre_page() {
      if (this.pages.has_pre === true) {
        // 代表有前一頁
        const prePage = this.pages.current_page - 1;
        // console.log(prePage);
        this.$emit('emit-pages', prePage);
      } else {
        // 如果沒有，則回傳本頁
        this.$emit('emit-pages', this.pages.current_page);
      }
    },
    next_page() {
      if (this.pages.has_next === true) {
        // 代表有下一頁
        const nextPage = this.pages.current_page + 1;
        // console.log(nextPage);
        this.$emit('emit-pages', nextPage);
      } else {
        // 如果沒有，則回傳本頁
        this.$emit('emit-pages', this.pages.current_page);
      }
    },
  },
};
</script>
