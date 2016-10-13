import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store';
import Promise from 'bluebird';
import App from './components/App';
import Home from './components/Home';
import UsersListContainer from './components/users/UsersListContainer';
import UserDetailContainer from './components/users/UserDetailContainer';
import StoriesContainer from './components/stories/StoriesContainer';
import { receiveUsers } from './reducers/users';
import { receiveStories } from './reducers/stories';
import { setCurrentUser } from './reducers/currentUser';


export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={onAppEnter}>
      <IndexRoute component={Home} />
      <Route path="users" component={UsersListContainer} />
      <Route path="users/:id" component={UserDetailContainer} />
      <Route path="stories" component={StoriesContainer} />
      // all other routes redirect to Home
      <Route path="*" component={Home} /> 
    </Route>
  </Router>
);

function onAppEnter() {
  return Promise.all([
    store.dispatch(receiveUsers())
  ])
  .spread(({users}) => {
    // for testing user existing
    // store.dispatch(setCurrentUser(users[0]))
  })
  .then(() => {
    return Promise.all([
      store.dispatch(receiveStories())
    ]).spread(({stories}) => {})
  });
}






// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { fetchUsers, fetchStories, fetchCurrentUser } from './asyncRequests';
// import Root from './components/Root';
// import Home from './components/Home';
// import UserList from './components/UserList';
// import UserDetail from './components/UserDetail';
// import StoriesList from './components/StoriesList';        

// import React, { Component } from 'react';

// export default class AutherRouter extends Component {
//   render() {
//     return (
//       <Router history={browserHistory}>
//         <Route path="/" component={Root}>
//           <IndexRoute component={Home} />
//           <Route path="users" component={UserList} />
//           <Route path="users/:id" component={UserDetail} onEnter={fetchCurrentUser} />
//           <Route path="stories" component={StoriesList} onEnter={fetchStories} />
//           <Route path="*" component={Home} />
//         </Route>
//       </Router>
//     );
//   }
// }