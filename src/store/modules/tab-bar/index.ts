import type { RouteLocationNormalized } from 'vue-router';
import { defineStore } from 'pinia';
import {
  DEFAULT_ROUTE,
  DEFAULT_ROUTE_NAME,
  REDIRECT_ROUTE_NAME,
} from '@/router/constants';
import { isString } from '@/utils/is';
import { TabBarState, TagProps } from './types';

/**
 * 格式化tab路由数据
 * 从路由中提取name,meta,fullPath,query参数
 * @param route
 */
const formatTag = (route: RouteLocationNormalized): TagProps => {
  const { name, meta, fullPath, query } = route;
  return {
    title: meta.locale || '',
    name: String(name),
    fullPath,
    query,
    ignoreCache: meta.ignoreCache,
  };
};
// 定义重定向路由
const BAN_LIST = [REDIRECT_ROUTE_NAME];

/**
 * 定义tabBar，存入到state中
 */
const useAppStore = defineStore('tabBar', {
  /**
   * 设置缓存Tab-> 默认路由名称 Workplace
   * 设置Tab-> 默认路由  /dashboard/workplace
   */
  state: (): TabBarState => ({
    cacheTabList: new Set([DEFAULT_ROUTE_NAME]),
    tagList: [DEFAULT_ROUTE],
  }),

  getters: {
    /**
     * 返回tabList
     */
    getTabList(): TagProps[] {
      return this.tagList;
    },
    /**
     * 返回缓存TabList
     */
    getCacheList(): string[] {
      return Array.from(this.cacheTabList);
    },
  },

  actions: {
    /**
     * 更新tabList
     * @param route
     */
    updateTabList(route: RouteLocationNormalized) {
      // 判断传入路由是否为重定向路由，如果是则不更新
      if (BAN_LIST.includes(route.name as string)) return;
      // 将传入路由格式化后添加tabList集合
      this.tagList.push(formatTag(route));
      // 如果可以忽略缓存则添加缓存tabList集合
      if (!route.meta.ignoreCache) {
        this.cacheTabList.add(route.name as string);
      }
    },
    /**
     * 删除tab
     * @param idx
     * @param tag
     */
    deleteTag(idx: number, tag: TagProps) {
      // 移除索引为idx的tabList
      this.tagList.splice(idx, 1);
      // 删除缓存tabList列表中的tag
      this.cacheTabList.delete(tag.name);
    },
    /**
     * 添加到缓存列表tab
     * @param name
     */
    addCache(name: string) {
      if (isString(name) && name !== '') this.cacheTabList.add(name);
    },
    /**
     * 从删除缓存列表
     * @param tag
     */
    deleteCache(tag: TagProps) {
      this.cacheTabList.delete(tag.name);
    },
    /**
     * 刷新tabList
     * @param tags
     */
    freshTabList(tags: TagProps[]) {
      this.tagList = tags;
      // 清空缓存列表
      this.cacheTabList.clear();
      // 要先判断ignoreCache
      // 然后遍历生成新数组
      // 将新的tab数组元素添加进新缓存列表
      this.tagList
        .filter((el) => !el.ignoreCache)
        .map((el) => el.name)
        .forEach((x) => this.cacheTabList.add(x));
    },
    /**
     * 重置tabList
     */
    resetTabList() {
      this.tagList = [DEFAULT_ROUTE];
      this.cacheTabList.clear();
      this.cacheTabList.add(DEFAULT_ROUTE_NAME);
    },
  },
});

export default useAppStore;
