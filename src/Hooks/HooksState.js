import React, { useCallback, useState } from 'react';

function countInital() {
  console.log("run function")
  return 4
}


export default function HooksState() {
  
  //if not used (), run function will run every time onClick
  const [state, setState] = useState({count: 4, theme: 'blue'});
  const count = state.count;
  const theme = state.theme;

  function decrementCount() {
    setState(prevState => {
      return {...prevState, count: prevState.count - 1 }
    })
  }
  
  function incrementCount() {
    setState(prevState => {
      return {...prevState, count: prevState.count + 1 }
    })
  }
  
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}
