import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DrawerComp from "./DrawerComp";
import { destroySession } from "./services/UsersService";
const PAGES = ["Home", "About", "Logout"];

function Appbar() {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const [tab, setTab] = useState();
  const handleChange = (value) => {
    setTab(value);
    if (value == 0) {
      console.log("Going home");
      navigate("/userhome");
    } else if (value == 1) {
      console.log("Going about");
      navigate("/about");
    } else if (value == 2) {
      console.log(`logging out ${localStorage.getItem("USER")}`);
      destroySession();
      window.location.reload();
    }
  };
  return (
    <React.Fragment>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#534340",
          color: "#FFF8EA",
        }}
      >
        <Toolbar>
          <Typography
            variant="h5"
            sx={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Employee Management System
          </Typography>
          {isMatch ? (
            <>
              <Tabs sx={{ marginLeft: "auto" }}>
                <DrawerComp />
              </Tabs>
            </>
          ) : (
            <>
              <Tabs
                TabIndicatorProps={{
                  style: { backgroundColor: "#FFF8EA", color: "#FFF8EA" },
                }}
                indicatorColor="#FFF8EA"
                textColor="#FFF8EA"
                value={tab}
                onChange={(e, value) => handleChange(value)}
                sx={{
                  marginLeft: "auto",
                  color: "#bb9981",
                  textDecoration: "none",
                }}
              >
                {PAGES.map((page, index) => (
                  <Tab
                    key={index}
                    label={page}
                    sx={{ color: "#bb9981", textDecoration: "none" }}
                  />
                ))}
                {/* <Tab key={index} label={page} sx={{ color: "#bb9981" }} />; */}
              </Tabs>
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Appbar;
