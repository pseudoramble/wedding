import React from 'react';

import { Link } from 'react-router-dom';

export default () => (
  <React.Fragment>
    <h1>The Wedding Weekend</h1>
    <p>
      <span>Join us on </span>
      <strong>May 11th, 2019</strong>
      <span> at the </span>
      <a target="_blank" href="https://goo.gl/maps/1ynWMCCAymy">
        <strong>
          Wallingford Lodge, Wallingford, VT
        </strong>
      </a>
      .
    </p>

    <p>
      For our wedding, we want to <strong>make unforgettable memories with all of our loved ones </strong>
      and of course <strong>have a truck-load of fun!</strong> So be ready for a wedding made for fun, with accents
      of tradition.
    </p>

    <h3>On Friday</h3>
    <p>
      If you are arriving Friday, we recommend you check out <Link to={"/wedding/more-info"}>some nearby activities</Link> in the Rutland area.
      <strong>The bride and groom will be at the Hop'n Moose around 9:00pm</strong> for a beer. If you're in town and feeling up to it, please feel free to join us! 
    </p>

    <h3>On Saturday</h3>
    <p>
      We will first have a brief ceremony <strong>starting at 4:00pm</strong>. 
      The cocktail hour and reception will follow immediately at the same location.
    </p>
    <p>
      The reception and cocktail hour will include drinks, lawn games, music,
       and dancing. Find what's most fun for you at any point during the
       reception and enjoy yourself!
    </p>

    <p>
      For dinner and refreshments we plan on having everything you'll need, 
      including beer, wine, and food. Catering will be provided by Open Hearth Pizza,
      including pizza (of course) along with salad and hor d'euvres.
    </p>

    <p>
      <img 
        src="https://static1.squarespace.com/static/55ccd086e4b01a54c9058107/5ad87c7eaa4a996c2d618e8f/5ad87cc2758d464041df2bdb/1524479984315/catering.JPG?format=750w"
        width="100%"
      />
    </p>
    
    <h3>On Sunday</h3>
    <p>
      After the event, come back to the site of the ceremony and reception for
      coffee and doughnuts. It will be one last chance to catch up and say our
      goodbyes at the end of a wonderful weekend.
    </p>
  </React.Fragment>
)