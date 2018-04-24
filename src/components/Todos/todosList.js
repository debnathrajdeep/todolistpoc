import _ from 'lodash'
import React from 'react'
import TodosListHeader from './todos-List-Header'
import TodosListItem from './todos-list-item';
import '../todos-css/TodosList.css'
export default class TodosList extends React.Component {
    componentWillMount() {
        this.setState({
            todos: this.props.todos
        })
    }

    componentWillReceiveProps() {
        this.setState({
            todos: this.props.todos
        })
    }

    componentWillUpdate() {

    }

    renderItems() {
        return (
            //    _.map(this.props.todos), (todo,index)=> <TodosListItem key={index} task={todo.task}/>
            this.state.todos.map((item, index) => <TodosListItem key={index} title={item.Title}
                date={item.DateandTime} saveTitle={this.props.saveTitle} deleteTitle={this.props.deleteTitle} />)
        );
    }
    
    render() {
        return (
            <div className="container my-div">
                <table className="table table-striped">
                    <TodosListHeader />
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>
            </div>
        );
    }

}