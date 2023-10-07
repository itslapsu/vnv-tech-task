import React from "react";
import style from "./BackgroundVideo.module.css";

const BackgroundVideo = ({ video }) => {
  return (
    <>
      <video
        className={style.backgroundVideo}
        id="Background Video Wrapper-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video}></source>
      </video>
      <div className={style.backgroundVideoWrapper}></div>
    </>
  );
};

export default BackgroundVideo;
