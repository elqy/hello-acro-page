import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import { failResponseWrap, successResponseWrap } from '@/utils/setup-mock';
import { isLogin, setToken } from '@/utils/auth';

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
    setToken('12345');
    return successResponseWrap({
      token: '12345',
    });
  }
  if (data.username === 'user' && data.password === 'user') {
    window.localStorage.setItem('userRole', 'user');
    setToken('54321');
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
  // 暂时注释掉mock方式
  // return axios.post<LoginRes>('/api/user/logout');
  // 上传github pages,不支持mock
  return successResponseWrap(null);
}

/**
 * 获取用户信息
 */
export function getUserInfo() {
  // 暂时注释掉mock方式
  //   return axios.post<UserState>('/api/user/info');
  // 上传github pages,不支持mock
  if (isLogin()) {
    const role = window.localStorage.getItem('userRole') || 'admin';
    return successResponseWrap({
      name: '刘沁义',
      avatar:
        '//lf1-xgcdn-tos.pstatp.com/obj/vcloud/vadmin/start.8e0e4855ee346a46ccff8ff3e24db27b.png',
      email: 'liuqinyi9697@dingtalk.com',
      job: 'java全栈',
      jobName: '全栈工程师',
      organization: '智创英杰',
      organizationName: '北京智创英杰信息技术有限公司',
      location: 'shijiazhuang',
      locationName: '石家庄',
      introduction: '人潇洒，性温存',
      personalWebsite: 'https://elqy.github.io/',
      phone: '153****0000',
      registrationDate: '2002-07-01 12:10:00',
      accountId: '15012312300',
      certification: 1,
      role,
    });
  }
  return failResponseWrap(null, '未登录', 50008);
}

/**
 * 得倒菜单列表
 */
export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}
