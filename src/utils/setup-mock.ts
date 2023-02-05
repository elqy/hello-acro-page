import debug from './env';

export default ({ mock, setup }: { mock?: boolean; setup: () => void }) => {
  // 如果mock参数!==false并且为调试模式，则调用setup方法
  if (mock !== false && debug) setup();
};

/**
 * 响应成功数据
 * @param data
 */
export const successResponseWrap = (data: unknown) => {
  return {
    data,
    status: 'ok',
    msg: '请求成功',
    code: 20000,
  };
};
/**
 * 请求失败
 * @param data
 * @param msg
 * @param code
 */
export const failResponseWrap = (data: unknown, msg: string, code = 50000) => {
  return {
    data,
    status: 'fail',
    msg,
    code,
  };
};
