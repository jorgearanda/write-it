import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="explore-wrapper">
          <div class="explore">
            Explore your stadium
          </div>
        </div>
        <div class="play-wrapper">
          <div class="play">
            <div>
              PLAY
            </div>
            <div>
              <img src="sun.png" alt=""/>
            </div>
          </div>
        </div>
        <div class="language-wrapper">
          <div class="language">
            <div class="language-choice english">English</div>
            <div class="language-choice french">En Français</div>
            <div class="language-choice spanish">Español</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
