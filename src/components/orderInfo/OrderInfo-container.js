import React, { useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: (state.count === 0) ? state.count : state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter(props) {
  const [state, dispatch] = useReducer(reducer, { count: 1 });
  const countDOM = (
    <div className={props.cls}>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );

  return [state.count, countDOM];
}

export { Counter };