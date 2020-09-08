import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [counter, setCounter] = useState(1);

  return (
    <h1 onClick={ () => setCounter(counter + 1)}>상태</h1>
  )
}