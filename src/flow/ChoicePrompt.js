import React from 'react';

import FlowNav from './FlowNav';

import PromptStyles from './PromptStyles';

const ChoicePrompt = ({ onBack, onResponse, title, subtitle, responses }) => (
  <div>
    <h1>{title}</h1>
    {subtitle && <p>{subtitle}</p>}
    <div className={PromptStyles['choice-buttons']}>
      {
        responses.map(
          ([label, value], i) => 
            <button
              className={`${PromptStyles.promptButton} choice-option-${i}-${value}`}
              onClick={() => onResponse(value)}
            >
              {label}
            </button>
        )
      }
    </div>
    <FlowNav onBack={onBack} hideContinue />
  </div>
);

export default ChoicePrompt;