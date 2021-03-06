import React from 'react';

// Building blocks productGrids components
import {
  IndexView as ProductGridsIndexView,
  WithCtaButton as WithCtaButtonView,
  MinimallyDesigned as MinimallyDesignedView,
  WithPromoBadge as WithPromoBadgeView,
} from 'blocks/productGrids';

const routes = [
  {
    path: '/blocks/product-grids',
    renderer: (params = {}) => <ProductGridsIndexView {...params} />,
  },
  {
    path: '/blocks/product-grids/with-cta-button',
    renderer: (params = {}) => <WithCtaButtonView {...params} />,
  },
  {
    path: '/blocks/product-grids/minimally-designed',
    renderer: (params = {}) => <MinimallyDesignedView {...params} />,
  },
  {
    path: '/blocks/product-grids/with-promo-badge',
    renderer: (params = {}) => <WithPromoBadgeView {...params} />,
  },
];

export default routes;
