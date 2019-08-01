import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Meetup from '../pages/Meetup';
import NewEdition from '../pages/NewEdition';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/meetup" component={Meetup} isPrivate />
      <Route path="/newEdition" component={NewEdition} isPrivate />
      <Route path="/Profile" component={Profile} isPrivate />
    </Switch>
  );
}
