import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Feed from "../components/Feed/Feed";
import SidebarHome from "../components/SidebarHome";
import "../styles/Home/Home.css";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="Home">
      <div className="container">
        <Box
          sx={{
            flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            // height: 500,
          }}
        >
          <SidebarHome
            value={value}
            handleChange={handleChange}
            a11yProps={a11yProps}
          />
          <Feed value={value} />
        </Box>
        {/* <SidebarHome />
        <div className="Feed">
          <Router>
            <Switch>
              <Route path="/sinf9darslik" exact={true} component={darslik9} />
              <Route path="/sinf9darslik" exact={true} component={darslik10} />
            </Switch>
          </Router>
        </div> */}
      </div>
    </div>
  );
}
