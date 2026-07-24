import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:home',
      order: -1,
      title: $t('page.home.title'),
    },
    name: 'Home',
    path: '/home',
    component: () => import('#/views/home/index.vue'),
  },
];

export default routes;
