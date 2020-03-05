import React from "react";
import HeadingSection from "../Heading-Section/heading-section";

const BackgroundVideo = Props => {
  return (
    <div>
      <video autoplay muted loop className="backgroundVideo">
        <source src="./backgroundVideo.mp4" type="video/mp4" />
      </video>
      <HeadingSection />
    </div>
  );
};

export default BackgroundVideo;
