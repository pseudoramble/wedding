import React from 'react';
import superagent from 'superagent';

import Thanks from './Thanks';

import FormStyles from './Form.css';


const encode = data => 
  Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      submitted: false
    };
  }

  subscribe(e) {
    const data = encode({
      'email': this.state.email,
      'form-name': 'subscribeUpdates'
    });

    request
      .post('/')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .redirects(0)
      .send(data)
      .then(() => {
        console.info('submitted!');
        this.setState({ submitted: true });
      })
      .catch(err => {
        alert(error);
      });
    
    e.preventDefault();
  }

  renderForm() {
    return (
      <form onSubmit={this.subscribe.bind(this)} name="subscribeUpdates" netlify netlify-honeypot="your-secret-email">
        <input type="hidden" name="form-name" value="subscribeUpdates" />
        <div className={FormStyles.formWrapper}>
          <span className={FormStyles.inputs}>
            <label>Email</label>
            <input onChange={e => this.setState({ 'email': e.target.value })} type="email" name="email" placeholder="you@somewhere.com" />
          </span>
          <button className={FormStyles.submit} type="submit">Subscribe</button>
        </div>
      </form>
    );
  }

  render() {
    return !this.state.submitted ? this.renderForm() : <Thanks />
  }
}

export default Form;