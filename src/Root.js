/**
 * @description :
 * @date:24/04/2018
 * @author:RapidValue
 */
import React from "react";
import { Link } from 'react-router'

export default class Root extends React.Component {
        renderHeader() {
        if (this.props.router.params.id === undefined) {
            return (
                <div></div>
            );
        }

        return (
            <div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <ul className="header">
                            <li><Link to='/home/1'>Home</Link></li>
                            <li><Link to='/todo/1'>ToDo-list</Link></li>
                            <li><Link to='/'>Log out</Link></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
        );
    }

    render() {
        return (
            <div className="container">
                {this.renderHeader()}
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
