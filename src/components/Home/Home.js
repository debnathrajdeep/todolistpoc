import React, { Component } from 'react';
import RecentTodoList from './RecentTodos'
import ListItems from './ListItems';

export default class Home extends Component {
    render() {
        return (
            <div>
                <div className="container">

                    <div className="row">
                        <div className="col-sm-6" >
                            <h2>Welcome</h2>
                        </div>
                        <div className="panel panel-primary">
                            <h4>Recent Todos</h4>
                            <RecentTodoList />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}


