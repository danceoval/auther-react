import React from 'react';
import UserItem from './UserItem';
import { Link } from 'react-router';
import {addUser} from '../../reducers/users';
import store from '../../store';


export default class extends React.Component {
  constructor() {
        super();
        this.state = {
            email: '',
            name : '',
            phone : '',
            password: '123'
        };
        // Bind event from node to component
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePhone = this.updatePhone.bind(this);
        this.updateName = this.updateName.bind(this);
        this.submitUser = this.submitUser.bind(this);
    }

  updateEmail(e) {
      this.setState({ email: e.target.value });  
  }

  updateName(e) {
     this.setState({ name: e.target.value });     
  }

  updatePhone(e) {
      this.setState({ phone : e.target.value });     
  }
  submitUser(e) {
    store.dispatch(addUser(this.state));
  }
  render() {
    const { users, removeUser } = this.props;
    return (
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
                <span className="glyphicon glyphicon-plus clickable"  onClick={this.submitUser}></span>
              </div>
              <div className="media-body">
                <h4 className="media-heading tucked">
                  <input contentEditable
                        placeholder="Jean Doe"
                        className="form-like" 
                        value={this.state.name} 
                        onChange={this.updateName} >
                  </input >
                </h4>
                <h5 className="tucked">
                  <input  contentEditable
                       placeholder="email@website.com"
                       className="form-like"
                       value={this.state.email}
                       onChange={this.updateEmail}>
                  </input >
                </h5>
                <h5 className="tucked">
                  <input  contentEditable
                    placeholder="(555) 555-5555"
                    className="form-like"
                    value={this.state.phone}
                    onChange={this.updatePhone}>
                  </input >
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
        
      </div>
     );
    }
}

