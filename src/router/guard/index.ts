import type { Router } from 'vue-router';
import { setRouteEmitter } from '@/utils/route-listener';
import setupUserLoginInfoGuard from './userLoginInfo';
import setupPermissionGuard from './permission';

/**
 * 设置页面路由向导
 * @param router
 */
function setupPageGuard(router: Router) {
  // 前置路由，启动路由监听
  router.beforeEach(async (to) => {
    // emit route change
    setRouteEmitter(to);
  });
}

/**
 * 创建路由向导
 * 页面向导->用户登录向导->权限向导
 * @param router
 */
export default function createRouteGuard(router: Router) {
  setupPageGuard(router);
  setupUserLoginInfoGuard(router);
  setupPermissionGuard(router);
}
