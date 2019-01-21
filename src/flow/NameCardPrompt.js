import React from 'react';

import FlowNav from './FlowNav';

import NameCardPromptStyles from './PromptStyles';

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
        <h2>{title}</h2>
        {subtitle && <p>{subtitle}</p>}
        <div class={NameCardPromptStyles['nameCard-inputs']}>
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