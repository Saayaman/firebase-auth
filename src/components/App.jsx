import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as ROUTES from '../routes';
import Landing from './Landing';
import UserHome from './UserHome';
// import SignUp from './SignUp';
// import SignIn from './SignIn';
import Navigation from './Navigation';

import SignUpContainer from '../containers/SignUpContainer';
import SignInContainer from '../containers/SignInContainer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <hr />
      <Switch>
        <Route path={ROUTES.LANDING} exact component={Landing} />
        <Route path={ROUTES.USER_HOME} component={UserHome} />
        <Route path={ROUTES.SIGN_UP} component={SignUpContainer} />
        <Route path={ROUTES.SIGN_IN} component={SignInContainer} />
      </Switch>
    </div>
  );
}

export default App;
