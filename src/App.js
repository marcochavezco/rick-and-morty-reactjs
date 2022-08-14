import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Fragment } from "react";

import Nav from "./components/nav/Nav";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";

function App() {
  return (
    <Fragment>
      <Nav />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/characters" />
        </Route>
        <Route path="/characters" exact>
          <Characters />
        </Route>
        <Route path="/characters/:characterId">
          <CharacterDetail />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
