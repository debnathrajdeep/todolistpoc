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
      <Router history={browserHistory}>
      
        <Route path="/" component={Root} >
          <IndexRoute component={Login} />
          <Route path="/todo/:id" component={Todo} />
          <Route path="/home/:id" component={Home} />
       </Route>
      </Router>
    )
  }
}

