import React from 'react';
import {authRole} from '../../shared/constants/AppConst';

export const userListConfig = [
  {
    auth: authRole.user,
    routes: [
      {
        path: '/list-type/flat',
        component: React.lazy(() => import('./Flat/index')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/list-type/morden',
        component: React.lazy(() => import('./Morden/index')),
      },
    ],
  },
  {
    auth: authRole.user,
    routes: [
      {
        path: '/list-type/standard',
        component: React.lazy(() => import('./Standard/index')),
      },
    ],
  },
];
