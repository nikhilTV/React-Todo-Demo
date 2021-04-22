import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReduxApp from "./components/Redux_Todo/ReduxApp";
// import RouterTab from './components/Router/RouterTab';
import App from "./components/Todo/App";

class TodoApp extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <ul className="Todo_Tab">
                <li className="Tab_Link">
                  <Link style={{ textDecoration: "none" }} to="/todo">
                    Todo
                  </Link>
                </li>
                <li className="Tab_Link">
                  <Link style={{ textDecoration: "none" }} to="/redux_todo">
                    Redux Todo
                  </Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/todo">
                {/* todo contents */}
                <App />
              </Route>

              <Route path="/redux_todo">
                <ReduxApp/>
                {/* <App /> */}

              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default TodoApp;


