import React from 'react';

import Form from './Form';
import Thanks from './Thanks';

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
        <p>
          Sorry, this isn't quite ready yet. So for now, <a href="#" onClick={() => this.setState({ isPartying: !this.state.isPartying })}>channel the party parrot</a>.
        </p>

        <p>
          { this.state.isPartying && 
              <img src="https://appstickers-cdn.appadvice.com/1158454115/819397787/4534b0f0c56c20c70a08a4f81acc1153-3.gif" />
          }
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