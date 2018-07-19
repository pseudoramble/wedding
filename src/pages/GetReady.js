import React from 'react';

import Form from './Form';
import Thanks from './Thanks';

class GetReady extends React.Component {
  constructor() {
    super();

    this.state = {
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
        <p>
          Come back here later on to walk through getting ready for the big day!
        </p>

        <p>
          Want to know when this is ready? Subscribe below and we'll email you when this & other updates are done.
        </p>

        <Form onSubscribe={() => this.setState({ submitted: true })} />
      </React.Fragment>
    );
  }
}

export default GetReady;