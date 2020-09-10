import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";

const Routes = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact to="/" component={App} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
