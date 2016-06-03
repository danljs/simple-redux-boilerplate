import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  constructor(props, context) {
    super(props, context);
  }

  handleIncrement() {
    this.props.actions.increment();
  }

  handleDecrement() {
    this.props.actions.decrement();
  }

  handleIncrementAsync() {
    this.props.actions.incrementAsync();
  }

  render() {
    return (
      <div className="counter-container">
        <div className="counter-num-label">{this.props.counter}</div>
        {/* Below, the even or odd statement is simply used to demonstrate how one could
        easily use a ternary operator to conditionally show an 'even' or 'odd' string
        based on the counter's value on state. */}
        <div className="counter-even-label">{this.props.counter % 2 === 0 ? 'even' : 'odd'}</div>
        <br />
        <div className="counter-buttons">
          <button onClick={() => {this.handleDecrement();}}>-</button>
          <button onClick={() => {this.handleIncrement();}}>+</button>
          <p>async add</p>
          <button onClick={() => {this.handleIncrementAsync();}}>+</button>
        </div>
      </div>
    );
  }
}


// actions 在 App.js 中 用 connect ，调用 mapDispatchToProps 将 CounterActions 绑定到App了， （其实是connect React component to a Redux store）
// App 在内部调用 Counter Component， 将 counter和 actions 传入
// Counter 中 this.props.actions.increment(); 就是调用 CounterActions里的 increment
// increment 发出 action: type: DECREMENT_COUNTER
// reducer recieve action, return new state
//

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};
