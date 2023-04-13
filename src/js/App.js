import React from "react";
import { Route, Routes } from "react-router-dom";
import Appbar from "./Appbar";
import Homepage from "./Homepage";
import About from "./About";
import Dashboard from "./user_modules/Dashboard";
import Login from "./Login";
const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <Appbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/userhome" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
