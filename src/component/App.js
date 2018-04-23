import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  onChange(data)
  { 
    this.setState({ date : data })
  }

  render() {
    return (
      <div>
        <h1>OnSolve Dev Environment</h1>
        <h3>Project basic environment setup</h3>
        <DateTimePicker
          onChange={data => this.onChange(data)}
          value={this.state.date}
        />
      </div>
    );
  }
}
