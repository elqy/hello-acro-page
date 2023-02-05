export interface TagProps {
  title: string; // tab标题
  name: string; // tab名称
  fullPath: string; // tab路径
  query?: any; // query
  ignoreCache?: boolean; // 是否忽略缓存
}

export interface TabBarState {
  tagList: TagProps[]; // tab集合
  cacheTabList: Set<string>; // 缓存tab集合
}
