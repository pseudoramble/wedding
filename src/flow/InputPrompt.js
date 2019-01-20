import React from 'react';

const InputPrompt = ({ onBack, onResponse, title, subtitle, type }) => {
  const inputRef = React.createRef();

  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      {type === 'text' && <input type='text' ref={inputRef} />}
      {type === 'textarea' && <textarea ref={inputRef} />}
      
      <button
        onClick={() => onResponse(inputRef.current.value)}>
        Next
      </button>
      
      <button onClick={onBack}>
        Back
      </button>
    </div>
  );
}

export default InputPrompt;