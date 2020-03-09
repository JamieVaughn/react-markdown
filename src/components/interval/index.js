import React, { useState, useEffect, useRef } from "react";

export default function Counter() {
  const [delay, setDelay] = useState(1000);
  const [count, setCount] = useState(0);

  // Increment the counter.
  useInterval(() => {
    setCount(count + 1);
  }, delay);

  // Make it faster every second!
  useInterval(() => {
    if (delay > 10) {
      setDelay(delay - 5);
    }
  }, 1000);

  function handleReset() {
    setDelay(prev => {

        return prev + 1
    });
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <h4>Delay: {delay}</h4>
      <button onClick={handleReset}>
        Reset delay
      </button>
    </>
  );
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}
