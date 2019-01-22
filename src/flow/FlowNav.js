import React from 'react';

import PromptStyles from './PromptStyles';

const FlowNav = ({ 
  backButtonText = 'Back',
  continueButtonText = 'Continue',
  onBack,
  onResponse
}) => (
  <div className={PromptStyles.navButtons}>
    <button onClick={onBack}>
      <i style={{ marginRight: '10px' }} className="fa fa-arrow-circle-left" />
      {backButtonText || 'Back'}
    </button>
    <button onClick={onResponse}>
      {continueButtonText || 'Continue'}
      <i style={{ marginLeft: '10px' }} className="fa fa-arrow-circle-right" />
    </button>
  </div>
);

export default FlowNav;