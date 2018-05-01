// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/appContainer';
import Cars from './containers/carsContainer';
import NotFoundRoute from './components/NotFoundRoute';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Cars} />
    <Route path="*" component={NotFoundRoute} />
  </Route>

)
