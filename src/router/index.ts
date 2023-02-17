import { createRouter, createWebHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import { appRoutes } from './routes';
import { REDIRECT_MAIN, NOT_FOUND_ROUTE } from './routes/base';
import createRouteGuard from './guard';

NProgress.configure({ showSpinner: false }); // NProgress Configuration
// 创建路由对象
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // 1.静态路由
    {
      path: '/',
      redirect: 'login',
      // redirect: '/tools/tools',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    ...appRoutes, // 引入routes文件夹下面的所有路由文件
    REDIRECT_MAIN, // 重定向路由
    NOT_FOUND_ROUTE, // 未找到页面路由
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});
// 创建路由导航
createRouteGuard(router);

export default router;
