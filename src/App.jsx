import './App.css'
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

function App() {
  
  const [display, setDisplay] = useState('');

  const audioRefs = {
    Q: useRef(null),
    W: useRef(null),
    E: useRef(null),
    A: useRef(null),
    S: useRef(null),
    D: useRef(null),
    Z: useRef(null),
    X: useRef(null),
    C: useRef(null),
  };

  const handleClick = (e) => {
    const audio = e.target.querySelector('audio');
    const displayText = e.target.id;
    audio.play();
    setDisplay(displayText);
  }

  const handleKeyDown = (e) => {
    switch(e.key.toUpperCase()) {
      case 'Q':
      case 'W':
      case 'E':
      case 'A':
      case 'S':
      case 'D':
      case 'Z':
      case 'X':
      case 'C':
        audioRefs[e.key.toUpperCase()].current.play();
        setDisplay(document.getElementById(e.key.toUpperCase()).parentNode.id);
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [])

  return (
    <div id="drum-machine">
      <h1 id="heading">Drum Machine</h1>
      <p id='display'>{display}</p>
      <div id="wrapper">
        <div className='drum-pad' id='Heater-1' onClick={handleClick}>Q
          <audio className='clip' id='Q' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' ref={audioRefs.Q}></audio>
        </div>
        <div className='drum-pad' id='Heater-2'  onClick={handleClick}>W
          <audio className='clip' id='W' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' ref={audioRefs.W}></audio>
        </div>
        <div className='drum-pad' id='Heater-3'  onClick={handleClick}>E
          <audio className="clip" id='E' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' ref={audioRefs.E}></audio>
        </div>
        <div className='drum-pad' id='Heater-4' onClick={handleClick}>A
          <audio className="clip" id='A' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' ref={audioRefs.A}></audio>
        </div>
        <div className='drum-pad' id='Clap' onClick={handleClick}>S
          <audio className="clip" id='S' src='https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' ref={audioRefs.S}></audio>
        </div>
        <div className='drum-pad' id='Open-HH' onClick={handleClick}>D
          <audio className="clip" id='D' src='https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' ref={audioRefs.D}></audio>
        </div>
        <div className='drum-pad' id="Kick-n'-Hat" onClick={handleClick}>Z
          <audio className="clip" id="Z" src='https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' ref={audioRefs.Z}></audio>
        </div>
        <div className='drum-pad' id='Kick' onClick={handleClick}>X
          <audio className="clip" id='X' src='https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' ref={audioRefs.X}></audio>
        </div>
        <div className='drum-pad' id='Closed-HH' onClick={handleClick}>C
          <audio className="clip" id='C' src='https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' ref={audioRefs.C}></audio>
        </div>
      </div>
    </div>
  )
}

export default App
