import React from "react";
import video from "./backgroundVideo.mp4";
import HeadingSection from "../Heading-Section/heading-section";

const BackgroundVideo = Props => {
  return (
    <div>
      <video autoPlay muted loop className="backgroundVideo">
        <source src = {video} type="video/mp4" />
      </video>
      <HeadingSection />
    </div>
  );
};

export default BackgroundVideo;
