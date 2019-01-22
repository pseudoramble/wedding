import React from 'react';

import FlowNav from './FlowNav';

import PromptStyles from './PromptStyles';

class NameCardPrompt extends React.Component {
  constructor(props) {
    super(props);

    const totalNames = props.totalGuests + 1;

    this.state = {
      names: [...Array(totalNames).keys()].map(() => React.createRef()),
      totalNames
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    this.props.onResponse(
      this.state.names
        .filter(ref => !!ref.current.value)
        .map(ref => ref.current.value)
    );
  }

  render() {
    const { onBack, title, subtitle } = this.props;

    return (
      <div>
        <div>
          <h3 className={PromptStyles.title}>{title}</h3>
          {subtitle && <p className={PromptStyles.subtitle}>{subtitle}</p>}
        </div>
        <div class={PromptStyles['nameCard-inputs']}>
          {
            this.state.names.map((ref, i) => (
              <input
                type="text"
                name="nameOnCard"
                ref={ref}
                placeholder="Name for card"
                key={`nameCard-${i}`}
              />
            ))
          }
        </div>
        <FlowNav onBack={onBack} onResponse={this.onSubmit} />
      </div>
    );
  }
}

export default NameCardPrompt;