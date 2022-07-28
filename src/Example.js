import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <span className="Example">
        <span className="exampleText">Example:</span> <em>{props.example}</em>
      </span>
    );
  } else {
    return null;
  }
}
