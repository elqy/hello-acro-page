import { RouteLocationNormalized, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '@/store';

/**
 * 用户权限
 */
export default function usePermission() {
  // 获取用户信息
  const userStore = useUserStore();
  return {
    // 是否可以访问路由
    accessRouter(route: RouteLocationNormalized | RouteRecordRaw) {
      return (
        // 不需要授权
        !route.meta?.requiresAuth ||
        // 不需要角色
        !route.meta?.roles ||
        // 任意角色
        route.meta?.roles?.includes('*') ||
        // 包含用户角色信息
        route.meta?.roles?.includes(userStore.role)
      );
    },
    // 发现权限路由-->默认角色为admin的角色
    findFirstPermissionRoute(_routers: any, role = 'admin') {
      // 创建路由集合副本
      const cloneRouters = [..._routers];
      // 遍历路由
      while (cloneRouters.length) {
        // 取出第一个路由元素，并移除它
        const firstElement = cloneRouters.shift();
        if (
          // 路由元素中包含*，或者包含该角色
          firstElement?.meta?.roles?.find((el: string[]) => {
            return el.includes('*') || el.includes(role);
          })
        )
          // 返回路由名称
          return { name: firstElement.name };
        // 判断当前路由项是否存在子路由
        if (firstElement?.children) {
          // 如果存在子路由，则添加到路由副本中
          cloneRouters.push(...firstElement.children);
        }
      }
      // 遍历未找到，则返回null
      return null;
    },
    // 可以添加更多路由规则
    // You can add any rules you want
  };
}
