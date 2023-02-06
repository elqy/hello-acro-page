import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const Tools: AppRouteRecordRaw = {
  path: '/tools',
  name: 'tools',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.tools',
    icon: 'icon-settings',
    requiresAuth: true,
    order: 1,
  },
  children: [
    {
      path: 'tools', // The midline path complies with SEO specifications
      name: 'Tools',
      component: () => import('@/views/tools/index.vue'),
      meta: {
        locale: 'menu.tools.web',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default Tools;
