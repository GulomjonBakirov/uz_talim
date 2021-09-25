import React from "react";
import CarouselContainer from "../components/Carousel";
import Divider from "../components/Divider";
import HomeAbout from "../components/HomeAbout";
import HomeLessons from "../components/HomeLessons";
import ModalView from "../components/Modal";
import "../styles/Home/Home.css";

export default function Home() {
  return (
    <div>
      <CarouselContainer />
      <div className="container">
        <Divider />
        <HomeAbout />
        <Divider />
        <HomeLessons />
        <ModalView />
      </div>
    </div>
  );
}
