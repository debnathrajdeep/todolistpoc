import React, { Component } from 'react'
import '../todos-css/create-todo.css'
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

                <div class="container">
                    <div class="row">
                        <div class="col-5">
                            <input type="text" className="form-control" placeholder="Title" ref="createInputOfTitle" />

                        </div>
                        <div class="col-3">

                            <select className="form-control" placeholder="Priority">
                                <option value="volvo">1</option>
                                <option value="saab">2</option>
                                <option value="mercedes">3</option>
                                <option value="audi">4</option>
                            </select>
                        </div>
                        <div>
                            <label for="exampleInputPard1"></label>
                            <button className="btn btn-primary mb-2" id="submitButton">Create</button>

                        </div>
                    </div>

                </div>

                <br />
                <br />

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