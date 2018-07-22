import React from 'react';

const InputPrompt = ({ onResponse, title, subtitle, type }) => {
  const inputRef = React.createRef();

  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
      {type === 'text' && <input type='text' ref={inputRef} />}
      <button onClick={() => onResponse(inputRef.current.value)}>Next</button>
    </div>
  );
}

export default InputPrompt;