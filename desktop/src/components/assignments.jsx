import React, { useState, useEffect } from "react";
import Assignment from "./assignment";
import Error from "../assets/error.svg";

export default function Assignments() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const settings = {
      method: "GET",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      accept: "application/json",
    };
    fetch(`/assignments`, settings)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setAssignments(result);
          console.log(result);
        },
        (error) => {
          setIsLoaded(true);
          console.log(error);
          setError(error);
        }
      )
      .catch((err) => {
        console.log(err);
        setError(err);
        setIsLoaded(true);
      });
  }, []);

  if (error) {
    return (
      <div className="box assignments" style={{ fontStyle: "italic" }}>
        <Error style={{ width: "100px", height: "100px" }} />
        Error: {error.message}
      </div>
    );
  } else if (!isLoaded) {
    return (
      <div className="box assignments" style={{ fontStyle: "italic" }}>
        <div className="loader"></div>
      </div>
    );
  } else {
    return (
      <div className="box assignments">
        {assignments.map((assignment) => (
          <Assignment
            key={assignment.id}
            title={assignment.title}
            class={assignment.context_name}
            date={assignment.start_at}
          />
        ))}
      </div>
    );
  }
}
