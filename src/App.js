import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Levels from './Levels';
import Main from './Main';
import Trophies from './Trophies';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={ Main } />
          <Route path="/levels/" component={ Levels } />
          <Route path="/trophies/" component={ Trophies } />
        </div>
      </Router>
    )
  }
}

export default App;
