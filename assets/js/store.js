/* jshint -W138 */
/* Added b/c of React/Redux pattern */
import React from 'react';
import ReactDOM from 'react-dom';

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counter = (state=0, action) => {
  switch (action.type) {
    case INCREMENT :
      console.log(INCREMENT);
      return state+1;
    case DECREMENT :
      return state-1;
    default:
      return state;
  }
};

export default counter;
