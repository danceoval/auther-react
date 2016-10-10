import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/">
              <img src="logo.png" />
            </a>
          </div>

          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li>
                <Link to="/users">users</Link>
              </li>
              <li>
                <a href="/">stories</a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="signup">signup</a>
              </li>
              <li>
                <a href="login">login</a>
              </li>
              <li>
                <button className="navbar-btn btn btn-default">logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
