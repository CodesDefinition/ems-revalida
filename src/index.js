import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./js/App";
import Login from "./js/Login";
import { isLoggedIn } from "./js/services/UsersService";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (isLoggedIn()) {
  root.render(
    <Router>
      <App />
    </Router>
  );
} else {
  root.render(<Login />);
}
