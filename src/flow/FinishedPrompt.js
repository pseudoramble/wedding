import React from 'react';

import { Link } from 'react-router-dom';

import PromptStyles from './PromptStyles';

const FinishedPrompt = ({ attending }) => (
  <div>
    <h3>You're all set!</h3>
    { 
      attending ?
        <div>
          <p>
            Thanks for letting us know you're coming! We couldn't be happier!
          </p>
          <p>
            Have you found a place to stay yet? <Link to="/wedding/lodging">We have several hotel options</Link> set
            up nearby the venue.
          </p>
          <p>
            If you think anything was missing, or something isn't right, please let us know!
          </p>
        </div>
      : 
        <p>
          We are sorry you cannot make it. Thanks for letting us know!
        </p>
    }
  </div>
);

export default FinishedPrompt;