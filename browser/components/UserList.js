import React, { Component } from 'react';
import UserItem from './UserItem';
import UserDetail from './UserDetail';
import { connect } from 'react-redux';
import {_removeUser} from '../action_creators/Users';

class UserList extends Component {
  render() {
    const {users, removeUser} = this.props;
    return (
      <div className="container">
        <div className="user-query">
        </div>
        <br /><br />
        <div className="user-list">
          {  
            users.map((user, index) => (
              <a className="list-group-item min-content">
                <UserItem key={index} user={user} removeUser={removeUser}/>
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

const mapStateToProps = ({ users }, { children }) => ({ users, children });

const mapDispatchToProps = dispatch => ({
  removeUser: user => dispatch(_removeUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

         


