import React from 'react';

const ChoicePrompt = ({ title, subtitle, responses }) => (
  <div>
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
    {responses.map(([label, value]) => <button>{label}</button>)}
  </div>
);

export default ChoicePrompt;