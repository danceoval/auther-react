import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import UserDetail from './UserDetail';

const UserList = ({users}) => (
      <div className="container">
        <div className="user-query">
          {
            users.map(user => (
              <h1>{user.name}</h1>  
            ))
          }
          <UserItem />
          <UserItem />
      
        </div>
        <br /><br />
        <div className="user-list">
          <a className="list-group-item min-content">
            <UserItem />
          </a>
        </div>
        <div className="fixed">
          <UserDetail />
        </div>
      </div>
    );

const mapStateToProps = ({ users }, {children}) => ({
  users,
  children
});

export default connect(mapStateToProps)(UserList);
