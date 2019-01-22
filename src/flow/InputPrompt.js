import React from 'react';

import FlowNav from './FlowNav';

import PromptStyles from './PromptStyles';

const InputPrompt = ({ onBack, onResponse, title, subtitle, type }) => {
  const inputRef = React.createRef();

  return (
    <div>
      <div>
        <h3 className={PromptStyles.title}>{title}</h3>
        {subtitle && <p className={PromptStyles.subtitle}>{subtitle}</p>}
      </div>

      <div className={PromptStyles.input}>
        {
          type === 'text' &&
            <input type='text' ref={inputRef} />
        }
        {
          type === 'textarea' &&
            <textarea className={PromptStyles.textArea} ref={inputRef} />
        }
      </div>
      
      <FlowNav 
        onBack={onBack}
        onResponse={() => onResponse(inputRef.current.value)}
      />
    </div>
  );
}

export default InputPrompt;