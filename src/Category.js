import React, { Component } from 'react';
import './styles/Category.css';

class Category extends Component {
  handleClick = () => {
    alert(this.props.name);
  }

  render() {
    return (
      <div className="Category">
        <button className="CategoryButton"
          onClick={ this.handleClick }
        >
          { this.props.name }
        </button>
      </div>
    )
  }
}

export default Category;
