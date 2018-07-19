import React from 'react';
import request from 'superagent';

import FormStyles from './Form.css';

const encode = data => 
  Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      'form-name': 'subscribeUpdates'
    };
  }

  subscribe(e) {
    const data = encode(this.state);

    request
      .post('/')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .redirects(0)
      .send(data)
      .then(this.props.onSubscribe)
      .catch(err => {
        console.error('failure during subscribe submission: ', err);
      });
    
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={e => this.subscribe(e)} name="subscribeUpdates" netlify netlify-honeypot="your-secret-email">
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
}

export default Form;