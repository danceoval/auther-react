import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Provider } from 'react-redux';
import store from './Store';
import RootComponent from './RootComponent';
import Home from './components/Home';
import UserList from './components/UserList';


const onUsersEnter = ({ params }) =>
  fetch(`/api/users`)
    .then(res => res.json())
    .then(users => store.dispatch(receiveUsers(users)))

const receiveUsers = users => ({
  type: 'RECEIVE_USERS',
  users : users
});

const removeUser = user => ({
  type: 'REMOVE_USER',
  user : user
});


export default class RootRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={RootComponent}>
            <IndexRoute component={Home}/>
            <Route path="/users" component={UserList} onEnter={onUsersEnter}/>
            //Bad urls redirect to home
            <Route path="*" component={Home} />
          </Route>
        </Router>
      </Provider>  
    );
  }
}

