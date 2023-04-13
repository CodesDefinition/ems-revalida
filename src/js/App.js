import React from "react";
import { Route, Routes } from "react-router-dom";
import Appbar from "./Header";
import Homepage from "./admin/Homepage";
import About from "./About";
import Employee from "./admin/EmployeeList";
import Login from './Login';

const App = () => {
  return (
    <React.Fragment>
      <div className="App"> 
        <Appbar /> <br/> <br />
        <Routes>
          <Route path="/admin/homepage" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/homepage" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin/employee" element={<Employee />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
