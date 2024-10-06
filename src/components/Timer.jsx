import React, { useState, useEffect } from "react";
const startingvalue = 70;
export default function Timer() {
  const [counter, setCounter] = useState(startingvalue);

  useEffect(() => {
    setTimeout(() => {
      counter > 0 && setCounter(counter - 1);
    }, 1000);
  }, [counter]);

  return (
    <div id="timer">
      {Math.floor(counter / 60)} :{" "}
      {counter % 60 < 10 ? "0" + (counter % 60) : counter % 60}
    </div>
  );
}
