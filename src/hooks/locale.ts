import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { Message } from '@arco-design/web-vue';

/**
 * 国际化 本地化设置
 */
export default function useLocale() {
  const i18 = useI18n(); // 读取国际化
  const currentLocale = computed(() => {
    return i18.locale.value; // 设置本地化的值
  });
  // 改变本地化的值
  const changeLocale = (value: string) => {
    i18.locale.value = value;
    localStorage.setItem('arco-locale', value);
    Message.success(i18.t('navbar.action.locale'));
  };
  return {
    currentLocale,
    changeLocale,
  };
}
