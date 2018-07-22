import React from 'react';

import Form from './Form';
import Thanks from './Thanks';
import Flow from '../flow/Flow';

class GetReady extends React.Component {
  constructor() {
    super();

    this.state = {
      isPartying: false,
      submitted: false
    }
  }

  render() {
    if (this.state.submitted) {
      return <Thanks />;
    }

    return (
      <React.Fragment>
        <h1>Let's Get Ready!</h1>

        <Flow />
      </React.Fragment>
    );
  }
}

export default GetReady;