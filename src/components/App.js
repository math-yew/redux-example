import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sendToStore } from '../redux/red1';
import '../styles/App.css';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputValue: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    this.props.sendToStore(this.state.inputValue);
  }

  handleChange (event) {
    this.setState({
      inputValue: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Input Value: {this.props.oldInput}</h1>
        <p>{this.state.inputValue}</p>
        <input onChange={this.handleChange} value={this.state.inputValue}/>
        <button onClick={this.handleClick}>Send to Store</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    oldInput: state.oldInput
  }
}

const mapDispatchToActionProviders = {
  sendToStore: sendToStore
}

export default connect(mapStateToProps, mapDispatchToActionProviders)(App);
