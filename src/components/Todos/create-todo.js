/**
 * @description :
 * @date:24/04/2018
 * @author:RapidValue
 */
import React, { Component } from 'react'
import DateTimePicker from 'react-datetime-picker';

const url="http://localhost:49347/api/Todoes/CreateTodo";
export default class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeError: '', errorMessage: ""
        };
    };

    postData = (url, productData) => {
        fetch(url, {
        method: 'POST',
        headers: {
        
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
        })
        .then((response) => response.json())
        .then((responseData) => { console.log("response: " + responseData); })
        .catch((err) => { console.log(err); });
        } 

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
       
        event.preventDefault();
        const error = this.validate();
        if (!error) {
           this.postData(url,{title:this.refs.createInputOfTitle.value, time:this.refs.inputTime.value })
            //this.props.createTask(this.refs.createInputOfTitle.value, this.refs.inputTime.value);
            console.log(this.state.selectValue);
            this.refs.createInputOfTitle.value = '';
        }
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <label>Title :</label>
                        </div>

                        <div className="col-md-2">
                            <input name="title" type="text" placeholder="Title" ref="createInputOfTitle"/>                            
                            <span>{this.state.errorMessage}</span>
                        </div>

                        <div className="col-md-2">
                            <label>Date :</label>
                        </div>

                        <div className="col-md-2">
                            <input name="date" type="text" placeholder="Time" ref="inputTime" />
                            <span>{this.state.timeError}</span>
                        </div>

                        <div className="col-md-4">
                            <button className="btn btn-primary btn btn-md" id="submitButton">Create</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
