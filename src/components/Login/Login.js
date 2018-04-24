/**
 * @description :
 * @date:24/04/2018
 * @author:RapidValue
 */
import React from 'react'
import { browserHistory, Link } from 'react-router'

export default class Login extends React.Component {
  onNavigateHome() {
    browserHistory.push("home");
  }

  render() {
    return (
      <form>
        <h3>Sign in</h3>
        <input type="text" ref="username" placeholder="enter you username" />
        <input type="password" ref="password" placeholder="enter password" />
        <Link to='/home/1' className="btn btn-primary">Login</Link>
      </form>
    )
  }
}
