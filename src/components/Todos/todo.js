/**
 * @description :
 * @date:24/04/2018
 * @author:RapidValue
 */
import React from 'react'
import _ from 'lodash'
import TodosList from './todosList'
import CreateTodo from './create-todo'
import { browserHistory } from 'react-router'


export default class Todo extends React.Component {
    constructor(props) {
        super(props);       
      this.state={
            todos:[]
       } 
       
    }

    onNavigateHome() {
        browserHistory.push("/home/1");
    }

    render() {
        return (
            <div>
                <CreateTodo createTask={(title, time) => this.createTask(title, time)} />
                <TodosList 
                    saveTitle={this.saveTitle.bind(this)}
                    deleteTitle={this.deleteTitle.bind(this)} />
                <button onClick={this.onNavigateHome} className="btn btn-primary">Go Home!</button>
            </div>
        );
    }

    createTask(Title, DateandTime) {
        this.state.todos.push({
            Title,
            DateandTime
        });
        
    }

    saveTitle(oldTitle, newTitle) {
        console.log(this.state.todos);
        let foundTodo = _.find(this.state.todos, todo => todo.Title === oldTitle);
        console.log(foundTodo);
        foundTodo.Title = newTitle;
        postData(url, foundTodo);
        this.setState({ todos: this.state.todos });
    }

    deleteTitle(titleToDelete) {
        _.remove(this.state.todos, (todo) => todo.Title === titleToDelete);
        this.setState({
            todos: this.state.todos
        });
    }

   
}
