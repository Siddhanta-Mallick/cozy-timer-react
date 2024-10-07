import React from "react";
import "../Styles/PopUp.component.css";
export default function PopUp(props) {
    if(!props.isPopup) {
        return null;
    } else {
        return (
            <div id="popup-frame">
              <div id="greeting">Well done! Keep up the great work!</div>
              <div id="focus-time">Focused for 30:00 Mins</div>
              <div id="popup-controls">
                <button onClick={props.setFocus} >Start Focus</button>
                <button onClick={props.setRest}>Start Break</button>
              </div>
            </div>
          );
    }
}
