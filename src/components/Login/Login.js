import React from 'react'
import Home from '../Home/Home'


const  Welcome = (username)=> {
    // This is a dumb "stateless" component
    return (
      <div>
        Welcome <strong>{username}</strong>
        
      </div>
    )
  }
  
  export default class Login extends React.Component {

    handleSignIn(e) {
        debugger;
      e.preventDefault()
      let username = this.refs.username.value
      let password = this.refs.password.value
      if(username==='OnSolve' && password==='OnSolve@1234'){
          alert('Suceess');
      }
      else
      {
          alert('Failure');
      }
    }
    
    render() {
      return (
        <form onSubmit={this.handleSignIn.bind(this)}>
          <h3>Sign in</h3>
          <input type="text" ref="username" placeholder="enter you username" />
          <input type="password" ref="password" placeholder="enter password" />
          <input type="submit" value="Login" />
          {Welcome}
        </form>
      )
    }
  
  }
  
  

  