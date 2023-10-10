import React from "react";
import style from "./BackgroundVideo.module.css";

const BackgroundVideo = ({ webm, mp4 }) => {
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
        <source src={webm}></source>
        <source src={mp4}></source>
      </video>
      <div className={style.backgroundVideoWrapper}></div>
    </>
  );
};

export default BackgroundVideo;
