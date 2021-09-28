import React from "react";
import TabView from "../components/TabView";

const data = [
  {
    name: "natural sonlar",
    video: "https://www.youtube.com/watch?v=QbHHhg841Hw",
  },
  {
    name: "natural sonlar",
    video: "https://www.youtube.com/watch?v=QbHHhg841Hw",
  },
  {
    name: "natural sonlar",
    video: "https://www.youtube.com/watch?v=QbHHhg841Hw",
  },
];

export default function Lessons() {
  return (
    <div className="lessonVideos">
      <TabView data={data} />
      <video src="../videos/natural_sonlar.mp4" />
    </div>
  );
}
