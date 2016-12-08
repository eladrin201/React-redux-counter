import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import DecrementButton from './DecrementButton.jsx';
import IncrementButton from './IncrementButton.jsx';
import Display from './Display.jsx';
import CounterStore from './store.js';

const store = createStore(CounterStore);
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const render = () => {
  const App = (
    <Provider store={store}>
      <div>
        <IncrementButton onclick={()=>{store.dispatch({type:'INCREMENT'})}} />
        <Display displayValue={store.getState()} />
        <DecrementButton onclick={()=>{store.dispatch({type:'DECREMENT'})}} />
      </div>
    </Provider>
  );

  ReactDOM.render(App, document.getElementById('counter'));
}

store.subscribe(render);
render();
