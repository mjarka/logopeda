import React from 'react';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import Page from './components/Page';
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';
import Coworking from 'views/Coworking/Coworking';
const App = () => {
  return (
    <Page>
      <HashRouter>
        {/* <Routes /> */}
        <ReactRoutes>
          <Route path="/" element={<Coworking />}></Route>
        </ReactRoutes>
      </HashRouter>
    </Page>
  );
};

export default App;
