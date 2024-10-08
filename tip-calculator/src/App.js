import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill ] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill}/>
      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>How did you like the service?</SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>How did your friend like the service?</SelectPercentage >
      <Output bill={bill} tip={tip}/>
      <Reset />
  </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type='text' placeholder='Bill value' value={bill} onChange={(e)=>onSetBill(Number(e.target.value))}/>
    </div>
  );
}

//Anything between two component tags gets passed via children
function SelectPercentage({ children, percentage, onSelect}) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e=>onSelect(Number(e.target.value)))}>
        <option value='0'>Dissatified (0%)</option>
        <option value='5'>It was okay (5%)</option>
        <option value='10'>It was good (10%)</option>
        <option value='20'>Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Output({bill, tip}) {
  return <h3>You pay X (${bill + tip} + ${tip} tip)</h3>
}

function Reset() {
  <button>Reset</button>
}