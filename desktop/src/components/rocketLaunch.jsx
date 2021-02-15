import React from "react";

export default function RocketLaunch(props) {
  return (
    <div className="item launch">
      <div className="rocketimage"></div>
      <div className="rockettext">
        <h1 className="text" style={{ fontWeight: 900 }}>
          {props.name}
        </h1>
        <h2 className="text">{props.provider}</h2>
        <h3 className="text">{props.location}</h3>
        <h4 className="text">{props.time}</h4>
      </div>
      <div className="bar rocketbar"></div>
    </div>
  );
}
