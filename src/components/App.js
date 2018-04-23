// import React, { Component } from 'react';

// export default class App extends Component {
//   state = {};

//   render() {
//     return (
//       <div>
//         <h1>OnSolve Dev Environment</h1>
//         <h3>Project basic environment setup</h3>
//       </div>
//     );
//   }
// }


import React, { Component } from 'react';
import TodosList from '../components/Todos/todosList'
import CreateTodo from './Todos/create-todo'
import _ from 'lodash'
import { Route, NavLink, HashRouter } from "react-router-dom";
import Todo from '../components/Todos/todo'
import Home from '../components/Home/Home'


export default class App extends Component {

  render() {

    return (
      <HashRouter>
        <div>
          <center>
            <h1>TODO APP</h1>
          </center>
          <ul className="header">
            <li><NavLink to="/Home">Home</NavLink></li>
            <li><NavLink to="/todo">ToDo-list</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/home" component={Home} />
            <Route path="/todo" component={Todo} />
          </div>
        </div>
      </HashRouter>
    );
  }

}

