import React, { useState, useEffect, useRef } from 'react';

export default function Hooks() {
  const [count, setCount] = useState(0);
  const isUpdate = useRef(false);

  //componentDidMount and componentDidUpdate
  //it will fired on mount and update when state is updated
  useEffect(() => {
    console.log(' fired on mount and update');
  });

  // //componentDidMount
  // //it will fired only on mounting
  useEffect(() => {
    console.log('fired only on mounting');
  }, []);

  // useEffect(() => {
  //   console.log('fired only on mounting and count is updated');
  // }, [count]);

  //componentDidUpdate
  //it will fired only on update
  useEffect(() => {
    if (isUpdate.current) {
      console.log('fired only on update');
    } else {
      isUpdate.current = true;
    }
  });

  //componentWillUnmount and componentDidUpdate
  //it will fired when component unmounted means removed and updated
  useEffect(() => {
    return function () {
      console.log('fired unmounted and updated');
    };
  });

  //componentWillUnmount
  //it will fired when component unmounted means removed
  useEffect(() => {
    return function () {
      console.log('only on unmounted');
    };
  }, []);

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
