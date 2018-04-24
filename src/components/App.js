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

        <nav className="navbar navbar-light  bg-light">
        <ul className="nav nav-tabs">
        <li className="nav-item">
      
          <a className="navbar-brand" href="#">
          <span className="navbar-brand mb-0 h1">Rapid Value Solutions</span>          
          </a>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active"  to="/Home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link"  to="/todo">ToDo-list</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
      
      <div>
      <center>
       
      </center>
      <div className="content">
        <Route path="/home" component={Home} />
        <Route path="/todo" component={Todo} />
      </div>
    </div>

      </nav>
      
           
    
  
      </HashRouter>
    );
  }

}

