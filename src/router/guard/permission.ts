import type { Router, RouteRecordNormalized } from 'vue-router';
import NProgress from 'nprogress'; // progress bar

import usePermission from '@/hooks/permission';
import { useUserStore, useAppStore } from '@/store';
import { appRoutes } from '../routes';
import { WHITE_LIST, NOT_FOUND } from '../constants';

/**
 * 加载权限向导
 * @param router
 */
export default function setupPermissionGuard(router: Router) {
  // 前置路由守卫
  router.beforeEach(async (to, from, next) => {
    // 应用程序信息
    const appStore = useAppStore();
    // 用户信息
    const userStore = useUserStore();
    // 权限信息
    const Permission = usePermission();
    // 判断当前路由是否允许访问
    const permissionsAllow = Permission.accessRouter(to);
    if (appStore.menuFromServer) {
      // 针对来自服务端的菜单配置进行处理
      // Handle routing configuration from the server

      // 根据需要自行完善来源于服务端的菜单配置的permission逻辑
      // Refine the permission logic from the server's menu configuration as needed
      if (
        !appStore.appAsyncMenus.length &&
        !WHITE_LIST.find((el) => el.name === to.name)
      ) {
        await appStore.fetchServerMenuConfig();
      }
      // 将获取的菜单配置与白名单(login和notfound)
      const serverMenuConfig = [...appStore.appAsyncMenus, ...WHITE_LIST];

      // 定义exists标记，代表是否存在路由
      let exist = false;
      // 当服务器端路由存在
      while (serverMenuConfig.length && !exist) {
        // 移除服务器端菜单路由项 数组的第一个元素从其中删除，并返回第一个元素的值
        const element = serverMenuConfig.shift();
        // 如果元素名称与路由名称一直标记exist 为true
        if (element?.name === to.name) exist = true;
        // 如果元素存在子节点
        if (element?.children) {
          // 将子节点添加到服务器端菜单项
          serverMenuConfig.push(
            ...(element.children as unknown as RouteRecordNormalized[])
          );
        }
      }
      // 如果存在节点元素并且允许访问，则进入路由
      if (exist && permissionsAllow) {
        next();
      } else next(NOT_FOUND); // 否则 进入notfound路由
    } else {
      // 否则不存在服务器端菜单项
      // eslint-disable-next-line no-lonely-if
      if (permissionsAllow) next();
      else {
        // 从路由集合中发现目标路由
        const destination =
          Permission.findFirstPermissionRoute(appRoutes, userStore.role) ||
          NOT_FOUND;
        next(destination);
      }
    }
    NProgress.done();
  });
}
