import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LoadingOverlay from '../components/UI/LoadingOverlay';

const Home = lazy(() => import('../components/Home'));
const NotFound = lazy(() => import('../pages/NotFound'));

const Routes = () => (
  <Router>
    <Suspense fallback={<LoadingOverlay title="Aguarde ..." />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
