import React from "react";
import ReactAudioPlayer from "react-audio-player";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics row">
      <div className="phoneticText col-2">{props.data.text}</div>
      <div className="phoneticAudio col-4">
        <ReactAudioPlayer
          src={props.data.audio}
          autoPlay={false}
          controls
        />
      </div>
    </div>
  );
}
