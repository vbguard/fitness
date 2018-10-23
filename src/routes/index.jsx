import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '@pages/home';
import NotFoundPage from '@pages/not-found-page';
import AccountPage from '@pages/auth-manager/AccountPage';
import PasswordChange from '@pages/auth-manager/PasswordChange';
import SignInPage from '@pages/auth-manager/SignInPage';

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route path="/account" component={AccountPage} />
    <Route path="/password" component={PasswordChange} />
    <Route path="/SIGN_IN" component={SignInPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default Router;
