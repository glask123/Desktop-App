import React, { useState } from "react";

export default function RocketLaunch(props) {
  const [query, setQuery] = useState(
    `https://www.google.com/search?q=${props.name}`
  );

  return (
    <div className="item launch">
      <img className="rocketimage" src={props.image} alt={props.name} />
      <div className="rockettext">
        <a href={query}>
          <h1 className="text" style={{ fontWeight: 500, fontSize: 18 }}>
            {props.name}
          </h1>
        </a>

        <h2
          className="text"
          style={{ fontWeight: 400, fontSize: 16, fontStyle: "italic" }}
        >
          {props.provider}
        </h2>
        <h3 className="text" style={{ fontWeight: 300, fontSize: 14 }}>
          {props.location}
        </h3>
        <h4
          className="text"
          style={{ fontWeight: 300, fontSize: 12, fontStyle: "italic" }}
        >
          {props.time}
        </h4>
      </div>
      <div className="bar"></div>
    </div>
  );
}
