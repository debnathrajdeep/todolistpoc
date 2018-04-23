import React from 'react'
import ListItems from './ListItems'
import Data from '../Todos/data'


export default class RecentTodoList extends React.Component {


    constructor(props) {
        super(props);
        let todos = Data.getData();
        this.state = {
            todos
        };
    }

    render() {
        var items =
            <div> 
            {this.state.todos.map((item, index) => <ListItems skey={index} title={item.Title}
                date={item.DateandTime} />
            )}
            </div>

        return (
            <div>
                <ul>
                    {items}
                </ul>
            </div>);
    }

}


