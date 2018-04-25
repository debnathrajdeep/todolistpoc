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
            titleError: ""
        };
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
                    <img className="iconsize" src="../../../src/img/ic_save_48px.png" onClick={this.onSaveClick.bind(this)}/>
                    <img className="iconsize" src="../../../src/img/ic_cancel.png" onClick={this.onCancelClick.bind(this)}/>                                        
                </td>
            );
        }
        return (
            <td>
                <img className="iconsize" src="../../../src/img/ic_edit_48px.png" onClick={this.onEditClick.bind(this)}/>
                <img className="iconsize" onClick={this.props.deleteTitle.bind(this, this.props.title)} src="../../../src/img/ic_delete_48px.png"/>
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
        const error = false;//validate();
        if (!error) {
            const oldTitle = this.props.title;
            const newTitle = this.refs.editInput.value;
            this.props.saveTitle(oldTitle, newTitle);
            this.setState({ isEditing: false });
        }
    }
}
