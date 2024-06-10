import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function Avatar() {
  return (
    <img className="avatar" src="fredrick-coble.jpg" alt="Fredrick Coble" />
  );
}
function Intro() {
  return (
    <div>
      <h1>Fredrick Coble</h1>
      <p>
        Full-stack developer at the University of West Georgia, Canary Insurance
        Solutions, and contract worker.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="😀" color="blue" />
      <Skill skill="Vue.js" emoji="😁" color="red" />
      <Skill skill="HTML+CSS" emoji="😮" color="yellow" />
      <Skill skill="WordPress" emoji="😊" color="orange" />
      <Skill skill="PHP+MySQL" emoji="😎" color="green" />
      <Skill skill="Oracle DB" emoji="😋" color="pink" />
      <Skill skill="Omni CMS" emoji="😉" color="gray" />
      <Skill skill="Linux" emoji="🤗" color="purple" />
      <Skill skill="Git" emoji="🤩" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill">
      <span style={{ backgroundColor: props.color }}>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
