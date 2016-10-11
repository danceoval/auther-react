import React, { Component } from 'react';
import UserItem from './UserItem';
import UserDetail from './UserDetail';
import { connect } from 'react-redux';
import { removeUser } from '../actionCreators';

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

class UserList extends Component {
  render() {
    const { users, removeUser } = this.props;

    return (
      <div className="container">
        <div className="user-query">
        </div>
        <br />
        <br />
        <div className="user-list">
          {  
            users.map((user, index) => (
              <div className="list-group-item min-content">
                <UserItem key={index} user={user} removeUser={removeUser}/>
              </div> 
            )) 
          }
        </div>
        <div className="fixed">
        </div>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return { users };
}

function mapDispatchToProps(dispatch) {
  return {
    removeUser: user => dispatch(Actions.removeUser(user))
  };
}      


