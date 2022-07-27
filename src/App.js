import React, { useState, useEffect } from 'react';
import Hooks from './components/Hooks';
import './style.css';

export default function App() {
  const [isShow, setShow] = useState(true);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={() => setShow(!isShow)}>Toggle</button>

      {isShow && <Hooks />}
    </div>
  );
}
