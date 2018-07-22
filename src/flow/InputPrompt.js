import React from 'react';

const InputPrompt = ({ title, subtitle }) => (
  <div>
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
    {responses.map(([label, value]) => <button>{label}</button>)}
    <button>Next</button>
  </div>
);

export default InputPrompt;