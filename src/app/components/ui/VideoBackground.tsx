"use client";

const VideoBackground = () => {
  return (
    <video
      src="../video.mp4"
      autoPlay
      muted
      loop
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
      }}
    />
  );
};

export default VideoBackground;
