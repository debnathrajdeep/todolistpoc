/**
 * @description :
 * @date:24/04/2018
 * @author:RapidValue
 */
import React from 'react'
import { browserHistory, Link } from 'react-router'

export default class Login extends React.Component {
  render() {
    return (
      // <form>
      //   
      //   <input type="text" ref="username" placeholder="enter you username" />
      //   <input type="password" ref="password" placeholder="enter password" />
      // </form>
      // <form>
      
     <div>
        <div className ="col-4">
      <img src="Capture.png" alt="Rapid Value Solutions"className="" />
      </div> 
      <form className="center">
      <div className="col-8 offset-md-2">
     
      <h3>Sign in</h3>
      
      <div className="form-group ">
        <label for="exampleInputEmail1">User Name</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name"/>
      </div>
      <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <Link to='/home/1' className="btn btn-primary">Login</Link>
      </div>
    </form>
    </div>
    )
  }
}
