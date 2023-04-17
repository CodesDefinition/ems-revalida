import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router, useNavigate } from "react-router-dom";
import Homepage from "./js/admin/Homepage";
import Login from "./js/Login";
import { USERTYPE, isLoggedIn } from "./js/services/UsersService";
import Dashboard from "./js/employee/Dashboard";
import App from "./js/App";

const root = ReactDOM.createRoot(document.getElementById("root"));

if (isLoggedIn() && localStorage.getItem(USERTYPE) === "admin") {
  root.render(
    <Router>
      <App />
    </Router>
  );
} else if (isLoggedIn() && localStorage.getItem(USERTYPE) === "employee") {
  root.render(
    <Router>
      <App />
    </Router>
  );
} else {
  root.render(<Login />);
}
