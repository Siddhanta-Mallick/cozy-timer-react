import React, {useState} from 'react'
import Timer from "./Timer";
import PopUp from "./PopUp";
function App() {
  const [counter, setCounter] = useState(3);
  const [timerType, setTimerType] = useState("Focus");
  const [runTimer, setRunTimer] = useState(false);
  const [buttonState, setButtonState] = useState("Start");
  const [isPopup, setIsPopup] = useState(false);

  function handleTimerEnd () {
      timerType === "Focus" ? setTimerType("Rest") : setTimerType("Focus");
      setIsPopup(true);
  }
  function setFocus () {
    setCounter(1800)
    setIsPopup(false);
    setRunTimer(false);
    setButtonState("Start");
  }
  function setRest () {
    setCounter(300);
    setIsPopup(false);
    setRunTimer(false);
    setButtonState("Start");
  }
  return (
    <div id="wrapper">
      <Timer 
      handleTimerEnd={handleTimerEnd}
      timerType={timerType}
      counter={counter}
      setCounter={setCounter}
      runTimer={runTimer}
      setRunTimer={setRunTimer}
      buttonState={buttonState}
      setButtonState={setButtonState}
      />
      <PopUp
      isPopup={isPopup}
      setFocus={setFocus}
      setRest={setRest}
      timerType={timerType}
      />
    </div>
  );
}

export default App;
