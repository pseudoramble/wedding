import React from 'react';

import { Link } from 'react-router-dom';

import ContentStyles from './Content.css';

export default () => (
  <React.Fragment>
    <h1>More Info</h1>

    <p>
      While we're not dancing, eating, and drinking the day away, here are some 
      activities you can do in the neighboring areas:
    </p>

    <ul>
      <li>
        <a href="https://www.alltrails.com/trail/us/vermont/white-rocks-recreation-area-trail-via-long-trail-appalachian-trail">Hike White Rocks in Wallingford</a>
      </li>
      <li>
        <a href="http://www.newenglandwaterfalls.com/vt-clarendongorge-upperfalls.html">Hike over the Clarendon Gorge Suspension Bridge to check out the Rutland Airport Overlook</a>
      </li>
      <li>
        <a href="https://rutlandbeerworks.wixsite.com/hopnmoose">Check out Hop’n Moose Brewing in Rutland</a>
      </li>
      <li>
        <a href="http://manchesterdesigneroutlets.com/our-stores#">Shop the Manchester Outlets</a>
      </li>
      <li>
        <a href="https://www.northshire.com/manchester-store">Visit the Northshire Bookstore in Manchester</a>
      </li>
      <li>
        <a href="https://www.vermontcountrystore.com/visit-us">Visit the Vermont Country Store in Weston</a>
      </li>
      <li>
        <a href="http://longtrail.com/visit-us">Visit Long Trail Brewery in Bridgewater</a>
      </li>
    </ul>
  </React.Fragment>
)