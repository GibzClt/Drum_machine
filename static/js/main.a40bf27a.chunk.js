(this.webpackJsonpdrum_machine=this.webpackJsonpdrum_machine||[]).push([[0],{11:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),d=c(4),r=c.n(d),n=(c(9),c(2)),m=c(0);var o=function(e){var t=e.padName,c=e.audioSrc,s=e.idName,d=e.setText,r=Object(a.useContext)(l).power,n=Object(a.useContext)(b).volume;Object(a.useEffect)((function(){document.addEventListener("keydown",o),document.addEventListener("keyup",u)}),[]),Object(a.useEffect)((function(){for(var e=document.getElementsByClassName("clip"),t=0;t<e.length;t++)e[t].volume=n}),[n]);var o=function(e){switch(e.code){case"KeyQ":var t=document.getElementById("Heater 2");t.focus(),t.click();break;case"KeyW":var c=document.getElementById("Heater 3");c.click(),c.focus();break;case"KeyE":var a=document.getElementById("Heater 1");a.click(),a.focus();break;case"KeyA":var s=document.getElementById("Heater 4");s.click(),s.focus();break;case"KeyS":var d=document.getElementById("Clap");d.click(),d.focus();break;case"KeyD":var r=document.getElementById("Open HH");r.click(),r.focus();break;case"KeyZ":var n=document.getElementById("Kick n' Hat");n.click(),n.focus();break;case"KeyX":var m=document.getElementById("Kick");m.click(),m.focus();break;case"KeyC":var o=document.getElementById("Closed HH");o.click(),o.focus();break;default:return null}},u=function(e){switch(e.code){case"KeyQ":document.getElementById("Heater 2").blur();break;case"KeyW":document.getElementById("Heater 3").blur();break;case"KeyE":document.getElementById("Heater 1").blur();break;case"KeyA":document.getElementById("Heater 4").blur();break;case"KeyS":document.getElementById("Clap").blur();break;case"KeyD":document.getElementById("Open HH").blur();break;case"KeyZ":document.getElementById("Kick n' Hat").blur();break;case"KeyX":document.getElementById("Kick").blur();break;case"KeyC":document.getElementById("Closed HH").blur();break;default:return null}};return Object(m.jsxs)("button",{id:t,className:"drum-pad",onClick:function(e){d(t),document.getElementById("".concat(e.target.innerText)).play()},children:[s,Object(m.jsx)("audio",{id:s,className:"clip",src:c,muted:!r,type:"audio/mpeg"})]})};var u=function(e){var t=e.setText;return Object(m.jsxs)("div",{id:"drum-pad",children:[Object(m.jsx)(o,{idName:"Q",padName:"Heater 2",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",setText:t}),Object(m.jsx)(o,{idName:"W",padName:"Heater 3",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",setText:t}),Object(m.jsx)(o,{idName:"E",padName:"Heater 1",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",setText:t}),Object(m.jsx)(o,{idName:"A",padName:"Heater 4",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",setText:t}),Object(m.jsx)(o,{idName:"S",padName:"Clap",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",setText:t}),Object(m.jsx)(o,{idName:"D",padName:"Open HH",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",setText:t}),Object(m.jsx)(o,{idName:"Z",padName:"Kick n' Hat",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",setText:t}),Object(m.jsx)(o,{idName:"X",padName:"Kick",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",setText:t}),Object(m.jsx)(o,{idName:"C",padName:"Closed HH",audioSrc:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",setText:t})]})};var i=function(e){var t=e.text,c=Object(a.useContext)(l).setPower,s=Object(a.useContext)(b),d=s.volume,r=s.setVolume,n=function(){var e=document.getElementById("switch");"switch-off"===e.className?(c(!0),e.className="switch-on"):(c(!1),e.className="switch-off")};return Object(a.useEffect)((function(){var e=document.getElementById("switch");console.log(e),e.addEventListener("click",n)}),[]),Object(m.jsxs)("div",{id:"drum-display",children:[Object(m.jsx)("div",{id:"display",children:t}),Object(m.jsx)("div",{id:"power-btn",children:Object(m.jsx)("div",{id:"switch"})}),Object(m.jsx)("div",{children:Object(m.jsx)("input",{id:"volume",type:"range",min:0,max:1,value:d,step:.05,onChange:function(e){return r(e.target.value)}})})]})},l=(c(11),s.a.createContext()),b=s.a.createContext();var p=function(){var e=Object(a.useState)(!0),t=Object(n.a)(e,2),c=t[0],s=t[1],d=Object(a.useState)(""),r=Object(n.a)(d,2),o=r[0],p=r[1],j=Object(a.useState)(.7),y=Object(n.a)(j,2),f=y[0],x=y[1];return Object(m.jsx)("div",{id:"drum-machine",children:Object(m.jsx)(l.Provider,{value:{power:c,setPower:s},children:Object(m.jsxs)(b.Provider,{value:{volume:f,setVolume:x},children:[Object(m.jsx)(u,{setText:p}),Object(m.jsx)(i,{text:o})]})})})};r.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.a40bf27a.chunk.js.map