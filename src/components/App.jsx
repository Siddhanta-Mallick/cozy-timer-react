import React, {useState} from 'react'
import Timer from "./Timer";
import PopUp from "./PopUp";
function App() {

  const [isFocus, SetIsFocus] = useState(true);

  function handleTimerEnd () {
    SetIsFocus(!isFocus);
  }
  return (
    <div id="wrapper">
      <Timer handleTimerEnd={handleTimerEnd}/>
      <PopUp isFocus={isFocus}/>
    </div>
  );
}

export default App;
