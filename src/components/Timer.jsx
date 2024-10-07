import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

export default function Timer(props) {

  function handleControl () {
    //Starting / Stopping the timer
    props.setRunTimer(!props.runTimer);
    //Changing button text based on timer state
    if (props.runTimer) {
      props.setButtonState("Resume");
    } else {
      props.setButtonState("Pause");
    }
  }
  function handleReset () {
    props.setRunTimer(false);
    props.setCounter( props.timerType === "Focus" ? 1800 : 300 );
    props.setButtonState("Start");
  }

  useEffect(() => {
    //TODO : Add bell chime after timer ends
    const timer = props.runTimer && setInterval(() => {
      props.counter > 0 ? props.setCounter(props.counter - 1) : props.handleTimerEnd()
      }, 1000);
      return () => clearInterval(timer);
  }, [props.counter,props.runTimer]);

  return (
    <div id="timer">
      <div id="timer-type">{props.timerType}</div>
      <div id="timer-countdown">
        {Math.floor(props.counter / 60)}:
        {props.counter % 60 < 10 ? "0" + (props.counter % 60) : props.counter % 60}
      </div>
      <div id="timer-controls">
        <button onClick={handleControl}>{props.buttonState}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
//TODO : Set default proptypes here later
// Timer.propTypes = {
//   counter: PropTypes.number
// }
// Timer.defaultProps = {
//   counter: 1800
// }