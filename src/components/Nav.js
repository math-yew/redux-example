import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render(){
    return (
      <div>
        <h1> Redux Prototype </h1>
        <div className="">
          <Link to="/">Home</Link>
          <Link to="clothes">Clothes</Link>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default Nav
