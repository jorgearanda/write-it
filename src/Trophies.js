import React, { Component } from 'react';
import { ReactComponent as Home } from './home.svg';
import { yourTrophiesText } from './i18n/Texts';

import './styles/Trophies.css';

class Trophies extends Component {
  render() {
    return (
      <div className="Trophies">
        <div className="TrophyCase">
          { yourTrophiesText['EN'] }
        </div>
        <div className="Footer">
          <a className="HomeButton" href="/">
            <Home/>
          </a>
        </div>
      </div>
    )
  }
}

export default Trophies;
