import React from "react";
import Counter from "./Counter";
import Relax from "./Relax";
import { Link, Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/relax">Relax</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Switch>
          <Route path="/counter" component={Counter} />
          <Route path="/relax" component={Relax} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
