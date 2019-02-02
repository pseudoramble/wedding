import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import wrapperStyles from './Intro.css';
import buttonIcon from '../assets/vt-lite.png';

import GetReady from './GetReady';
import OurStory from './OurStory';
import TheWeekend from './TheWeekend';
import Thanks from './Thanks';
import Registry from './Registry';
import Lodging from './Lodging';
import MoreInfo from './MoreInfo';

const HeaderLink = ({ children, onClick, to }) => (
  <span className={wrapperStyles.navMenuItem}>
    <Link
      className={wrapperStyles.link}
      onClick={onClick}
      to={to}
    >
      {children}
    </Link>
  </span>
);

class NavMenuBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      opened: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ opened: !this.state.opened });
  }

  render() {
    const classes = `${wrapperStyles.navBar} ${this.state.opened ? wrapperStyles.navMenuOpened : wrapperStyles.navMenuClosed}`;
    const iconStyles = { width: '30px', textAlign: 'center' };

    return (
      <div>
        <div
          className={wrapperStyles.navMenu}
          onClick={this.toggleMenu}
        >
          <i className={`fa fa-bars ${wrapperStyles.navMenuIcon}`} style={{ marginLeft: '2%' }} />
          <span>Kerry & Doug</span>
          <span><Link className={wrapperStyles.backLink} to="/"><img className={wrapperStyles.icon} src={buttonIcon} /></Link></span>
        </div>
        <nav className={classes}>
          <HeaderLink onClick={this.toggleMenu} to="/wedding/our-story">
            <i className="fa fa-book-open" style={iconStyles} />
            <span style={{ paddingLeft: '10px' }}>
              Our Story
            </span>
          </HeaderLink>
          <HeaderLink onClick={this.toggleMenu} to="/wedding/the-weekend">
            <i className="fa fa-map-marked-alt" style={iconStyles} />
            <span style={{ paddingLeft: '10px' }}>
              The Weekend
            </span>
          </HeaderLink>
          <HeaderLink onClick={this.toggleMenu} to="/wedding/get-ready">
            <i className="fa fa-calendar-alt" style={iconStyles} />
            <span style={{ paddingLeft: '10px' }}>
              RSVP!
            </span>
          </HeaderLink>
          <HeaderLink onClick={this.toggleMenu} to="/wedding/lodging">
            <i className="fa fa-hotel" style={iconStyles} />
            <span style={{ paddingLeft: '10px' }}>
              Lodging
            </span>
          </HeaderLink>
          <HeaderLink onClick={this.toggleMenu} to="/wedding/registry">
            <i className="fa fa-gift" style={iconStyles} />
            <span style={{ paddingLeft: '10px' }}>
              Registry
            </span>
          </HeaderLink>
          <HeaderLink onClick={this.toggleMenu} to="/wedding/more-info">
            <i className="fa fa-walking" style={iconStyles} />
            <span style={{ paddingLeft: '10px' }}>
              Activities Nearby
            </span>
          </HeaderLink>
        </nav>
      </div>
    );
  }
};

class Intro extends Component {
  componentWillUpdate() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <NavMenuBar />
    
        <article className={wrapperStyles.content}>
          <Switch>
            <Route path="/wedding/our-story" component={OurStory} />
            <Route path="/wedding/the-weekend" component={TheWeekend} />
            <Route path="/wedding/get-ready" component={GetReady} />
            <Route path="/wedding/thanks" component={Thanks} />
            <Route path="/wedding/registry" component={Registry} />
            <Route path="/wedding/lodging" component={Lodging} />
            <Route path="/wedding/more-info" component={MoreInfo} />
          </Switch>
        </article>
      </div>
    );
  }
};

export default Intro;