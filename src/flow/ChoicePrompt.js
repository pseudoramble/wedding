import React from 'react';

const ChoicePrompt = ({ onBack, onResponse, title, subtitle, responses }) => (
  <div>
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
    {responses.map(([label, value]) => <button onClick={() => onResponse(value)}>{label}</button>)}
    <button onClick={onBack}>
      Back
    </button>
  </div>
);

export default ChoicePrompt;