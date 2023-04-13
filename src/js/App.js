import React from "react";
import { Route, Routes } from "react-router-dom";
import Appbar from "./Header";
import Homepage from "./admin/Homepage";
import About from "./About";
<<<<<<< HEAD
import Employee from "./admin/Employee";
import Dashboard from "./user_modules/Dashboard";
import Login from "./Login";
=======
import Employee from "./admin/EmployeeList";
import Login from './Login';
import Dashboard from './user_modules/Dashboard';

>>>>>>> 537daf2bcb9c21baa847da1e534627e2cc229b83
const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <Appbar /> <br /> <br />
        <Routes>
          <Route path="/admin/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
<<<<<<< HEAD

          <Route path="/admin/employee" element={<Employee />} />
          <Route path="/userhome" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
=======
          <Route path="/user/homepage" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/employee" element={<Employee />} />
>>>>>>> 537daf2bcb9c21baa847da1e534627e2cc229b83
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
