import React from "react";
import { Route, Routes } from "react-router-dom";
import Appbar from "./Header";
import Homepage from "./admin/Homepage";
import About from "./About";
import Employee from "./admin/Employee";
const App = () => {
  return (
    <React.Fragment>
      <div className="App"> 
        <Appbar /> <br/> <br />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/employee" element={<Employee />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
