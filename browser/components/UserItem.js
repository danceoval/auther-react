import React, { Component } from 'react';

export default class UserItem extends Component {
	render() {
		return (
			<div className="media">
			  <div className="media-left media-middle icon-container">
			    <span className="glyphicon">  
			    </span>
			    <img className="media-object img-circle"  />
			  </div>
			  <div className="media-body">
			    <h4 className="media-heading tucked">
			      <div className="form-like">
			      </div>
			      <span placeholder="Jean Doe">  
			      </span>
			      <span className="glyphicon glyphicon-certificate toggleable">  
			      </span>
			    </h4>
			    <h5 className="tucked">
			      <div
			        placeholder="email@website.com"
			        className="form-like">
			      </div>
			      <span>
			      </span>
			    </h5>
			    <h5 className="tucked">
			      <div
			        placeholder="(555) 555-5555"
			        className="form-like">
			      </div>
			      <span>
			      </span>
			    </h5>
			  </div>
			  <div className="media-right media-middle">
			    <button className="btn btn-default">
			      <span className="glyphicon glyphicon-remove"></span>
			    </button>
			  </div>
			</div>
		)
	}
}