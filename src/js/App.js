import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Appbar from "./Header";
import Homepage from "./admin/Homepage";
import About from "./About";
import Employee from "./admin/EmployeeList";
import Dashboard from "./employee/Dashboard";
import { USERTYPE } from "./services/UsersService";
import ChangePass from "./employee/ChangePass";
const App = () => {
  const adminHompage = "/admin/homepage";
  const employeeHompage = "/admin/homepage";
  let userType = localStorage.getItem(USERTYPE);
  const navigate = useNavigate();
  useEffect(() => {
    if (userType == "admin") {
      navigate("/admin/homepage");
    } else if (userType == "employee") {
      navigate("/employee/homepage");
    }
  }, [userType]);
  return (
    <React.Fragment>
      <div className="App">
        <Appbar />
        <br />
        <br />
        <Routes>
          {/* Admin routing */}
          <Route path="/admin/homepage" element={<Homepage />} />
          <Route path="/admin/employee" element={<Employee />} />
          {/* employee routing */}
          <Route path="/employee/homepage" element={<Dashboard />} />
          <Route path="/employee/about" element={<About />} />
          <Route path="/employee/changepass" element={<ChangePass />} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
