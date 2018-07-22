import React from 'react';

const InfoPrompt = ({ onBack, onResponse, title, subtitle, responses }) => (
  <div>
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
    <button onClick={() => onResponse('')}>
      {responses[0]}
    </button>
    <button onClick={onBack}>
      Back
    </button>
  </div>
);

export default InfoPrompt;