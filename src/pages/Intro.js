import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import wrapperStyles from './Intro.css';
import buttonIcon from '../assets/vt-lite.png';

import GetReady from './GetReady';
import OurStory from './OurStory';
import TheDay from './TheDay';

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
          <span><Link className={wrapperStyles.backLink} to="/">Kerry & Doug</Link></span>
          <span><Link className={wrapperStyles.backLink} to="/"><img className={wrapperStyles.icon} src={buttonIcon} /></Link></span>
        </div>
        <nav className={classes}>
          <HeaderLink onClick={this.toggleMenu} to="/wedding/our-story">
            <i className="fa fa-book-open" style={iconStyles} />
            <span style={{ paddingLeft: '10px' }}>
              Our Story
            </span>
          </HeaderLink>
          <HeaderLink onClick={this.toggleMenu} to="/wedding/the-day">
            <i className="fa fa-map-marked-alt" style={iconStyles} />
            <span style={{ paddingLeft: '10px' }}>
              The Day
            </span>
          </HeaderLink>
          <HeaderLink onClick={this.toggleMenu} to="/wedding/get-ready">
            <i className="fa fa-calendar-alt" style={iconStyles} />
            <span style={{ paddingLeft: '10px' }}>
              Get Ready!
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
            <Route path="/wedding/the-day" component={TheDay} />
            <Route path="/wedding/get-ready" component={GetReady} />
          </Switch>
        </article>
      </div>
    );
  }
};

export default Intro;