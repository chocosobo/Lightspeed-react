import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { VideoPosterURL } from "../assets/constants";

import { WowzaWebRTCPlayer } from 'wowza-webrtc-player';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (src) {
      videoRef.current.srcObject = src;
    }
  }, [src]);

  return (
    <WowzaWebRTCPlayer
      ref={videoRef}
      playsInline
      autoPlay
      controls
      poster={VideoPosterURL}
    ></WowzaWebRTCPlayer>
  );
};

export default VideoPlayer;

VideoPlayer.propTypes = {
  src: PropTypes.object,
};
