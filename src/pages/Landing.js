import React from 'react';

import { Link } from 'react-router-dom';

import landingStyles from './Landing.css';

import buttonIcon from '../assets/vt.png';

export default () => (
  <div className={landingStyles.wrapper}>
    <div className={landingStyles.ourNames}>
      <span>Kerry</span> <span className={landingStyles.amper}>&</span> <span>Doug</span>
    </div>
    <div className={landingStyles.enter}>
      <Link className={landingStyles.link} to="/wedding/the-weekend">
        <button className={landingStyles['enter-btn']}>
          <span>Get Ready!</span>
          <span className={landingStyles['enter-btn-icon']}>
            <img src={buttonIcon} />
          </span>
        </button>
      </Link>
    </div>
  </div>
);