import React from "react";
import CarouselContainer from "../components/Carousel";
import Divider from "../components/Divider";
import HomeAbout from "../components/Home/HomeAbout";
import HomeLessons from "../components/Home/HomeLessons";
import HomeTeachers from "../components/Home/HomeTeachers";
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
        <Divider />
        <HomeTeachers />
      </div>
    </div>
  );
}
