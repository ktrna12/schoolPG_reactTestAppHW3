import React from "react";

const Skill = ({ name, text, percent, key }) => {
  return (
    <div key={key}>
      <h3>{name}</h3>
      <p>{text}</p>
      <p>{percent}%</p>
    </div>
  );
};

export default Skill;
