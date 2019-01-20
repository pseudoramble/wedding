import React from 'react';

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
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
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
        <button onClick={this.onSubmit}>Save and Continue</button>
        <button onClick={onBack}>
          Back
        </button>
      </div>
    );
  }
}

export default NameCardPrompt;