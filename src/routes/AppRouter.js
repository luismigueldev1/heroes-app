import React, { useContext } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

import LoginPage from "../pages/LoginPage";
import DashboardRouter from "./DashboardRouter";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function AppRouter() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <PublicRoute
          exact
          path="/login"
          component={LoginPage}
          isAuth={user.logged}
        />
        <PrivateRoute
          path="/"
          component={DashboardRouter}
          isAuth={user.logged}
        />
      </Switch>
    </Router>
  );
}

export default AppRouter;
