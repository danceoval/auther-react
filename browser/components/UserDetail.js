import React, { Component } from 'react';
import UserItem from './UserItem';

export default class UserDetail extends Component {
	render() {
		return (
			<div className="container">
			  <UserItem />
			  <div className="panel panel-warning">
			    <div className="panel-heading">
			      <h2 className="panel-title large-font">stories</h2>
			    </div>
			    <ul className="list-group">
			      <p className="list-group-item story-item">
			        <span>
			        </span>
			        <button className="btn btn-warning btn-xs">
			          <span className="glyphicon glyphicon-plus"></span>
			        </button>
			      </p>
			      <p  className="list-group-item story-item">
			        <a>
			         
			        </a>
			        <button className="btn btn-default btn-xs">
			          <span className="glyphicon glyphicon-remove"></span>
			        </button>
			      </p>
			    </ul>
			  </div>
			</div>

		)
	}
}