import React from 'react';

import FormStyles from './Form.css';

export default () => (
  <form name="subscribeUpdates" method="POST" action="/wedding/thanks" netlify netlify-honeypot="your-secret-email">
    <input type="hidden" name="form-name" value="subscribeUpdates" />
    <div className={FormStyles.formWrapper}>
      <span className={FormStyles.inputs}>
        <label>Email</label>
        <input type="email" name="email" placeholder="you@somewhere.com" />
      </span>
      <button className={FormStyles.submit} type="submit">Subscribe</button>
    </div>
  </form>
);