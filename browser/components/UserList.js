import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserItem from './UserItem';
import UserDetail from './UserDetail';

const UserList = ({users, removeUser}) => (

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

const _removeUser = (user) => ({ type : 'REMOVE_USER', user})

const mapStateToProps = ({ users }, {children}) => ({
  users,
  children
});

const mapDispatchToProps = dispatch => ({
  // removeUser: (user) => fetch(`/api/users/${user.id}`, {method:'delete'})
  //    // .then(res => console.log)
  //     .then(() => dispatch(_removeUser(user)))
  removeUser : (user) => dispatch(_removeUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
