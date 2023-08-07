import React, { useState } from 'react';

function YourComponent() {
  const [words, setWords] = useState([]);

  const handleClick = () => {
    setWords(prevWords => [...prevWords, 'marklar']);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Word</button>
      <ul>
        {words.map((word, index) => (
          <li key={index}>{word}</li>
        ))}
      </ul>
    </div>
  );
}

export default YourComponent;
