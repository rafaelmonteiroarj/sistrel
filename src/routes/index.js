import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoadingOverlay from '../components/UI/LoadingOverlay';

const About = lazy(() => import('../pages/About'));
const Home = lazy(() => import('../pages/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));
const Work = lazy(() => import('../pages/Work'));
const Product = lazy(() => import('../pages/Product'));

const Routes = () => (
  <Router>
    <Suspense fallback={<LoadingOverlay title="Aguarde ..." />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/works" component={Work} />
        <Route exact path="/products" component={Product} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
