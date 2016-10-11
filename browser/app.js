import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import { receiveUsers } from './action_creators';
import Root from './components/Root';
import Home from './components/Home';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';

class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path="/" component={Root} onEnter={fetchInitialData}>
            <IndexRoute component={Home}/>
            <Route path="/users" component={UserList}/>
            <Route path="/users/:id" component={UserDetail}/>
            // Bad urls redirect to home
            <Route path="*" component={Home} />
          </Route>
        </Router>
      </Provider>  
    );
  }
}

render(<AppRouter />, document.getElementById('app'));

function fetchInitialData() {
  fetch('/api/users')
    .then(res => res.json())
    .then(users => receiveUsers(users))
    .then(action => store.dispatch(action));
}
