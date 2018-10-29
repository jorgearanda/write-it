import React, { Component } from 'react';
import './styles/LanguageSelector.css'

class LanguageSelector extends Component {
  render() {
    const onClick = this.props.onLanguageSelection;
    return (
      <div className="language-wrapper">
        <div className="language">
          <div className="language-choice english" onClick={ () => onClick("EN") } >English</div>
          <div className="language-choice french" onClick={ () => onClick("FR") } >En Français</div>
          <div className="language-choice spanish" onClick={ () => onClick("ES") } >Español</div>
        </div>
      </div>
    )
  }
}

export default LanguageSelector;
