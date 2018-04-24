import React from 'react'
import _ from 'lodash'
import TodosList from './todosList'
import CreateTodo from './create-todo'
import Data from './data'
import { browserHistory} from 'react-router'


export default class Todo extends React.Component {
    constructor(props) {

        super(props);
        let todos = Data.getData();
        this.state = {
            todos
        }
    }
    onNavigateHome() {
        browserHistory.push("/home/1");
        }
    render() {
        return (
            <div>
                <CreateTodo createTask={(title, time) => this.createTask(title, time)} />
                <TodosList todos={this.state.todos}
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