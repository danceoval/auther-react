import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import UserDetail from './UserDetail';

const UserList = ({users}) => (

      <div className="container">
        <div className="user-query">
         
          
      
        </div>
        <br /><br />
        <div className="user-list">

         {

            users.map(user => (

              <a className="list-group-item min-content">

                <UserItem user={user}/>
              </a> 
            ))
          }
          
        </div>
        <div className="fixed">
          
        </div>
      </div>
    );

const mapStateToProps = ({ users }, {children}) => ({
  users,
  children
});

export default connect(mapStateToProps)(UserList);
