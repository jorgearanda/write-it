import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Levels from './Levels';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={ Main } />
          <Route path="/levels/" component={ Levels } />
        </div>
      </Router>
    )
  }
}

export default App;
