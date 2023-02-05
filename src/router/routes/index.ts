import type { RouteRecordNormalized } from 'vue-router';

// Vite 支持使用特殊的 import.meta.glob 函数从文件系统导入多个模块
// 引入module文件夹下面的模块
const modules = import.meta.glob('./modules/*.ts', { eager: true });
// 引入扩展模块-externalModules文件夹下面的模块
const externalModules = import.meta.glob('./externalModules/*.ts', {
  eager: true,
});

/**
 * 格式化模块信息
 * @param _modules
 * @param result
 */
function formatModules(_modules: any, result: RouteRecordNormalized[]) {
  // 遍历数据元素并添加到结果集
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default;
    if (!defaultModule) return;
    const moduleList = Array.isArray(defaultModule)
      ? [...defaultModule]
      : [defaultModule];
    result.push(...moduleList);
  });
  return result;
}

// 格式化modules文件夹下面的模块数据
export const appRoutes: RouteRecordNormalized[] = formatModules(modules, []);

// 格式化externalModules文件夹下面的模块数据
export const appExternalRoutes: RouteRecordNormalized[] = formatModules(
  externalModules,
  []
);
