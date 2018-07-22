import React from 'react';

import PromptStyles from './PromptStyles';

const FinishedPrompt = ({ attending }) => (
  <div>
    <h3>You're all set!</h3>
    { 
      attending ?
        <p>
          You are now set up for the big day, and we couldn't be happier!
          If you feel like anything was missing, or something isn't right, please let us know!
        </p>
      : 
        <p>
          We are sorry you cannot make it. Thanks for letting us know!
        </p>
    }
  </div>
);

export default FinishedPrompt;