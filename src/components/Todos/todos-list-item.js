import React from 'react'
// import './todos-list-item.css'


export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            titleError: ""
        };
    }

    renderTitleSection() {
        const { title, date } = this.props; //Destructuring
        if (this.state.isEditing) {
            return (
                <td>
                    <input type="text"  defaultValue={title} ref="editInput"  />
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
                <td>{this.props.date}</td>
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
        const error = validate();
        if (!error) {
            const oldTitle = this.props.title;
            const newTitle = this.refs.editInput.value;
            this.props.saveTitle(oldTitle, newTitle);
            this.setState({ isEditing: false });
        }
        else
        {

        }

    }


}