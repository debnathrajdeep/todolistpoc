/**
 * @description :
 * @date:24/04/2018
 * @author:RapidValue
 */
import React, { Component } from 'react';
import TodosList from '../components/Todos/todoslist'
import CreateTodo from '../components/Todos/create-todo'
import _ from 'lodash'
import Todo from '../components/Todos/todo'
import Home from '../components/Home/home'
import Root from '../root'
import Login from '../components/Login/login'
import { browserHistory, Router, Route, IndexRoute, Link, Switch } from 'react-router'

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
