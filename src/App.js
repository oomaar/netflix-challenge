import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import HomeScreen from './Screens/HomeScreen';
import SigninScreen from "./Screens/SigninScreen";
import SignupScreen from "./Screens/SignupScreen";
import BrowseScreen from "./Screens/BrowseScreen";

function App() {
  return (
    <Router>
      <Route exact path={ROUTES.HOME}>
        <HomeScreen />
      </Route>
      <Route exact path={ROUTES.SIGNIN}>
        <SigninScreen />
      </Route>
      <Route exact path={ROUTES.SIGNUP}>
        <SignupScreen />
      </Route>
      <Route exact path={ROUTES.BROWSE}>
        <BrowseScreen />
      </Route>
    </Router>
  );
}

export default App;
