import React from 'react';

// Demos main page
import IndexView from 'demos/IndexView';
import ecommerceDemoRoutes from 'demos/ecommerce/routes';

const routes = [
  {
    path: '/demos',
    renderer: (params = {}) => <IndexView {...params} />,
  },
  ...ecommerceDemoRoutes,
];

export default routes;
