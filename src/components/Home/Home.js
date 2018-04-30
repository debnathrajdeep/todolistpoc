/**
 * @description :
 * @date:24/04/2018
 * @author:RapidValue
 */

import React, { Component } from 'react';
import RecentTodoList from './recent-todos'
import ListItems from './list-items';
import ReactDOM from 'react-dom';
// import ProductHeader from './product-header'

export default class Home extends Component {    
    renderProducts() {
        console.log(this.state.products)
        return (
            this.state.products.map((item, index) => 
             <td>{item.Title}</td>)             
        );
        


    }
    render() {
        return (
            <div>
                <div
                    className="container">
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

