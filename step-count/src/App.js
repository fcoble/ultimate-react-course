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


  function handleReset() {
    setCount(0);
    setStep(1)
  }

  const date = new Date();
  date.setDate(date.getDate() + count);

  return <div>
    <div>
      <div>
        <input type="range" min="0" max="10" value={step} onChange={e=>setStep(Number(e.target.value))}/>
                  <span>Step: {step}</span>
      </div>
      <div>

        <button onClick={() => setCount(c=>c-step)}>-</button>
        <input type="text" value={count} onChange={e=>setCount(Number(e.target.value))} />
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
      {(count !== 0 || step !== 1) ?
        <div>
          <button onClick={handleReset}>Reset</button>
        </div> : null}
      
    </div>
  </div>
}

export default App;
