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
    <div
      className="lessonVideos"
      style={{ maxWidth: "1200px", margin: "0 auto" }}
    >
      <TabView data={data} />
    </div>
  );
}
