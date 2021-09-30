import React, { useState } from "react";
import Pad from "./Pad";

function DrumPad({setText}){
  return(
    <div id="drum-pad">
      <Pad idName="Q" padName="Heater 2" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" setText={setText}/>
      <Pad idName="W" padName="Heater 3" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" setText={setText}/>
      <Pad idName="E" padName="Heater 1" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" setText={setText}/>
      <Pad idName="A" padName="Heater 4" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" setText={setText}/>
      <Pad idName="S" padName="Clap" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" setText={setText}/>
      <Pad idName="D" padName="Open HH" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" setText={setText}/>
      <Pad idName="Z" padName="Kick n' Hat" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" setText={setText}/>
      <Pad idName="X" padName="Kick" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" setText={setText}/>
      <Pad idName="C" padName="Closed HH" audioSrc="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" setText={setText}/>
    </div>
  )
}

export default DrumPad;