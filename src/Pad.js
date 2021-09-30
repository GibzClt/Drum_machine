import React, { useContext, useEffect } from "react"
import { PowerContext, VolumeContext } from "./DrumMachine";

function Pad({padName, audioSrc, idName, setText}){
  const {power} = useContext(PowerContext);
  const {volume} = useContext(VolumeContext);
  const playc=(e)=>{
    setText(padName);
    const audioEl = document.getElementById(`${e.target.innerText}`);
    audioEl.play();
  }

  useEffect(()=>{
    document.addEventListener("keyup", playk);
  },[]);

  useEffect(()=>{
    const audios = document.getElementsByClassName("clip");
    audios.forEach(audio=>audio.volume = volume);
  }, [volume])

  const handleVolume=(()=>{
    const audios = document.getElementsByClassName("clip");
    audios.forEach(audio=>audio.volume = volume);
  })();

  const playk=(e)=>{
    switch(e.code){
      case "KeyQ" : {
        const targetEl = document.getElementById("Heater 2");
        targetEl.focus();
        targetEl.click();
      }
      break;
      case "KeyW" : {
        const targetEl = document.getElementById("Heater 3");
        targetEl.click();
        targetEl.focus();
      }
      break;
      case "KeyE" : {
        const targetEl = document.getElementById("Heater 1");
        targetEl.click();
        targetEl.focus();
      }
      break;
      case "KeyA" : {
        const targetEl = document.getElementById("Heater 4");
        targetEl.click();
        targetEl.focus();
      }
      break;
      case "KeyS" : {
        const targetEl = document.getElementById("Clap");
        targetEl.click();
        targetEl.focus();
      }
      break;
      case "KeyD" : {
        const targetEl = document.getElementById("Open HH");
        targetEl.click();
        targetEl.focus();
      }
      break;
      case "KeyZ" : {
        const targetEl = document.getElementById("Kick n' Hat");
        targetEl.click();
        targetEl.focus();
      }
      break;
      case "KeyX" : {
        const targetEl = document.getElementById("Kick");
        targetEl.click();
        targetEl.focus();
      }
      break;
      case "KeyC" : {
        const targetEl = document.getElementById("Closed HH");
        targetEl.click();
        targetEl.focus();
      }
      break;
      default : return null;
    }
  }

  return(
    <button id={padName} className="drum-pad" onClick={playc}>
      {idName}
      <audio id={idName} className="clip" src={audioSrc} muted={!power} type="audio/mpeg">
      </audio>
    </button>
  )
}

export default Pad;