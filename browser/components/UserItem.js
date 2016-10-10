import React, { Component } from 'react';

export default ({user, removeUser}) => (
			<div className="media">
			  <div className="media-left media-middle icon-container">
			    <span className="glyphicon">  
			    </span>
			    <img className="media-object img-circle"  src={user.photo}/>
			  </div>
			  <div className="media-body">
			    <h4 className="media-heading tucked">
			      <div className="form-like">
			      </div>
			      <span placeholder="Jean Doe">
			      	{user.name}
			      </span>
			    </h4>
			    <h5 className="tucked">
			      <div
			        placeholder="email@website.com"
			        className="form-like">
			      </div>
			      <span>
			      	{user.email}
			      </span>
			    </h5>
			    <h5 className="tucked">
			      <div
			        placeholder="(555) 555-5555"
			        className="form-like">
			      </div>
			      <span>
			      	{user.phone}
			      </span>
			    </h5>
			  </div>
			  <div className="media-right media-middle">
			    <button className="btn btn-default">
			      <span className="glyphicon glyphicon-remove" onClick={() => removeUser(user)}></span>
			    </button>
			  </div>
			</div>
		)