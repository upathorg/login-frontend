import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';

const Routes = () => {
  return (
    <Switch>
      <Route path='/login' component={Login} />
    </Switch>
  );
};

export default Routes;
