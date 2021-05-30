import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { VideoPosterURL } from "../assets/constants";

import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';
import Orientation from 'react-native-orientation';

const VideoPlayer = ({ src }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (src) {
      videoRef.current.srcObject = src;
    }
  }, [src]);

  return (
    <VlCPlayerView
      ref={videoRef}
      Orientation={Orientation}
      playsInline
      autoPlay
      controls
      poster={VideoPosterURL}
    ></VlCPlayerView>
  );
};

export default VideoPlayer;

VideoPlayer.propTypes = {
  src: PropTypes.object,
};
