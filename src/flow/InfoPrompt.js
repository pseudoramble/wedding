import React from 'react';

const InfoPrompt = ({ title, subtitle, responses, onResponse }) => (
  <div>
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
    <button onClick={onResponse('')}>
      {responses[0]}
    </button>
  </div>
);

export default InfoPrompt;