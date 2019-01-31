import React from 'react';

import FlowNav from './FlowNav';

import PromptStyles from './PromptStyles';

const url = 'https://kerryanddoug-api.herokuapp.com';

class LoginPrompt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loginValid: true
    };

    this.usercodeRef = React.createRef();

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    const usercode = this.usercodeRef.current.value;

    fetch(`${url}/authenticate`, {
      method: 'POST',
      body: JSON.stringify({ usercode }),
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
        <div>
          <h3 className={PromptStyles.title}>{title}</h3>
          {subtitle && <p className={PromptStyles.subtitle}>{subtitle}</p>}
          {
            !this.state.loginValid && 
            <p style={{ color: 'red', fontWeight: '800' }}>
              We were not able to log you in. Double check your PIN and let us know if problems persist.
            </p>
          }
        </div>
        <div class={PromptStyles['login-inputs']}>
          <input
            ref={this.usercodeRef}
            type='text'
            name='usercode'
            placeholder='Passcode'
          >
          </input>
        </div>
        <FlowNav onBack={onBack} onResponse={this.onSubmit} />
      </div>
    );
  }
}

export default LoginPrompt;