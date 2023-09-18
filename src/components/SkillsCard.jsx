import React from "react";

const SkillsCard = ({ title, icon, text }) => {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <div className="mt-2 text-slate-500">{text}</div>
    </article>
  );
};

export default SkillsCard;
