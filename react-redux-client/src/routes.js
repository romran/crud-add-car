// ./react-redux-client/src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Cars from './containers/Cars';
import Car from './containers/Car';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Cars} />
     <Route path="/:id" component={Car} />
  </Route>
)
