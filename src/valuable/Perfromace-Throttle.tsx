import React, { useState, useRef } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const lastRun = useRef(Date.now());

  const throttleFunction = (callback: () => void, limit: number) => {
    if (Date.now() - lastRun.current >= limit) {
      callback();
      lastRun.current = Date.now();
    }
  };

  const incrementCounter = () => {
    throttleFunction(() => setCount(prevCount => prevCount + 1), 5000);
  };

  return (
    <div>
      <p>Clicked {count} times</p>
      <button onClick={incrementCounter}>Click me</button>
    </div>
  );
};

export default App;

// create json object for country state and city data
