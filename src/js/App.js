import React, { Component } from 'react';
import Radium from 'radium';
import '../styles/index.css';

@Radium
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <h1 style={styles.base}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

var styles = {
  base: {
    background: 'mintCream',
    color: 'mediumBlue',
    border: '2px dashed blue',
    borderRadius: 50,
    padding: '1em',
    ':hover': {
      background: 'khaki'
    }
  }
};

export class App extends Component {
  render() {
    return (
      <div>
        <Counter increment={1} />
        <Counter increment={5} />
      </div>
    );
  }
}
