import React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function CardComponent({ theme, description }) {
  return (
    <motion.div
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 3 } }}
      initial={{ opacity: 0 }}
    >
      <Card sx={{ marginRight: "15px" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/images/1.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {theme}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">
            <Link
              to="/dars/:id"
              style={{ textDecoration: "none", color: "#1976d2" }}
            >
              Learn More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </motion.div>
  );
}
