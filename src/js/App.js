import React from "react";
import { Route, Routes } from "react-router-dom";
import Appbar from "./Appbar";
import Homepage from "./Homepage";
import About from "./About";
const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <Appbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
