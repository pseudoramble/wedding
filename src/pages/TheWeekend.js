import React from 'react';

import { Link } from 'react-router-dom';

export default () => (
  <React.Fragment>
    <h1>The Wedding Weekend</h1>
    <p>
      <span>Join us on </span>
      <strong>May 11th, 2019</strong>
      <span> in </span>
      <strong>Wallingford, VT</strong>.
    </p>

    <p>
      For our wedding, we want to <strong>make unforgettable memories with all of our loved ones </strong>
      and of course <strong>have a truck-load of fun!</strong> So be ready for a wedding made for fun, with accents
      of tradition throughout the weekend.
    </p>

    <h3>On Friday</h3>
    <p>
      We will be having the rehearsal this evening.
      After the reherseal, we plan on meeting at [some place] at [some time].
      If you are arriving Friday, please feel free to join us at that time for light snacks and drinks.
      This may also be a good time to check out <Link to={"/wedding/more-info"}>some nearby activities</Link> in the Rutland area.
    </p>

    <h3>On Saturday</h3>
    <p>
      We first will have a brief ceremony which <strong>start at 4:00pm</strong>. 
      This will be immediately followed by a cocktail hour and reception at the same location.
    </p>
    <p>
      The reception and cocktail hour will include drinks, lawn games, music, and dancing
      for the rest of the evening. We invite you to find what's most fun for
      you at any point during the reception and enjoy yourself!
    </p>

    <p>
      For dinner and refreshments we plan on having everything you'll need to enjoy yourself, 
      including beer, wine, and food. Catering will be provided by Open Hearth Pizza, which includes pizza (of course)
      along with salad and other hor d'euvres.
    </p>

    <p>
      <img 
        src="https://static1.squarespace.com/static/55ccd086e4b01a54c9058107/5ad87c7eaa4a996c2d618e8f/5ad87cc2758d464041df2bdb/1524479984315/catering.JPG?format=750w"
        width="100%"
      />
    </p>
    
    <h3>On Sunday</h3>
    <p>
      After the event, we invite you to come back to the site of the ceremony and reception for coffee and doughnuts.
      It will be one last good chance to catch up and say our goodbyes at the end of a wonderful weekend.
    </p>
  </React.Fragment>
)