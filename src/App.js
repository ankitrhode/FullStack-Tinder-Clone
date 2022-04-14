import React from "react";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="app">
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I am the chat screen</h1>
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
        {/*  Tinder Cards */}
        {/* Buttons below tinder cards */}

        {/* Chat screen */}
      </Router>
    </div>
  );
}

export default App;
