import axios from 'axios';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Message, Modal } from '@arco-design/web-vue';
import { useUserStore } from '@/store';
import { getToken } from '@/utils/auth';

/**
 * 返回数据Json格式
 */
export interface HttpResponse<T = unknown> {
  status: number; // 状态吗
  msg: string; // 消息
  code: number; // 代码
  data: T; // 数据
}

if (import.meta.env.VITE_API_BASE_URL) {
  axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
}

/**
 * 请求拦截器
 */
axios.interceptors.request.use(
  // 拦截请求
  // 在发送请求之前做些什么 判断token
  (config: AxiosRequestConfig) => {
    // let each request carry token
    // this example using the JWT token
    // Authorization is a custom headers key
    // please modify it according to the actual situation
    const token = getToken();
    if (token) {
      if (!config.headers) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  // 对请求错误做些什么
  (error) => {
    // do something
    return Promise.reject(error);
  }
);
// 响应拦截器
axios.interceptors.response.use(
  // 对响应数据进行拦截处理
  (response: AxiosResponse<HttpResponse>) => {
    const res = response.data;
    // if the custom code is not 20000, it is judged as an error.
    // 如果响应code!==20000 ，则代表错误
    if (res.code !== 20000) {
      // 提示错误信息
      Message.error({
        content: res.msg || 'Error',
        duration: 5 * 1000,
      });
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      // 50008: 非法token
      // 50012: 其他的客户端登录
      // 50014: token过期
      if (
        [50008, 50012, 50014].includes(res.code) &&
        response.config.url !== '/api/user/info'
      ) {
        // 弹出确定退出
        Modal.error({
          title: 'Confirm logout',
          content:
            'You have been logged out, you can cancel to stay on this page, or log in again',
          okText: 'Re-Login',
          async onOk() {
            const userStore = useUserStore();

            await userStore.logout();
            window.location.reload();
          },
        });
      }
      // 返回错误消息
      return Promise.reject(new Error(res.msg || 'Error'));
    }
    // 返回数据
    return res;
  },
  // 处理错误响应
  (error) => {
    Message.error({
      content: error.msg || 'Request Error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);
