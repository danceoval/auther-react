import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Provider } from 'react-redux';
import store from './Store';
import RootComponent from './RootComponent';
import Home from './components/Home';
import UserContainer from './containers/UserContainer';
import { _receiveUsers } from './action_creators/Users';


const onUsersEnter = ({ params }) =>
  fetch(`/api/users`)
    .then(res => res.json())
    .then(users => {
      console.log('dispatching', users)
      store.dispatch(_receiveUsers(users))
  })


export default class RootRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={RootComponent}>
            <IndexRoute component={Home}/>
            <Route path="/users" component={UserContainer} onEnter={onUsersEnter}/>
            //Bad urls redirect to home
            <Route path="*" component={Home} />
          </Route>
        </Router>
      </Provider>  
    );
  }
}

