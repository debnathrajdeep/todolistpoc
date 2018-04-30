/**
 * @description :
 * @date:24/04/2018
 * @author:RapidValue
 */
import React from 'react'
import 'whatwg-fetch'
import ListItems from './list-items'
import Home from './home'
const url = 'http://localhost:49347/api/Todoes/GetAllTodos'
export default class RecentTodoList extends React.Component {
    constructor(props) {
        super(props);        
        this.state = {
            products:[]
        };
    }

    componentWillMount(){
        this.getProductFromApiAsync(url);
    }

    getProductFromApiAsync = (url) => {
        return fetch(url)
            .then((response) =>
            response.json())
            .then(data => 
                this.setState({ products: data }));
    }

    render() {
        var items =
            <div>
                {this.state.products.map((item, index) => <ListItems title={item.Title}/>
                )}
            </div>
        return (
            <div>
                <ul>
                {items}
                </ul>
            </div>
        );
    }
}
