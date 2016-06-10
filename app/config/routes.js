import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

//components
import Main from '../components/Main';
import Home from '../components/Home';
import CityContainer from '../containers/CityContainer';
import DetailContainer from '../containers/DetailContainer';

var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/forecast/:city' component={CityContainer} />
      <Route path='/forecast/details/:city' component={DetailContainer} />
    </Route>
  </Router>
);

export default routes;
