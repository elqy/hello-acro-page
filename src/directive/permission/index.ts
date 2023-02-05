import { DirectiveBinding } from 'vue';
import { useUserStore } from '@/store';

/**
 * 检查权限
 * @param el
 * @param binding
 */
function checkPermission(el: HTMLElement, binding: DirectiveBinding) {
  // 获取绑定指令、用户状态和角色
  const { value } = binding;
  const userStore = useUserStore();
  const { role } = userStore;

  // 判断指令集合-事件
  if (Array.isArray(value)) {
    // 如果存在指令
    if (value.length > 0) {
      const permissionValues = value;

      // 检查指令集合是否包含角色
      const hasPermission = permissionValues.includes(role);
      // 如果没有权限且存在父节点，则移除当前节点
      if (!hasPermission && el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }
  } else {
    throw new Error(`need roles! Like v-permission="['admin','user']"`);
  }
}

export default {
  // 挂载指令 （元素 、事件）
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding);
  },
  // 更新指令
  updated(el: HTMLElement, binding: DirectiveBinding) {
    checkPermission(el, binding);
  },
};
