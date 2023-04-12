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
      navigate("/");
    } else if (value == 1) {
      console.log("Going about");
      navigate("/about");
    } else if (value == 2) {
      console.log("Going logout");
    }
  };
  return (
    <React.Fragment>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#534340",
        }}
      >
        <Toolbar>
          <Typography variant="h5">Employee Management System</Typography>
          {isMatch ? (
            <>
              <Tabs sx={{ marginLeft: "auto" }}>
                <DrawerComp />
              </Tabs>
            </>
          ) : (
            <>
              <Tabs
                value={tab}
                onChange={(e, value) => handleChange(value)}
                sx={{ marginLeft: "auto", color: "#bb9981" }}
              >
                {PAGES.map((page, index) => (
                  <Tab key={index} label={page} sx={{ color: "#bb9981" }} />
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
