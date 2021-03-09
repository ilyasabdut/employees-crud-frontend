import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Form from "./components/Form";

function App() {
  return (
    <Router>
      <div className="App"></div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Form">
          <Form />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
