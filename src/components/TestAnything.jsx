import React, { useState } from "react";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import {
  AppBar,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Home from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";

const TestAnything = () => {
  const [value, setValue] = useState("Home");
  const handleChange = (e, value) => {
    setValue(value);
  };

  return (
    <AppBar>
      <Toolbar>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="white"
          indicatorColor="secondary"
        >
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Typography
                  sx={{ color: 'white' }}
                >
                  <Home {...bindTrigger(popupState)} />
                </Typography>
                <Menu {...bindMenu(popupState)}>
                  <NavLink to="/">
                    <MenuItem onClick={popupState.close}>sdf</MenuItem>
                  </NavLink>
                  <MenuItem onClick={popupState.close}>My asdf</MenuItem>
                  <MenuItem onClick={popupState.close}>asdf</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <Tab
                  value="Enquary"
                  label="Enquary Now"
                  {...bindTrigger(popupState)}
                />
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>Profile</MenuItem>
                  <MenuItem onClick={popupState.close}>My account</MenuItem>
                  <MenuItem onClick={popupState.close}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>

          <PopupState popupId="course">
            {(popupState) => (
              <>
                <Tab
                  icon={<ArrowDropDown size="big" />}
                  iconPosition={"end"}
                  value="Course"
                  label="Course Offered"
                  {...bindTrigger(popupState)}
                />
                <Menu {...bindMenu(popupState)}>
                  <MenuItem onClick={popupState.close}>a</MenuItem>
                  <MenuItem onClick={popupState.close}>d</MenuItem>
                  <MenuItem onClick={popupState.close}>v</MenuItem>
                  <MenuItem onClick={popupState.close}>b</MenuItem>
                </Menu>
              </>
            )}
          </PopupState>

          <Tab
            icon={<ArrowDropDown />}
            iconPosition={"end"}
            value="Touch"
            label="Get In Touch"
          />
          <Tab
            icon={<ArrowDropDown />}
            iconPosition={"end"}
            value="Affiliation"
            label="Affiliation"
          />
          <Tab
            icon={<ArrowDropDown />}
            iconPosition={"end"}
            value="Downloads"
            label="Downloads"
          />
          <Tab value="Contact" label="Contact Us" />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default TestAnything;
