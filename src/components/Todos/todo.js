import React from 'react'
import _ from 'lodash'
import TodosList from './TodosList'
import CreateTodo from './create-todo'
import Data from './data'
export default class Todo extends React.Component {
    constructor(props) {

        super(props);
        let todos = Data.getData();
        this.state = {
            todos
        }
    }
    render() {
        return (
            <div>
                <CreateTodo createTask={(title, date) => this.createTask(title, date)} />
                <TodosList todos={this.state.todos}
                    saveTitle={this.saveTitle.bind(this)}
                    deleteTitle={this.deleteTitle.bind(this)} />
            </div>
        );
    }

    createTask(Title, DateandTime) {
        this.state.todos.push({
            Title,
            DateandTime
        });
        this.setState({
            todos: this.state.todos
        });
    }
    saveTitle(oldTitle, newTitle) {
        const foundTodo = _.find(this.state.todos, todo => todo.Title === oldTitle);
        //const foundTodo=this.state.todos.find(todo=>{return todo.Title===oldTitle})
        foundTodo.Title = newTitle;
        this.setState({ todos: this.state.todos });
    }

    deleteTitle(titleToDelete) {
        _.remove(this.state.todos, (todo) => todo.Title === titleToDelete);
        this.setState({
            todos: this.state.todos
        });
    }

    // delete(item){
    //   const newState = this.state.todos.slice();
    //   if (newState.indexOf(item) > -1) {
    //     newState.splice(newState.indexOf(item), 1);
    //     this.setState({todos: newState})
    //   }
    // }


}