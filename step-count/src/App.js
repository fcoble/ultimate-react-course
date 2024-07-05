import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <Counter />

      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return <div>
    <div>
      <div>
        <button onClick={() => setStep(s=>s-1)}>-</button>
          <span>Step: {step}</span>
        <button onClick={() => setStep(s=>s+1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount(c=>c-step)}>-</button>
          <span>Count: {count}</span>
        <button onClick={() => setCount(c=>c+step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0 ? "Today's date is: " : ""}
          {count < 0 ? count + " days in the past is: " : ""}
          {count > 0 ? count + " days from today is: " : ""}
          {date.toDateString()}
        </span>
      </p>

    </div>
  </div>
}

export default App;
