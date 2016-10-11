import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, Link } from 'react-router';
import { Provider } from 'react-redux';
import store from './Store';
import Root from './components/Root';
import Home from './components/Home';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import StoriesList from './components/StoriesList';

/* REFACTOR - MOVE THIS */
// should be moved to inside user something
import { _receiveUsers } from './action_creators/Users';
import { _receiveStories} from './action_creators/Story';

function onUsersEnter() {
	return fetch(`/api/users`)
	    .then(res => res.json())
	    .then(_receiveUsers)
	    .then(store.dispatch)
}

function onStoriesEnter() {
  return fetch(`/api/stories`)
      .then(res => res.json())
      .then(_receiveStories)
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
            <Route path="/users/:id" component={UserDetail} onEnter={onUsersEnter}/>
            <Route path="/stories" component={StoriesList} onEnter={onStoriesEnter}/>
            //Bad urls redirect to home
            <Route path="*" component={Home} />
          </Route>
        </Router>
      </Provider>  
    );
  }
}

render(<AppRouter />, document.getElementById('app'));
