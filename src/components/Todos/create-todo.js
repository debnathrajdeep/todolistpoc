/**
 * @description :
 * @date:24/04/2018
 * @author:RapidValue
 */
import React, { Component } from 'react'
import '../../style.css';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeError: '', 
            errorMessage: ""
        };
    };

    validate = () => {
        debugger;
        let isError = false;
        const errors = {
            errorMessage: "",
            timeErrorMessage: ""
        };
        let title = this.refs.createInputOfTitle.value.length;
        let time = this.refs.inputTime.value.length;

        if (title < 5) {
            isError = true;
            errors.errorMessage = 'title must be more than 5 char';
        }

        if (time == 0) {
            errors.timeErrorMessage = 'please enter time';
        }

        this.setState({
            errorMessage: errors.errorMessage,
            timeError: errors.timeErrorMessage
        });
        return isError;
    }

    handleCreate(event) {
        debugger;
        event.preventDefault();
        const error = this.validate();
        if (!error) {
            this.props.createTask(this.refs.createInputOfTitle.value, this.refs.inputTime.value);
            this.refs.createInputOfTitle.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <div className="container paddingTopAlign">  
                <div className="row"></div> 
                <div className="row"></div>             
                    <div className="row">
                        <div className="col-md-1">
                            <label>Title :</label>
                        </div>

                        <div className="col-md-4">
                            <input name="title" className="form-control" type="text" placeholder="Title" ref="createInputOfTitle"/>                            
                            <span>{this.state.errorMessage}</span>
                        </div>

                        <div className="col-md-1">
                            <label>Date :</label>
                        </div>

                        <div className="col-md-2">
                            <input name="date"  className="form-control" type="text" placeholder="Time" ref="inputTime" />
                            <span>{this.state.timeError}</span>
                        </div>

                        <div className="col-md-2">
                            <button className="btn btn-primary btn btn-md nc-icon nc-ic_check_48px"  id="submitButton">Create</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
