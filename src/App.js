import React from 'react';
import './index.scss';
import CounterComponent from './CounterComponent'

function App() {
  const [count, SetCount] = React.useState(0);

  const onClickMinus = () => {
    SetCount(count - 1)
  }
  const onClickPlus = () => {
    SetCount(count + 1)
  }

  return (
    <div className="App">
      <div>
        <h2>Counter:</h2>
        <h1>{count}</h1>
        <button onClick={onClickMinus} className="minus">- Minus</button>
        <button onClick={onClickPlus} className="plus">Plus +</button>
      </div>
      {/* <CounterComponent /> */}
    </div>
  );
}

export default App;
