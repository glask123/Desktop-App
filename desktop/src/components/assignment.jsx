import React from "react";

export default function Assignment(props) {
  return (
    <div className="item assignment">
      <div className="articletext" style={{ marginLeft: "10px" }}>
        <h1 className="text" style={{ fontWeight: 500, fontSize: 18 }}>
          {props.title}
        </h1>
        <h2
          className="text"
          style={{ fontWeight: 400, fontSize: 16, fontStyle: "italic" }}
        >
          {props.class}
        </h2>
        <h2
          className="text"
          style={{ fontWeight: 300, fontSize: 13, fontStyle: "italic" }}
        >
          {props.date}
        </h2>
      </div>
    </div>
  );
}
