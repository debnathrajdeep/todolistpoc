import React, { Component } from 'react'
// import './create-todo.css'
import DateTimePicker from 'react-datetime-picker';

export default class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    };

    onChange(data) {
        this.setState({ date: data })
    };

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <label>Title :</label>
                        </div>
                        <div className="col-md-2">

                            <input type="text" placeholder="Title" ref="createInputOfTitle" />
                        </div>
                        <div className="col-md-2">
                            <label>Date :</label>
                        </div>
                        <div className="col-md-2">
                            <DateTimePicker
                                onChange={data => this.onChange(data)}
                                value={this.state.date}
                            />


                        </div>
                        <div className="col-md-4">
                            <button className="btn btn-primary btn btn-md" id="submitButton">Create</button>
                        </div>
                    </div>
                </div>

            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();
        console.log(this.state.date.toDateString());
        this.props.createTask(this.refs.createInputOfTitle.value, this.state.date.toDateString());
        this.refs.createInputOfTitle.value = '';
        this.setState({ date: new Date() });
    }
}