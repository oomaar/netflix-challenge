import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { HomeScreen, SigninScreen, SignupScreen, BrowseScreen } from './Screens';
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";
import * as ROUTES from "./constants/routes";
import { useAuthListener } from "./hooks";

function App() {
  // const user = {};
  // const user = null;
  // const user = { name: 'username' };
  const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
        <IsUserRedirect
          user={user}
          loggedinpath={ROUTES.BROWSE}
          exact
          path={ROUTES.HOME}>
          <HomeScreen />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedinpath={ROUTES.BROWSE}
          exact
          path={ROUTES.SIGNIN}>
          <SigninScreen />
        </IsUserRedirect>
        <IsUserRedirect
          user={user}
          loggedinpath={ROUTES.BROWSE}
          exact
          path={ROUTES.SIGNUP}>
          <SignupScreen />
        </IsUserRedirect>
        <ProtectedRoute user={user} exact path={ROUTES.BROWSE}>
          <BrowseScreen />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
}

export default App;
