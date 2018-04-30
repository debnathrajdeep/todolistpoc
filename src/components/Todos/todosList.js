/**
 * @description :
 * @date:24/04/2018
 * @author:RapidValue
 */
import _ from 'lodash'
import React from 'react'
import TodosListHeader from './todos-list-header'
import TodosListItem from './todos-list-item';
import '../todos-css/todoslist.css'


const url="http://localhost:49347/api/Todoes/GetAllTodos";
const urlPut="http://localhost:49347/api/Todoes/UpdateTodo";
export default class TodosList extends React.Component {
    constructor(props) {
        super(props);       
      this.state={
            todos:[]
       } 
       
    }

    componentWillMount(){
        this.getProductFromApiAsync(url);
        //console.log(this.state.todos);
    }
    getProductFromApiAsync = (url) => {
        return fetch(url)
            .then((response) =>
            response.json())
            .then(data => {
                this.setState({ todos: data });
        });
    }
    
    putData = (url, productData) => {
        fetch(url+"/"+ productData.id, {
        method: 'PUT',
        headers: {
        
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(productData)
        })
        .then((response) => response.json())
        .then((responseData) => { 
            console.log("response: " + responseData);
            this.setState({ todos: responseData });
        })
        .catch((err) => { console.log(err); });
        } 
    saveTitle(data){
       this.putData(urlPut,data);
    };

    renderItems() {
        return (
            this.state.todos.map((item, index) => <TodosListItem key={index} id={item.Id} title={item.Title}
            date={item.Time} saveTitle={data => this.saveTitle(data)} deleteTitle={this.props.deleteTitle} />)
        );
    }

   

    render() {
        return (
            <div className="container my-div">
                <table className="table table-striped">
                    <TodosListHeader />
                    <tbody>
                    {this.renderItems()}
                    </tbody>
                </table>
            </div>
        );
    }
}
