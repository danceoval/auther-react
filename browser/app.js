import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Provider } from 'react-redux';
import store from './Store';
import Root from './components/Root';
import Home from './components/Home';
import UserList from './components/UserList';

/* REFACTOR - MOVE THIS */
// should be moved to inside user something
import { _receiveUsers } from './action_creators/Users';

function onUsersEnter() {
	return fetch(`/api/users`)
	    .then(res => res.json())
	    .then(_receiveUsers)
	    .then(store.dispatch)
}
/* REFACTOR - MOVE THIS */

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Root}>
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

render(<AppRouter />, document.getElementById('app'));
