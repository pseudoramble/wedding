import React from 'react';

import { Link } from 'react-router-dom';

import ContentStyles from './Content.css';

import firstSighting from '../assets/photos/kerry-doug-first-sighting.jpg';
import sameBarDifferentTime from '../assets/photos/same-bar-different-time.jpg';
import usLookingNeat from '../assets/photos/us-looking-neat.jpg';
import usEngaged from '../assets/photos/us-engaged.jpg';

const smallText = {
  fontSize: '0.9rem'
};

const centered = {
  textAlign: 'center'
};

export default () => (
  <React.Fragment>
    <h1>Our Story</h1>

    <strong>How we met</strong>

    <p>
      It all began during Cinco de Mayo at the University of New Hampshire in May 2010. Well, sorta.
    </p>

    <p style={centered}>
      <img className={ContentStyles.img} src={firstSighting} alt="Doug's looking exceptionally proud" />
      <div style={smallText}>
        The first sighting. Same bar, same time, unknown to each other. Destiny?
      </div>
    </p>

    <p>
      Actually, we had both been members of the UNH marching band during 2007.
      So more than likely we crossed paths there but weren't really aware of it.
      Kerry was supposedly somewhat aware of Doug's existence. Doug was not aware of Kerry's.
      The theme of Kerry being aware of something and Doug being oblivious of something continues to this day.
      Most importantly however, they both made a mutual friend named Dan Merselis (Hi Dan!)
    </p>

    <p>
      So anyway, we met at UNH formally in May 2010. Their mutual friend (Dan) felt like Kerry and Doug
      were a good match, and managed to find an opportunity for us to meet.
      However, in an exceptional case, both Kerry and Doug were oblivious that a setup was taking place 
      until Dan asked us separately "Sooo, what do you think of Kerry / Doug?" With eyes sufficiently rolled,
      we both separately agreed that the other one was interesting. We decided to see where it would go.
    </p>

    <strong>Dating and Moving In Together</strong>

    <p>
      Our first date was up to Portland, ME. We went to see a band that now both of us love - Railroad Earth.
      For anyone who knows Doug, this cannot be surprising. For Kerry it was new, but also exciting since she
      enjoyed the music Doug had shared with her. We spent the evening getting dinner, walking around downtown
      Portland, seeing a good show, and laughing about the fact that the toll attendant would never demand exact change,
      until they did. It was a great first date.
    </p>
    
    <p style={centered}>
      <img className={ContentStyles.img} src={sameBarDifferentTime} alt="There is a funny Facebook thread about this photo. Ask us!" />
      <div style={smallText}>
        Us out later on. Same place as the 1st photo funny enough.
      </div>
    </p>

    <p>
      Our relationship continued on through the next month or so, and then Kerry decided to graduate. 
      We thought that might put a damper on things. For the next year however, Kerry decided to be an unofficial
      member of UNH by living in nearby Dover, working in Portsmouth, and spending every other moment/dollar she
      had hanging out in Durham. This allowed us to keep dating while Doug finished his degree at UNH. So far, so good!
    </p>

    <p>
      Finally, the day came when Doug graduated and decided to continue living in New Hampshire. Meanwhile, Kerry
      decided it was time to become a student again for a little while on the other side of the country (Idaho).
      We're both happy Kerry made this decision, but don't ask us how we made it through the next 1.5 years
      long-distance dating. Neither of us recommend trying it, though it was worth it. It's complicated.
    </p>

    <p>
      After spending time living in Idaho and working a few odd jobs, we continued to keep dating and finding
      ways to make it work, but got very tired of the distance dating. So, Kerry decided to move in with Doug
      and whatever roommates he had at that point (Hi Eric! Hi Andrew!) to end the madness. In 2016, we decided
      to move into our own place in Stratham, NH, and after that Dover, NH (where we are today).
    </p>

    <p style={centered}>
      <img className={ContentStyles.img} src={usLookingNeat} alt="We wouldn't waste your time with 'nice' photos" />
      <div style={smallText}>
        Many variants of this photo exist. It has been a staple in our relationship.
      </div>
    </p>

    <strong>Proposal</strong>

    <p>
      After a sufficiently long enough waiting period to make Kerry's mom "just kind of give up" waiting for an
      engagement phone call <span style={smallText}>(while truncated, that quote is verbatim)</span> the time had finally come to move forward in
      their relationship. Doug had tried to get his act together. He really did. However, obliviousness struck again
      which managed to make him miss important dates, one after the other. First Summer 2017, then Thanksgiving 2017,
      then Christmas 2017, one after the other. Needless to say, this was not going well.
    </p>

    <p>
      In a desperate attempt to not miss Kerry's birthday, he ordered a ring before the date itself! Finally, a win!
      The ring was shipped on February 4th 2018 - Right on Kerry's birthday. Another day, another potential proposal date missed.
    </p>

    <p>
      When the ring finally arrived, Kerry managed to carry the ring in from outside, put it on her desk, and managed
      to not ask about what Doug could possibly be ordering from Etsy. Another exception to the oblivious rule. Doug
      managed to sneak it away from her desk, check that it looked OK, and hide it away. There was just one question
      left - what important event could he manage to miss this time? Valentine's Day is not particularly special to them,
      and even Memorial Day seemed just too far away this time.
    </p>

    <p>
      Remember that first date that was mentioned earlier? Railroad Earth? Yeah that hasn't stopped. We happened to
      be seeing them at the end of that week. Doug decided that it felt like a good moment to ask right before then.
      It was low-key but special enough to work. Deciding this 15 minutes before leaving for that show, Doug stepped
      out from the shower, put some clothing on, and made the move. It was a hit all-around.
    </p>

    <p style={centered}>
      <img className={ContentStyles.img} src={usEngaged} alt="There's a less fake-news photo available as well" />
      <div style={smallText}>
        We did it!
      </div>
    </p>

    <strong>And of course, you guys!</strong>

    <p>
      An important thread exists in our story, as they do in many stories - the
      "secondary" characters are equally as important, or perhaps even more. Between
      family taking care of us every step of the way, friends to introduce us and make have fun,
      you've all created memories for our lifetimes.
    </p>

    <p>
      <Link to="/wedding/the-day">So come make more memories with us!</Link>
    </p>
  </React.Fragment>
)