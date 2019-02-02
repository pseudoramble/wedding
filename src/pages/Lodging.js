import React from 'react';

import { Link } from 'react-router-dom';

import ContentStyles from './Content.css';

export default () => (
  <React.Fragment>
    <h1>Lodging</h1>

    <p>
      The ceremony and reception are taking place at the <a target="_blank" href="https://goo.gl/maps/1ynWMCCAymy">Wallingford Lodge. 386 Boys Camp Rd Wallingford, VT 05773</a>.
      This is about 10 minutes outside of Rutland, VT.
    </p>
    <p>
      We have room blocks for three hotels in Rutland for you to stay at:
    </p>

    <div className={ContentStyles.lodgingOptions}>
      <div>
        <strong>Hampton Inn</strong>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.0766520341817!2d-72.96992031886988!3d43.58411970505765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e024bf8a437d29%3A0x638a86e4932d051f!2s47+Farrell+Road%2C+Rutland%2C+VT+05701!5e0!3m2!1sen!2sus!4v1549127337547"
            className={ContentStyles.lodgingOptionsMap}
            frameBorder="0"
            style={{ border:0 }}
            allowFullScreen>
          </iframe>
        </div>
        <div className={ContentStyles.lodgingOptionsInfo}>
          <div>$125/night + tax</div>
          <div>
            <a target="_blank" href="https://secure3.hilton.com/en_US/hp/reservation/book.htm?inputModule=HOTEL&ctyhocn=RTLHHHX&spec_plan=CHHWSW&arrival=20190510&departure=20190512&cid=OM,WW,HILTONLINK,EN,DirectLink&fromId=HILTONLINKDIRECT">
              Book Online
            </a> or call <a href="1-802-773-9066">802-773-9066</a>.
          </div>
          <div>Mention "White/Swain Wedding" (WSW)</div>
        </div>
      </div>

      <div>
        <strong>Comfort Inn</strong>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.0766520341817!2d-72.96992031886988!3d43.58411970505765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e024f3200d91ab%3A0x66b44bdc9cb5347a!2s19+Allen+St%2C+Rutland%2C+VT+05701!5e0!3m2!1sen!2sus!4v1549128053631"
            className={ContentStyles.lodgingOptionsMap}
            frameBorder="0"
            style={{ border:0 }}
            allowFullScreen
          >
          </iframe>
        </div>
        <div className={ContentStyles.lodgingOptionsInfo}>
          <div>$85.00/night + tax</div>
          <div>
            <a target="_blank" href="https://www.choicehotels.com/reservations/groups/nr33z9?source=EMCHGGI&checkInDate=2019-05-10&checkOutDate=2019-05-12&ratePlanCode=BONVXC">
              Book Online
            </a> or call <a href="tel:1-802-775-2200">802-775-2200</a>.
          </div>
          <div>Mention "Kerry & Doug Swain's Wedding"</div>
        </div>
      </div>

      <div>
        <strong>Days Inn</strong>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1215.123939508836!2d-72.96769858454984!3d43.584298489261506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e0241a084d6889%3A0x2e9274b2051a8920!2sDays+Inn+by+Wyndham+Rutland%2FKillington+Area!5e0!3m2!1sen!2sus!4v1549128179128"
            className={ContentStyles.lodgingOptionsMap}
            frameBorder="0"
            style={{ border:0 }}
            allowFullScreen
          >
          </iframe>
        </div>
        <div className={ContentStyles.lodgingOptionsInfo}>
          <div>$76.49/night + tax - 1 King Bed</div>
          <div>$84.99/night + tax - 2 Queen Beds</div>
          <div>
            Call <a href="tel:1-802-282-4985">802-282-4985</a>.
          </div>
          <div>Mention "Kerry and Doug's Wedding"</div>
        </div>
      </div>
    </div>

    <p>
      If you're looking for a house for the weekend, there are <a target="_blank" href="https://www.airbnb.com/s/homes?refinement_paths%5B%5D=%2Fhomes&query=Wallingford%2C%20VT%2C%20United%20States&checkin=2019-05-10&checkout=2019-05-12&toddlers=0&allow_override%5B%5D=&s_tag=mc95cK2K">some Airbnb options available</a> in the Rutland/Wallingford area as well.
    </p>

    <p>
      If these options are not working for you, reach out and we'll see what we can do.  
    </p>
  </React.Fragment>
)