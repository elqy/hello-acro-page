import { DEFAULT_LAYOUT } from '@/router/routes/base';

export default {
  path: '/design',
  name: '',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.design',
    icon: 'icon-settings',
    requiresAuth: true,
    order: 1,
  },
  children: [
    {
      path: 'https://arco.design/vue/docs/pro/faq',
      name: 'faq',
      meta: {
        locale: 'menu.design.arco',
        requiresAuth: true,
        order: 1,
      },
    },
    {
      path: 'http://pro.arco.design/',
      name: 'arcoDesignPro',
      meta: {
        locale: 'menu.design.arco.pro',
        requiresAuth: true,
        order: 2,
      },
    },
    {
      path: 'https://arco.design/vue/docs/pro/start',
      name: 'arcoDesignProDoc',
      meta: {
        locale: 'menu.design.arco.pro.doc',
        requiresAuth: true,
        order: 3,
      },
    },
  ],
};
