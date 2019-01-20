import React from 'react';

const url = 'http://localhost:3141';

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

    fetch(`${url}/authenticate`, {
      method: 'POST',
      body: JSON.stringify({ username, usercode }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(resp => {
      if (!resp.ok) {
        this.setState({
          loginValid: false
        });
      } else {
        return resp.json();
      }
    })
    .then(payload => {
      localStorage.setItem('token', payload.token);
    })
    .then(() => 
      fetch(
        `${url}/preregistration`,
        {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          }
        }
      ).then(resp => resp.json())
    )
    .then(payload => {
      localStorage.setItem('guests', payload.guests);
      localStorage.setItem('kids', payload.kids);
      this.props.onResponse(payload);
    })
    .catch(err => {
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