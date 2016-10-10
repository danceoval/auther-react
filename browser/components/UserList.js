import React, { Component } from 'react';
import UserItem from './UserItem';
import UserDetail from './UserDetail';

export default class UserList extends Component {
  render() {
    return (
      <div className="container">
        <div className="user-query">
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
  }
}
