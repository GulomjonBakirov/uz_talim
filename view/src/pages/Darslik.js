import React from "react";
import Box from "@mui/material/Box";

import Feed from "../components/Feed";
import SidebarHome from "../components/SidebarHome";
import "../styles/Darsliklar/Darsliklar.css";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function Darslik() {
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
