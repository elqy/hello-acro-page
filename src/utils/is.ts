const opt = Object.prototype.toString;

/**
 * 是否为数组
 * @param obj
 */
export function isArray(obj: any): obj is any[] {
  return opt.call(obj) === '[object Array]';
}

/**
 * 是否为对象
 * @param obj
 */
export function isObject(obj: any): obj is { [key: string]: any } {
  return opt.call(obj) === '[object Object]';
}

/**
 * 是否为String
 * @param obj
 */
export function isString(obj: any): obj is string {
  return opt.call(obj) === '[object String]';
}

/**
 * 是否为Number
 * @param obj
 */
export function isNumber(obj: any): obj is number {
  return opt.call(obj) === '[object Number]' && obj === obj; // eslint-disable-line
}

/**
 * 是否为正则表达式
 * @param obj
 */
export function isRegExp(obj: any) {
  return opt.call(obj) === '[object RegExp]';
}

/**
 * 是否为文件
 * @param obj
 */
export function isFile(obj: any): obj is File {
  return opt.call(obj) === '[object File]';
}

/**
 * 是否为Blob
 * @param obj
 */
export function isBlob(obj: any): obj is Blob {
  return opt.call(obj) === '[object Blob]';
}

/**
 * 是否为undefined
 * @param obj
 */
export function isUndefined(obj: any): obj is undefined {
  return obj === undefined;
}

/**
 * 是否为null
 * @param obj
 */
export function isNull(obj: any): obj is null {
  return obj === null;
}

/**
 * 是否为function
 * @param obj
 */
export function isFunction(obj: any): obj is (...args: any[]) => any {
  return typeof obj === 'function';
}

/**
 * 是否为空对象
 * @param obj
 */
export function isEmptyObject(obj: any): boolean {
  return isObject(obj) && Object.keys(obj).length === 0;
}

/**
 * 是否有值存在
 * @param obj
 */
export function isExist(obj: any): boolean {
  return obj || obj === 0;
}

/**
 * 是否为顶级对象window
 * @param el
 */
export function isWindow(el: any): el is Window {
  return el === window;
}
