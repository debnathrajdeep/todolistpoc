/**
 * @description :
 * @date:24/04/2018
 * @author:RapidValue
 */
import React from 'react'
import '../todos-css/todos-list-item.css'

export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            titleError: "",
            title:""
        };
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

    renderTitleSection() {
        const { title, date } = this.props; //Destructuring
        
        if (this.state.isEditing) {
            return (
                <td>
                    <input type="text" defaultValue={title} ref="editInput" />
                </td>
            );
        }
        return (
            <td>{title}</td>
        );
    }

    renderActioonsSections() {
        if (this.state.isEditing) {
            return (
                <td>
                    <button className="btn btn-warning btn btn-sm" onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button className="btn btn-warning btn btn-sm" onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
        }
        return (
            <td>
                <button className="btn btn-danger btn btn-sm " onClick={this.onEditClick.bind(this)}>Edit</button>
                <button className="btn btn-danger btn btn-sm" onClick={this.props.deleteTitle.bind(this, this.props.title)}>Delete</button>
            </td>
        );
    }

    render() {
        return (
            <tr>
                {this.renderTitleSection()}
                <td>{this.props.date}<input type="hidden" value={this.props.id}></input></td>
                {this.renderActioonsSections()}
            </tr>
        );
    }

    onEditClick() {
        this.setState({
            isEditing: true
        }
        )
    };

    onCancelClick() {
        this.setState({
            isEditing: false
        });
    }

    onSaveClick(event) {
        event.preventDefault();
        const error = false ;//this.validate();
        var a = {id: this.props.id, 
                        Title: this.refs.editInput.value,
                        time: this.props.date
                };
        if (!error) {
            this.props.saveTitle(a);
            this.setState({ isEditing: false });
        }
    }
}
