import React, { useState, useEffect } from "react";

const startingvalue = 70;

export default function Timer() {

  const [counter, setCounter] = useState(startingvalue);
  const [runTimer, setRunTimer] = useState(false);

  function handleControl () {
    setRunTimer(!runTimer);
  }
  function handleReset () {
    setRunTimer(false);
    setCounter(startingvalue);
  }

  useEffect(() => {
    const timer = runTimer && setInterval(() => {
      counter > 0 && setCounter(counter - 1);
      }, 1000);
      return () => clearInterval(timer);
  }, [counter,runTimer]);

  return (
    <div id="timer">
      {Math.floor(counter / 60)} :{" "}
      {counter % 60 < 10 ? "0" + (counter % 60) : counter % 60}
      <div id="timer-controls">
        <button onClick={handleControl}>Start/Pause/Resume</button>
        <button onClick={handleReset}>Reset/Stop</button>
      </div>
    </div>
  );
}