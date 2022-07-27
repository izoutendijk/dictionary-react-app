import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.data.audio} target="blank">
        Listen
      </a>
      <div className="phoneticText">{props.data.text}</div>
    </div>
  );
}
