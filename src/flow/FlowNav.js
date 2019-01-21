import React from 'react';

import PromptStyles from './PromptStyles';

const FlowNav = ({ onBack, onResponse }) => (
  <div className={PromptStyles.navButtons}>
    <button onClick={onBack}>
      <i style={{ marginRight: '10px' }} className="fa fa-arrow-circle-left" />
      Back
    </button>
    <button onClick={onResponse}>
      Continue
      <i style={{ marginLeft: '10px' }} className="fa fa-arrow-circle-right" />
    </button>
  </div>
);

export default FlowNav;