import React from "react";
import CarouselContainer from "../components/Carousel";
import Divider from "../components/Divider";
import HomeAbout from "../components/HomeAbout";
import "../styles/Home/Home.css";

export default function Home() {
  return (
    <div>
      <CarouselContainer />
      <div className="container">
        <Divider />
        <HomeAbout />
      </div>
    </div>
  );
}
