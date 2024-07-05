import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "Oracle",
    level: "Advanced",
    color: "#DFFF00",
  },
  {
    skill: "PHP",
    level: "Advanced",
    color: "#FFBF00",
  },
  {
    skill: "Javascript",
    level: "Advanced",
    color: "#FF7F50",
  },
  {
    skill: "Linux",
    level: "Advanced",
    color: "#DE3163",
  },
  {
    skill: "HTML",
    level: "Advanced",
    color: "#9FE2BF",
  },
  {
    skill: "CSS",
    level: "Advanced",
    color: "#40E0D0",
  },
  {
    skill: "MySQL",
    level: "Advanced",
    color: "#6495ED",
  },
];

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
      {skills.map(skill=><Skill skill={skill.skill} color={skill.color} level={skill.level} />)}

    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill">
      <span>{skill}</span>
      <span>{
        level === 'beginner' && "🤪"
      }{
        level === 'intermediate' && "😉"
      }{
        level === 'advanced' && "😇"
      }</span>
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
