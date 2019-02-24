import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Navbar } from "../components";
import { Home, Signup, Signin } from "../pages";
import { Logo } from "../assets";

const navRoutes = [
  {
    path: "/",
    label: "Home"
  },
  {
    path: "/signup",
    label: "Sign Up"
  },
  {
    path: "/signin",
    label: "Sign In"
  },
  {
    path: "/support",
    label: "Support"
  }
];

export default ({ refetch }) => (
  <>
    <Router>
      <>
        <Navbar logo={<Logo />} brand="evolve" links={navRoutes} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/signup" render={() => <Signup refetch={refetch} />} />
          <Route path="/signin" render={() => <Signin refetch={refetch} />} />
          <Redirect to="/" />
        </Switch>
      </>
    </Router>
  </>
);
