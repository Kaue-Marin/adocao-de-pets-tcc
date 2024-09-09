import React from "react";

export default function MissionStatement({
  title,
  description,
  subDescription,
}) {
  return (
    <div className="assunto-pertinente">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{subDescription}</p>
    </div>
  );
}
