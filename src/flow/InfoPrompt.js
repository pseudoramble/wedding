import React from 'react';

import FlowNav from './FlowNav';

import PromptStyles from './PromptStyles';

const InfoPrompt = ({ onBack, onResponse, title, subtitle, responses }) => (
  <div>
    <div>
      <h3 className={PromptStyles.title}>{title}</h3>
      {subtitle && <p className={PromptStyles.subtitle}>{subtitle}</p>}
    </div>

    <FlowNav 
      onBack={onBack}
      onResponse={() => onResponse('')}
      continueButtonText={responses[0]}
    />
  </div>
);

export default InfoPrompt;