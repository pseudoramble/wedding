import React from 'react';

import buttonIcon from './assets/vt.png';

const App = (props) => (
  <div className="wrapper">
    <div className="ourNames">
      <span>Kerry</span> <span className="amper">&</span> <span>Doug</span>
    </div>
    <div className="enter">
      <button className="enter-btn" onClick={() => console.info('click')}>
        <span>Coming Soon!</span>
        <span className="enter-btn-icon">
          <img src={buttonIcon} />
        </span>
      </button>
    </div>
  </div>
);

export default App;