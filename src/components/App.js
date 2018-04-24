<<<<<<< HEAD

=======
>>>>>>> 1796bfea39567209891446ffc63ef31bb78f65c9
import React, { Component } from 'react';
import TodosList from '../components/Todos/todosList'
import CreateTodo from './Todos/create-todo'
import _ from 'lodash'

import Todo from '../components/Todos/todo'
import Home from '../components/Home/Home'
import Root from '../Root'
import Login from '../components/Login/login'
import { browserHistory, Router, Route, IndexRoute, Link,Switch} from 'react-router'


export default class App extends Component {

  render() {
    return (
<<<<<<< HEAD
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
=======
      <Router history={browserHistory}>
      
        <Route path="/" component={Root} >
          <IndexRoute component={Login} />
          <Route path="/todo/:id" component={Todo} />
          <Route path="/home/:id" component={Home} />
       </Route>
      </Router>
    )
>>>>>>> remotes/origin/nisha-dev
  }
}

