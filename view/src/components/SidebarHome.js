import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Tab, Tabs } from "@mui/material";

export default function SidebarHome(props) {
  console.log(props);
  const a11yProps = props.a11yProps;
  return (
    <div className="SidebarHome">
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
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
    </div>
  );
}
