import { useState } from "react";

const messages = ["Learn React", "Apply for jobs", "Invest your new income"];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  )
}

function Steps() {
  //userState is what we call a hook
  //hooks start with the word 'user' ergo "use something"
  //react hooks must be called on the top level of a function
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true);
  
  //handle word use is standard in React development
  function handlePrevious() {
    if  (step > 1) setStep((s) => s -1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  return (
    //React fragment
    <div> 
    <button className="close" onClick={() => setIsOpen(!isOpen)}>&times;</button>
    {isOpen && (
 
      <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <Button textColor='#fff' bgColor='#7950f2' onClick={handlePrevious}>👈 Previous</Button>
        <Button textColor='#fff' bgColor='#7950f2' onClick={handleNext}>Next 👉</Button>
      </div>
    </div>
        )
  }
    </div>
  );
}

function Button({textColor, bgColor, onClick, children}) {
  //any if the JSX hsa closing tag, any jsx in between the opening
  //and the closing tag can be rendered by passing in the reserved work
  //children as a prop, and rendered with the reserved word children
  return (
    <button
    style={{ backgroundColor: bgColor, color: textColor }}
    onClick={onClick}
    >
      {children}
  </button>
  );
}