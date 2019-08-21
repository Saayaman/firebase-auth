import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../routes';
import Landing from './Landing';
import UserHome from './UserHome';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Navigation from './Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <hr />
      <Switch>
        <Route path={ROUTES.LANDING} exact component={Landing} />
        <Route path={ROUTES.USER_HOME} component={UserHome} />
        <Route path={ROUTES.SIGN_UP} component={SignUp} />
        <Route path={ROUTES.SIGN_IN} component={SignIn} />
      </Switch>
    </div>
  );
}

export default App;
