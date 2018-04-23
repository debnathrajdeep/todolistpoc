import React from 'react';
import RecentTodoList from './RecentTodos';

export default class ListItems extends React.Component {

    render() {


        return (
            <li>{this.props.title}</li>
        );
    }

}




