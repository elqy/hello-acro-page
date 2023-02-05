import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';

/**
 * 登录参数
 */
export interface LoginData {
  username: string;
  password: string;
}

/**
 * 登录结果
 */
export interface LoginRes {
  token: string;
}

/**
 * 登录地址
 * @param data
 */
export function login(data: LoginData) {
  return axios.post<LoginRes>('/api/user/login', data);
}

/**
 * 退出地址
 */
export function logout() {
  return axios.post<LoginRes>('/api/user/logout');
}

/**
 * 获取用户信息
 */
export function getUserInfo() {
  return axios.post<UserState>('/api/user/info');
}

/**
 * 得倒菜单列表
 */
export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}
