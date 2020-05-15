import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import FutureTracker from "./components/future";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <h1>Taco Breath Software 🌮</h1>
              <a class="future-link" href="/future-high-off-life-leak-tracker">
                <img src="/future-head.jpg"></img>
                <br />
                <span>High Off Life Tracker</span>
              </a>
            </Route>
            <Route path="/future-high-off-life-leak-tracker">
              <FutureTracker />
            </Route>
          </Switch>
          <p>
            This application was developed in under an hour by{" "}
            <a href="https://twitter.com/IvanCaceres">@IvanCaceres.</a>
            <br />A full stack software engineer with 10+ years of experience:
            <br />
            C++/Typescript/React/React-Native/PHP/Python/Elixir/Vuejs/Angular/Objective-C
          </p>
          <p>
            Hire me for software development:
            <br />
            <a href="mailto:ballinuptown@live.com">ballinuptown@live.com</a>
            <br />
            <a href="https://github.com/ivancaceres">github</a>
            <br />
            <a href="https://www.linkedin.com/in/ivan-caceres-52977896/">
              linkedin
            </a>
            <br />
            skype: caceres.ivan
          </p>
        </header>
      </div>
    </Router>
  );
}

export default App;
