/**
 * @description :
 * @date:24/04/2018
 * @author:RapidValue
 */

import React, { Component } from 'react';
import RecentTodoList from './RecentTodos'
import ListItems from './ListItems';


export default class Home extends Component {
    render() {
        return (
<div >
            <div id="demo" className="carousel slide" data-ride="carousel">

  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../../../src/img/image1.jpg" className="imagesize" alt="Los Angeles"/>
    </div>
    <div className="carousel-item">
      <img src="../../../src/img/image2.jpg" alt="Chicago"/>
    </div>
    <div className="carousel-item">
      <img src="../../../src/img/image3.jpg" alt="New York"/>
    </div>
  </div>

  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>

</div>
            
                
                <div className="container paddingTopAlign">
                    <div className="row">
                        <div className="col-sm-6" >
                            <h2>Welcome</h2>
                            <p> 
                                Welcome to To-do App. 
                                <br/>
                                To-do App helps you to create a list of task with the time. 
                            </p>
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
