import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import NavBar from "../components/NavBar";

import HeroPage from "../pages/HeroPage";
import DcPage from "../pages/DcPage";
import MarvelPage from "../pages/MarvelPage";
import SearchPage from "../pages/SearchPage";

export default function DashboardRouter() {
  return (
    <>
      <NavBar />
      <div className="container mt-3">
        <Switch>
          <Route exact path="/dc/" component={DcPage} />
          <Route exact path="/marvel/" component={MarvelPage} />
          <Route exact path="/hero/:heroid" component={HeroPage} />
          <Route exact path="/search" component={SearchPage} />
          <Redirect to="/dc" />
        </Switch>
      </div>
    </>
  );
}
