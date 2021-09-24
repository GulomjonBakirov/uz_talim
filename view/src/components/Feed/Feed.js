import React from "react";
import PropTypes from "prop-types";

import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CardComponent from "../Card";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const data = [
  {
    id: 1,
    theme: "kitob",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus distinctio ipsa, sunt sit dolorem minima. Labore, qui! Expedita assumenda laboriosam ut asperiores, necessitatibus sit cumque deleniti, facilis ratione quibusdam error, ipsam alias quis animi aut quae exercitationem laudantium iste?",
  },
  {
    id: 2,
    theme: "daftar",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus distinctio ipsa, sunt sit dolorem minima. Labore, qui! Expedita assumenda laboriosam ut asperiores, necestionem laudantium iste?",
  },
];

export default function Feed({ value }) {
  return (
    <div className="Feed">
      <TabPanel value={value} index={0}>
        <div className="Cards">
          {data.map((d) => (
            <CardComponent
              key={d.id}
              theme={d.theme}
              description={d.description}
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
