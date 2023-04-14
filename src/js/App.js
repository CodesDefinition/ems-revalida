import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Appbar from "./Header";
import Homepage from "./admin/Homepage";
import About from "./About";
import Employee from "./admin/EmployeeList";
import Dashboard from "./user_modules/Dashboard";
const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <Appbar /> <br /> <br />
        <Routes>
          {/* admin routing */}
          <Route path="/admin/homepage" element={<Homepage />} />
          <Route path="/admin/employee" element={<Employee />} />
          {/* employee routing */}
          <Route path="/about" element={<About />} />
          <Route path="/userhome" element={<Dashboard />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
