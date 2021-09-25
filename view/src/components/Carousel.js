import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";

const CarouselContainer = () => {
  const contentStyle = {
    width: "100%",
    height: "70vh",
    objectFit: "cover",
  };
  return (
    <Carousel autoplay autoplaySpeed="30">
      <div>
        <img
          className=""
          style={contentStyle}
          src="/images/3.jpg"
          alt="Third slide"
        />
      </div>
      <div>
        <img
          className=""
          style={contentStyle}
          src="/images/1.jpeg"
          alt="Third slide"
        />
      </div>
      <div>
        <img
          className=""
          style={contentStyle}
          src="/images/2.jpg"
          alt="Third slide"
        />
      </div>
    </Carousel>
  );
};

export default CarouselContainer;
