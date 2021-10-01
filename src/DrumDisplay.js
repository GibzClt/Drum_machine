import React, { useContext, useEffect } from "react";
import { PowerContext, VolumeContext } from "./DrumMachine";

function DrumDisplay({text}){
  const {setPower} = useContext(PowerContext);
  const {volume, setVolume} = useContext(VolumeContext);

  const toggleSwitch = () =>{
    const el = document.getElementById('switch');
    if(el.className === "switch-off"){
      setPower(true);
      el.className = "switch-on";
    } else{
      setPower(false);
      el.className = "switch-off";
    }
  }

  useEffect(()=>{
    const switchEl = document.getElementById('switch');
    console.log(switchEl)
    switchEl.addEventListener("click", toggleSwitch)
  }, [])

  return(
    <div id="drum-display"> 
      <div id="display">
        {text}
      </div>
      <div id="power-btn">
        <div id="switch"></div>
      </div>
      <div>
        <input 
          id="volume" 
          type="range" 
          min={0} 
          max={1} 
          value={volume}
          step={0.05} 
          onChange={(e)=>setVolume(e.target.value)} />
      </div>
    </div>
  )
}

export default DrumDisplay;