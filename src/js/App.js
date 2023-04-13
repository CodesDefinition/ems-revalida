import React from "react";
import { Route, Routes } from "react-router-dom";
import Appbar from "./Header";
import Homepage from "./admin/Homepage";
import About from "./About";
<<<<<<< HEAD
import Employee from "./admin/Employee";
=======
import Dashboard from "./user_modules/Dashboard";
import Login from "./Login";
>>>>>>> 67bb295eca26bec9d89595854c1dcecf15b8761f
const App = () => {
  return (
    <React.Fragment>
      <div className="App"> 
        <Appbar /> <br/> <br />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
<<<<<<< HEAD
          <Route path="/admin/employee" element={<Employee />} />
=======
          <Route path="/userhome" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
>>>>>>> 67bb295eca26bec9d89595854c1dcecf15b8761f
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
