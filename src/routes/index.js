import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Home from '../pages/Home/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/products" component={Home} />
      <Redirect to="/products" />
    </Switch>
  );
}
