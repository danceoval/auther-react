import React from 'react';
import UserItem from './UserItem';
import { Link } from 'react-router';

export default ({ users, removeUser }) => (
  <div className="container">
    {/* USER QUERY - LOOK INTO FOR FIXING */}
    <div className="user-query">
      {/* SEARCH */}
      <div className="list-group-item min-content user-item">
        <div className="media">
          <div className="media-left media-middle icon-container">
            <span className="glyphicon glyphicon-search"></span>
          </div>
          <div className="media-body">
            <h4 className="media-heading tucked">
              <div contentEditable
                    placeholder="Jean Doe"
                    className="form-like">
              </div>
            </h4>
            <h5 className="tucked">
              <div contentEditable
                   placeholder="email@website.com"
                   className="form-like">
              </div>
            </h5>
            <h5 className="tucked">
              <div contentEditable
                placeholder="(555) 555-5555"
                className="form-like">
              </div>
            </h5>
          </div>
          <div className="media-right media-middle"></div>
        </div>
      </div>
      {/* ADD */}
      <div className="list-group-item min-content user-item">
        <div className="media">
          <div className="media-left media-middle icon-container">
            <span className="glyphicon glyphicon-plus clickable"></span>
          </div>
          <div className="media-body">
            <h4 className="media-heading tucked">
              <div contentEditable
                    placeholder="Jean Doe"
                    className="form-like">
              </div>
            </h4>
            <h5 className="tucked">
              <div contentEditable
                   placeholder="email@website.com"
                   className="form-like">
              </div>
            </h5>
            <h5 className="tucked">
              <div contentEditable
                placeholder="(555) 555-5555"
                className="form-like">
              </div>
            </h5>
          </div>
          <div className="media-right media-middle"></div>
        </div>
      </div>
    {/* END OF QUERY SEARCH */}
    </div>
    <br />
    <br />
    <div className="user-list">
    {  
      users.map((user, index) => (
        <div key={index} className="list-group-item min-content user-item">
          <UserItem user={user} removeUser={removeUser}/>
        </div> 
      )) 
    }
    </div>
    <div className="fixed">
      { /*
        This is where we expect the subview to go, though im not sure that translates
      */}
    </div>
  </div>
);

