import React, { Component } from 'react';
import UserItem from './UserItem';
import UserDetail from './UserDetail';

export default class UserList extends Component {
  render() {
    const {users, removeUser} = this.props;
    return (
      <div className="container">
        <div className="user-query">
        </div>
        <br /><br />
        <div className="user-list">
          {  
            users.map(user => (
                <a className="list-group-item min-content">
                  <UserItem user={user} removeUser={removeUser}/>
                </a> 
              )) 
          }
        </div>
        <div className="fixed">
        </div>
      </div>
    );
  }
}

         


