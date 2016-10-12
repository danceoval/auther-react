import React from 'react';
import UserItem from './UserItem';
import { Link } from 'react-router';

export default ({ users, removeUser }) => (
  <div className="container">
    <div className="user-query">
      { /* 
        this is where we add our forms in 
            <user-item
              is-form
              model="userSearch"
              class="list-group-item min-content"
              glyphicon="search">
            </user-item>
            <user-item
              is-form
              model="userAdd"
              class="list-group-item min-content"
              glyphicon="plus"
              icon-click="addUser()">
            </user-item>
      */ }
    </div>
    <br />
    <br />
    <div className="user-list">
    {  
      users.map((user, index) => (
        <div key={index} className="list-group-item min-content">
          <UserItem user={user} removeUser={removeUser} className="user-item"/>
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

