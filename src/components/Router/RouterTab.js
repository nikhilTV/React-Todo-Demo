import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./RouterTab.css";

function RouterTab() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul className="Todo_Tab">
              <li className="Tab_Link">
                  <Link style={{textDecoration:"none"}} to="/todo">Todo</Link>
              </li>
              <li className="Tab_Link">
                <Link style={{textDecoration:"none"}} to="/redux_todo">Redux Todo</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/todo">
              {/* <Home /> */}
              {/* todo contents */}
            </Route>

            <Route path="/redux_todo">
              {/* <About /> */}
              {/* redux_todo contents */}
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default RouterTab;
