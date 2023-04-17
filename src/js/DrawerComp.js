import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import {
  Drawer,
  Icon,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
const PAGES = ["Home", "About", "Logout"];

function DrawerComp() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [tab, setTab] = useState();
  const handleChange = (tab) => {
    setTab(tab);
    if (tab == 0) {
      console.log("Going home");
      navigate("/");
    } else if (tab == 1) {
      console.log("Going about");
      navigate("/about");
    } else if (tab == 2) {
      console.log("Going logout");
    }
  };
  return (
    <React.Fragment>
      <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
        <List>
          {PAGES.map((page, index) => (
            <ListItemButton
              onClick={() => {
                handleChange(index);
              }}
            >
              <ListItemText key={index}>{page}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        icon
        sx={{ color: "#bb9981" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icon>
          <Menu />
        </Icon>
      </IconButton>
    </React.Fragment>
  );
}
export default DrawerComp;
