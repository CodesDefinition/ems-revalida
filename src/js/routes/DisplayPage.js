import React from "react";
import { USERTYPE } from "../services/UsersService";
import { Navigate } from "react-router-dom";

const DisplayPage = () => {
  const adminHompage = "/admin/homepage";
  const employeeHompage = "/admin/homepage";
  return <React.Fragment>
    {
        localStorage.getItem(USERTYPE) == "admin" ? await (<Navigate to={adminHompage} />) :
        localStorage.getItem(USERTYPE) == "employee" ? (<Navigate to={employeeHompage} />) : ''
    }
  </React.Fragment>;
};

export default DisplayPage;
