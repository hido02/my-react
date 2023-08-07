import React, { useState } from 'react';

function App() {
  function Example() {
    return (
      <input
        onFocus={(e) => {
          console.log('Focused on input');
        }}
        placeholder="onFocus is triggered when you click this input."
      />
    )
  }
  
  return (
    <>
    <Example />
    </>
  );
}

export default App;
