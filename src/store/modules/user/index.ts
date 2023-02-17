import { defineStore } from 'pinia';
import {
  login as userLogin,
  logout as userLogout,
  getUserInfo,
  LoginData,
} from '@/api/user';
import { clearToken } from '@/utils/auth';
import { removeRouteListener } from '@/utils/route-listener';
import { UserState } from './types';
import useAppStore from '../app';

/**
 * 管理用户状态信息
 */
const useUserStore = defineStore('user', {
  // 初始化用户状态数据 未定义
  state: (): UserState => ({
    name: undefined,
    avatar: undefined,
    job: undefined,
    organization: undefined,
    location: undefined,
    email: undefined,
    introduction: undefined,
    personalWebsite: undefined,
    jobName: undefined,
    organizationName: undefined,
    locationName: undefined,
    phone: undefined,
    registrationDate: undefined,
    accountId: undefined,
    certification: undefined,
    role: '',
  }),

  getters: {
    // 获取用户信息数据
    userInfo(state: UserState): UserState {
      return { ...state };
    },
  },

  actions: {
    // 切换角色
    switchRoles() {
      return new Promise((resolve) => {
        this.role = this.role === 'user' ? 'admin' : 'user';
        resolve(this.role);
      });
    },
    // 设置用户信息
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial);
    },

    // 重置用户信息
    resetInfo() {
      this.$reset();
    },

    // 获取用户信息
    async info() {
      // 异步加载用户信息
      // const res = await getUserInfo();
      // 临时github pages
      getUserInfo();
      // 将获取的用户数据设置成
      // this.setInfo(res.data);
      // const role = window.localStorage.getItem('userRole') || 'admin';
      this.setInfo({
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
        role: 'admin',
      });
    },

    // 登录
    async login(loginForm: LoginData) {
      try {
        // 异步加载用户登录信息
        // const res = await userLogin(loginForm);
        // 临时github pages
        userLogin(loginForm);
        // 将返回的数据token存储到state中
        // setToken(res.data.token);
        // setToken('12345');
      } catch (err) {
        // 清除token
        clearToken();
        throw err;
      }
    },
    // 退出系统回调函数
    logoutCallBack() {
      // 获取应用程序状态
      const appStore = useAppStore();
      // 重置用户信息
      this.resetInfo();
      // 清空token数据
      clearToken();
      // 移除路由监听器
      removeRouteListener();
      // 清空服务器菜单信息
      appStore.clearServerMenu();
    },
    // 退出
    async logout() {
      try {
        // 异步调用用户退出
        await userLogout();
      } finally {
        // 退出后回调，清空所有数据痕迹
        this.logoutCallBack();
      }
    },
  },
});

export default useUserStore;
