import type { Router, LocationQueryRaw } from 'vue-router';
import NProgress from 'nprogress'; // progress bar

import { useUserStore } from '@/store';
import { isLogin } from '@/utils/auth';

/**
 * 用户登录信息向导
 * @param router
 */
export default function setupUserLoginInfoGuard(router: Router) {
  /**
   * 前置路由
   */
  router.beforeEach(async (to, from, next) => {
    NProgress.start();
    // 通过状态管理提取用户信息
    const userStore = useUserStore();
    // 判断是否为登录状态
    if (isLogin()) {
      // 判断用户是否存在角色
      if (userStore.role) {
        //  进入路由
        next();
      } else {
        try {
          // 加载用户信息
          await userStore.info();
          // 进入路由
          next();
        } catch (error) {
          // 退出系统
          await userStore.logout();
          // 转到重定向
          next({
            name: 'login',
            query: {
              redirect: to.name,
              ...to.query,
            } as LocationQueryRaw,
          });
        }
      }
    } else {
      // 如果没有登录则判断是否进入login路由
      if (to.name === 'login') {
        next();
        return;
      }
      // 否则的话重定向到login路由，拼接请求参数
      next({
        name: 'login',
        query: {
          redirect: to.name,
          ...to.query,
        } as LocationQueryRaw,
      });
    }
  });
}
