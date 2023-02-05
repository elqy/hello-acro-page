import type { RouteRecordNormalized } from 'vue-router';

/**
 * 定义用户状态信息
 */
export interface AppState {
  theme: string; // 主题
  colorWeak: boolean; // 色弱
  navbar: boolean; // 导航
  menu: boolean; // 菜单
  topMenu: boolean; // 是否顶部菜单
  hideMenu: boolean; // 是否隐藏菜单
  menuCollapse: boolean; // 菜单收缩
  footer: boolean; // 底部
  themeColor: string; // 主题颜色
  menuWidth: number; // 菜单宽度
  globalSettings: boolean; // 全局设置
  device: string; // 设备
  tabBar: boolean; // tabBar
  menuFromServer: boolean; // 是否从服务器获取菜单
  serverMenu: RouteRecordNormalized[]; // 服务器菜单列表
  [key: string]: unknown; // 限制键值对类型
}
