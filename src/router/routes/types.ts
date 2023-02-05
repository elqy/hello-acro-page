import { defineComponent } from 'vue';
import type { RouteMeta, NavigationGuard } from 'vue-router';

export type Component<T = any> =
  | ReturnType<typeof defineComponent>
  | (() => Promise<typeof import('*.vue')>)
  | (() => Promise<T>);

export interface AppRouteRecordRaw {
  path: string; // 路径
  name?: string | symbol; // 名称
  meta?: RouteMeta; // 路由meta信息
  redirect?: string; // 重定向
  component: Component | string; // 组件
  children?: AppRouteRecordRaw[]; // 子菜单项
  alias?: string | string[]; // 别名
  props?: Record<string, any>; // 属性数据
  beforeEnter?: NavigationGuard | NavigationGuard[]; // 前置导航
  fullPath?: string; // 全部路径
}
