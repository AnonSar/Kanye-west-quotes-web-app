import React from "react";

const BackgroundVideo = Props => {
  return (
    <video autoPlay muted loop className="backgroundVideo">
      <source src="./backgroundVideo.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
