import React, { Component } from 'react';
import LanguageSelector from './LanguageSelector';
import { playText, stadiumText } from './i18n/Texts';
import './styles/App.css';
import sun from './assets/sun.png'

class App extends Component {
  state = {
    language: 'EN',
  };

  handleLanguageChange = (language) => {
    this.setState({ language });
  }

  render() {
    const { language } = this.state;

    return (
      <div className="App">
        <div className="explore-wrapper">
          <div className="explore">
            { stadiumText[language] }
          </div>
        </div>
        <div className="play-wrapper">
          <div className="play">
            <div>
              { playText[language] }
            </div>
            <div>
              <img src={ sun } alt=""/>
            </div>
          </div>
        </div>
        <LanguageSelector onLanguageSelection={ this.handleLanguageChange } />
      </div>
    );
  }
}

export default App;
