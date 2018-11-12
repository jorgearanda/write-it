import React, { Component } from 'react';
import LanguageSelector from './LanguageSelector';
import { playText, trophyCaseText } from './i18n/Texts';
import './styles/Main.css';
import sun from './assets/sun.png'

class Main extends Component {
  state = {
    language: 'EN',
  };

  handleLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    const { language } = this.state;

    return (
      <div className="Main">
        <a
          className="explore-wrapper"
          href={ "/trophies/" + language }
        >
          <div className="explore">
            { trophyCaseText[language] }
          </div>
        </a>
        <a className="play-wrapper" href="/levels/">
          <div className="play">
            <div>
              { playText[language] }
            </div>
            <div>
              <img src={ sun } alt=""/>
            </div>
          </div>
        </a>
        <LanguageSelector onLanguageSelection={ this.handleLanguageChange } />
      </div>
    );
  }
}

export default Main;
