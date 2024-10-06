import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function Timer(props) {
  const [counter, setCounter] = useState(props.startCountSec);
  const [runTimer, setRunTimer] = useState(false);
  const [buttonState, setButtonState] = useState("Start");

  function handleControl () {
    //Starting / Stopping the timer
    setRunTimer(!runTimer);

    //Changing button text based on timer state
    if (runTimer) {
      setButtonState("Resume");
    } else {
      setButtonState("Pause");
    }
  }
  function handleReset () {
    setRunTimer(false);
    setCounter(props.startCountSec);
    setButtonState("Start");
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
        <button onClick={handleControl}>{buttonState}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

Timer.propTypes = {
  startCountSec: PropTypes.number
}
Timer.defaultProps = {
  startCountSec: 90
}