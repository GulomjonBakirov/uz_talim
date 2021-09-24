import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tab, Tabs } from "@mui/material";

export default function SidebarHome(props) {
  console.log(props);
  const a11yProps = props.a11yProps;
  return (
    <motion.div
      className="SidebarHome"
      animate={{ x: 0, transition: { delay: 0 } }}
      initial={{ x: -150 }}
    >
      {/* <ul className="sidebarList">
        <motion.li
          className="sidebarItem"
          animate={{ x: 0, transition: { delay: 0 } }}
          initial={{ x: -1000 }}
        >
          <Link to="/sinf8darslik" className="sidebarLink">
            8-sinf
          </Link>
        </motion.li>

        <motion.li
          className="sidebarItem"
          animate={{ x: 0, transition: { delay: 0.5 } }}
          initial={{ x: -1000 }}
        >
          <Link to="/sinf8darslik" className="sidebarLink">
            9-sinf
          </Link>
        </motion.li>
        <motion.li
          className="sidebarItem"
          animate={{ x: 0, transition: { delay: 1 } }}
          initial={{ x: -1000 }}
        >
          <Link to="/sinf8darslik" className="sidebarLink">
            10-sinf
          </Link>
        </motion.li>
        <motion.li
          className="sidebarItem"
          animate={{ x: 0, transition: { delay: 1.5 } }}
          initial={{ x: -1000 }}
        >
          <Link to="/sinf8darslik" className="sidebarLink">
            11-sinf
          </Link>
        </motion.li>
      </ul> */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={props.value}
        onChange={props.handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", height: "80vh" }}
      >
        <Tab label="5 - sinf" {...a11yProps(0)} />

        <Tab label="6 - sinf" {...a11yProps(1)} />
        <Tab label="7 - sinf" {...a11yProps(2)} />
        <Tab label="8 - sinf" {...a11yProps(3)} />
        <Tab label="9 - sinf" {...a11yProps(4)} />
        <Tab label="10 - sinf" {...a11yProps(5)} />
        <Tab label="11 - sinf" {...a11yProps(6)} />
      </Tabs>
    </motion.div>
  );
}
