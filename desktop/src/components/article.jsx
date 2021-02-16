import React from "react";
require("dotenv").config();

export default function Article(props) {
  return (
    <div className="item article">
      <div className="bar"></div>
      <div className="articletext">
        <h1 className="text" style={{ fontWeight: 500, fontSize: 17 }}>
          {props.title}
        </h1>
        <h2
          className="text"
          style={{ fontWeight: 400, fontSize: 15, fontStyle: "italic" }}
        >
          {props.source}
        </h2>
        <h3 className="text" style={{ fontWeight: 300, fontSize: 13 }}>
          {props.content}
        </h3>
      </div>
    </div>
  );
}
