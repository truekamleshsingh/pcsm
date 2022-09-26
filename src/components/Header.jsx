import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import Home from "@mui/icons-material/Home";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import { useState } from "react";

export const Header = () => {
  const [value, setValue] = useState("Home");
  const handleChange = (e, value) => {
    setValue(value);
  };
  return (
    <>
      <AppBar>
        <Toolbar>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="white"
            indicatorColor="secondary"
          >
            <Tab value="Home" icon={<Home />} />
            <Tab value="Enquary" label="Enquary Now" />
            <Tab
              icon={<ArrowDropDown size='big' />}
              iconPosition={"end"}
              value="Course"
              label="Course Offered"
            />
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
    </>
  );
};


export default Header