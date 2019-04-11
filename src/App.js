import React, { Component } from 'react';
import './App.css';

class App extends Component{
  state={
    count: 0
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

export default App;
