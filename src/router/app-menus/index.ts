import { appRoutes, appExternalRoutes } from '../routes';
// 混合应用路由和应用扩展路由
const mixinRoutes = [...appRoutes, ...appExternalRoutes];
// map() 方法按照原始数组元素顺序依次处理元素。
// 批处理路由格式数据，只保留name,path,meta,redirect,children字段
const appClientMenus = mixinRoutes.map((el) => {
  // 将RouteRecordNormalized对象析构成菜单对象
  const { name, path, meta, redirect, children } = el;
  // 返回路由对象
  return {
    name,
    path,
    meta,
    redirect,
    children,
  };
});

export default appClientMenus;
