import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
// import TestView from '../views/TestView.vue';
// import Test from '../views/TestViewByBootstrap.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/ProductsView.vue'),
      },
      {
        path: 'orders',
        component: () => import('../views/OrdersView.vue'),
      },
      {
        path: 'coupons',
        component: () => import('../views/CouponsView.vue'),
      },
    ],
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/UserBoardView.vue'),
    children: [
      {
        // 購物車(商品列表放這)
        path: 'cart',
        component: () => import('../views/UserCartView.vue'),
      },
      {
        // 單項產品的頁面
        path: 'product/:productId', // 動態路由
        component: () => import('../views/UserProductView.vue'),
      },
      {
        // 客戶按結帳後，所導到的畫面
        path: 'checkout/:orderId',
        component: () => import('../views/UserCheckoutView.vue'),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
});

export default router;
