import React, { useState, useEffect } from 'react';

export default function Hooks() {
  const [count, setCount] = useState(0);

  //componentDidMount and componentDidUpdate
  //it will fired on mount and update when state is updated
  useEffect(() => {
    console.log('Mount and update');
  });

  //componentDidMount
  //it will fired only on mounting
  useEffect(() => {
    console.log('Mount');
  }, []);

  //componentWillUnmount
  //it will fired when component unmounted means removed

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <div>
        <button onClick={incrementCount}>Increment</button>
      </div>
    </div>
  );
}
