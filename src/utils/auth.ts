// 定义token关键字
const TOKEN_KEY = 'token';
// 通过localStorage来判断是否登录状态
const isLogin = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};
// 获取token的值
const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};
// 给token赋值
const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};
// 清除token的值
const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export { isLogin, getToken, setToken, clearToken };
