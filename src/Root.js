/**
 * @description :
 * @date:24/04/2018
 * @author:RapidValue
 */
import React from "react";
import { Link } from 'react-router'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import './index.css';

export default class Root extends React.Component {
        renderHeader() {
        if (this.props.router.params.id === undefined) {
            return (
                <div></div>
            );
        }

        return (
            <div>
                
                <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
                <ul className="nav nav-tabs">
                <li className="nav-item">
                <Link to='/home/1'>Home</Link>
                </li>
                <li className="nav-item">
                <Link to='/todo/1'>ToDo-list</Link>
                </li>
                <li className="nav-item"> 
                <Link to='/'>Log out</Link>
                </li>
                </ul>
                    </nav>
               
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                {this.renderHeader()}
                <div className="row paddingleft">
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
