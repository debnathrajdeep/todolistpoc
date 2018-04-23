import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';

export default class App extends Component {
  state = {
    date: new Date(),
  }

  onChange(data)
  { 
    this.setState({ date : data })
    this.onChng(data);
  }

  onChng = (data) => {console.log(data)};
  
  render() {
    return (
      <div>
        <h1>OnSolve Dev Environment</h1>
        <h3>Project basic environment setup</h3>
        <DateTimePicker
          onChange={this.onChng}
          value={this.state.date}
        />
      </div>
    );
  }
}
