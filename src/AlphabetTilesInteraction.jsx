import React, { useState } from 'react';
import './App.css';

function AlphabetTilesInteraction() {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [outputString, setOutputString] = useState('');

  const handleClick = (letter) => {
    setOutputString((prevString) => {
      const newString = prevString + letter;
      const stringWithoutConsecutive = newString.replace(/(.)\1{2,}/g, '_');
      return stringWithoutConsecutive;
    });
  };

  return (
    <div className="body">
      <h1>Alphabet Tile Interaction</h1>
      <div className="grid">
        {alphabet.split('').map((letter) => (
          <div
            key={letter}
            className="tile"
            onClick={() => handleClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div id="outputString" className="outputContainer">
        Output: <div className="outputBox">{outputString}</div>
      </div>
    </div>
  );
}

export default AlphabetTilesInteraction;
