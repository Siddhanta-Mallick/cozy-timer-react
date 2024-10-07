import React from "react";
import "../Styles/PopUp.component.css";
export default function PopUp(props) {
    if(!props.isPopup) {
        return null;
    } else {
        return (
            <div id="popup-frame">
                <div id="greeting">
                    {props.timerType === "Focus" 
                    ? "Break Over! Lets get working!"
                    : "Well done! Keep up the great work!"}
                </div>
              <div id="focus-time">Completed {props.timerType === "Focus" ? "Rest" : "Focus"} for {props.timerType === "Focus" ? "5:00" : "30:00"} Mins</div>
              <div id="popup-controls">
                <button onClick={props.setFocus} >Start Focus</button>
                <button onClick={props.setRest}>Start Break</button>
              </div>
            </div>
          );
    }    
}
