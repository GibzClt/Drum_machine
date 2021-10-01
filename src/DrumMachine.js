import React, { useState } from "react";
import DrumPad from "./DrumPad";
import DrumDisplay from "./DrumDisplay";
import "./DrumMachine.css"

export const PowerContext = React.createContext();
export const VolumeContext = React.createContext();

function DrumMachine(){
  const [power, setPower] = useState(true);
  const[text, setText]= useState("");
  const [volume, setVolume] = useState(0.7);
  
  return(
    <div id="drum-machine">
      <PowerContext.Provider value={{power, setPower}}>
        <VolumeContext.Provider value={{volume, setVolume}}>
          <DrumPad setText={setText} />
          <DrumDisplay text={text}/>
        </VolumeContext.Provider>
      </PowerContext.Provider>
    </div>
  )
}

export default DrumMachine;