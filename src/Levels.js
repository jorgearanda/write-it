import React, { Component } from 'react';
import Category from './Category';
import { ReactComponent as Home } from './home.svg';

import './styles/Levels.css';

class Levels extends Component {
  render() {
    return (
      <div className="Levels">
        <div className="Header">
          Pick a Level!
        </div>
        <div className="CategoryList">
          <Category name="Food"/>
          <Category name="Animals"/>
          <Category name="Mythical Creatures"/>
          <Category name="Art"/>
          <Category name="Sports"/>
        </div>
        <a className="Footer" href="/">
          <Home />
        </a>
      </div>
    )
  }
}

export default Levels;
