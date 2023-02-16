import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { UserState } from '@/store/modules/user/types';
import { failResponseWrap, successResponseWrap } from '@/utils/setup-mock';

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
  // 暂时注释掉mock方式
  // return axios.post<LoginRes>('/api/user/login', data);
  // 上传github pages,不支持mock
  if (!data.username) {
    return failResponseWrap(null, '用户名不能为空', 50000);
  }
  if (!data.password) {
    return failResponseWrap(null, '密码不能为空', 50000);
  }
  if (data.username === 'admin' && data.password === 'admin') {
    window.localStorage.setItem('userRole', 'admin');
    return successResponseWrap({
      token: '12345',
    });
  }
  if (data.username === 'user' && data.password === 'user') {
    window.localStorage.setItem('userRole', 'user');
    return successResponseWrap({
      token: '54321',
    });
  }
  return failResponseWrap(null, '账号或者密码错误', 50000);
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
