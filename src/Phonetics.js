import React from "react";
import ReactAudioPlayer from "react-audio-player";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <div className="phoneticText">{props.data.text}</div>
      <ReactAudioPlayer
        id="audioplayer"
        src={props.data.audio}
        autoPlay={false}
        controls
      />
    </div>
  );
}
