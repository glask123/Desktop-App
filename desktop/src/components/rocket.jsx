import React from "react";
import Launch from "./rocketLaunch";

export default function Rocket() {
  return (
    <div className="box rocket">
      <Launch
        name="Launch Name"
        provider="SpaceX"
        location="Cape Canaveral"
        time="11:00 PM February 22nd"
      />
    </div>
  );
}
