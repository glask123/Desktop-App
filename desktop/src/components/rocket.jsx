import React, { useState, useEffect } from "react";
import Launch from "./rocketLaunch";

export default function Rocket() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    fetch("https://ll.thespacedevs.com/2.0.0/launch/upcoming/?limit=4")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setLaunches(result.results);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
      .catch((err) => {
        setIsLoaded(true);
        setError(err);
      });
  }, []);

  if (error) {
    return (
      <div className="box rocket" style={{ fontStyle: "italic" }}>
        Error: {error.message}
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="box rocket" style={{ fontStyle: "italic" }}>
        <div className="loader"></div>
      </div>
    );
  } else {
    return (
      <div className="box rocket">
        {launches.map((launch) => (
          <Launch
            key={launch.id}
            name={
              launch.mission.name.length > 27
                ? launch.mission.name.substring(0, 24) + "..."
                : launch.mission.name
            }
            provider={
              launch.launch_service_provider.name.length > 32
                ? launch.launch_service_provider.name.substring(0, 29) + "..."
                : launch.launch_service_provider.name
            }
            location={
              launch.pad.location.name.length > 35
                ? launch.pad.location.name.substring(0, 32) + "..."
                : launch.pad.location.name
            }
            time={`${launch.window_start.substring(
              0,
              10
            )} · ${launch.window_start.substring(12)}`}
            image={launch.image}
          />
        ))}
      </div>
    );
  }
}
