import React from 'react';

const ChoicePrompt = ({ onResponse, title, subtitle, responses }) => (
  <div>
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
    {responses.map(([label, value]) => <button onClick={() => onResponse(value)}>{label}</button>)}
  </div>
);

export default ChoicePrompt;