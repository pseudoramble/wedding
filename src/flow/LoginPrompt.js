import React from 'react';

class LoginPrompt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginValid: true
    };

    this.usernameRef = React.createRef();
    this.usercodeRef = React.createRef();

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const username = this.usernameRef.current.value;
    const usercode = this.usercodeRef.current.value;

    fetch('http://127.0.0.1:3141/authenticate', {
      method: 'POST',
      body: JSON.stringify({ username, usercode }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(resp => {
      if (!resp.ok) {
        this.setState({
          loginValid: false
        });
      } else {
        this.props.onResponse();
      }
    }).catch(err => {
      console.error('Unable to login for an unexpected reason');
    });
  }

  render() {
    const { onBack, title, subtitle } = this.props;

    return (
      <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {!this.state.loginValid && <p style={{ color: 'red' }}>INVALID LOGIN</p>}
        <input 
          ref={this.usernameRef}
          type='text'
          name='username'
          placeholder='Username'
        >
        </input>
        <input
          ref={this.usercodeRef}
          type='password'
          name='usercode'
          placeholder='Passcode'
        >
        </input>
        <button onClick={this.onSubmit}>Login</button>
        <button onClick={onBack}>
          Back
        </button>
      </div>
    );
  }
}

export default LoginPrompt;