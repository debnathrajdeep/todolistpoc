/**
 * @description :
 * @date:24/04/2018
 * @author:RapidValue
 */
import React from 'react';
import RecentTodoList from './RecentTodos';

export default class ListItems extends React.Component {
    render() {
        return (
            <li>{this.props.title}</li>
        );
    }
}
