import React from 'react';

class NameCardPrompt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [React.createRef()]
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.addNameCard = this.addNameCard.bind(this);
  }

  addNameCard() {
    this.setState({
      names: [...this.state.names, React.createRef()],
      totalNames: this.state.totalNames + 1
    });
  }

  onSubmit() {
    this.props.onResponse(this.state.names.map(ref => ref.current.value));
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
        <button onClick={this.addNameCard}>Add another name</button>
        <button onClick={this.onSubmit}>Save and Continue</button>
        <button onClick={onBack}>
          Back
        </button>
      </div>
    );
  }
}

export default NameCardPrompt;