import React from 'react';

import { Link } from 'react-router-dom';

import AmazonLogo from '../assets/amazon-logo.jpg';
import ContentStyles from './Content.css';

export default () => (
  <React.Fragment>
    <h1>Registry</h1>

    <p>
      First, we want to emphasis that a gift is <span style={{ fontStyle: "italic"}}>completely optional</span>. 
      Your presence at our wedding is the best gift we could ask for,
      and we mean that in the least cliché way possible!
    </p>

    <div>
      <h2>Our Charities</h2>
      <p>Consider donating to one of our regular charities.</p>
      <div className={ContentStyles.giftOptions}>
        <div>
          <a href="https://www.blueprintregistry.com/registry/swain-wedding-registry-5-11-2019?gift=3798135">
            <img
              className={ContentStyles.giftOptionsImg}
              src="https://bpr-prod.s3.amazonaws.com/thumbs/bpr5c56ed93341b5_412x412.jpg"
              alt="ALS Association">
            </img>
          </a>
        </div>
        <div>
          <a href="https://www.blueprintregistry.com/registry/swain-wedding-registry-5-11-2019?gift=3798142">
            <img className={ContentStyles.giftOptionsImg} src="https://bpr-prod.s3.amazonaws.com/thumbs/bpr5c56efa3a67eb_412x412.jpg" alt="P.A.W.S Project Foundation"></img>
          </a>
        </div>
        <div>
          <a href="https://www.blueprintregistry.com/registry/swain-wedding-registry-5-11-2019?gift=3798173">
            <img className={ContentStyles.giftOptionsImg} src="https://bpr-prod.s3.amazonaws.com/thumbs/bpr5c56f322c8b45_412x412.jpg" alt="American Cancer Society"></img>
          </a>
        </div>
      </div>
    </div>

    <div>
      <h2>Gift Registry</h2>
      <div className={ContentStyles.giftOptions}>
        <a href="https://www.amazon.com/wedding/kerry-white-doug-swain-wallingford-may-2019/registry/1DW31IA7IUYKU">
          <img className={ContentStyles.giftOptionsImg} src="https://d1.awsstatic.com/logos/600x400_logos/600x400_Amazon_Logo.b66201cfebe02db69bcc969016ca59a42e6c7072.png" alt="Amazon"></img>
        </a>
      </div>
    </div>
  </React.Fragment>
)