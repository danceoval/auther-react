import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import store from './store';
import App from './components/App';
import Home from './components/Home';
import Login from './components/auth/Login';
import UsersListContainer from './components/users/UsersListContainer';
import UserDetailContainer from './components/users/UserDetailContainer';
import StoriesContainer from './components/stories/StoriesContainer';
import StoryDetailContainer from './components/stories/StoryDetailContainer';
import { receiveUsers } from './reducers/users';
import { receiveStories } from './reducers/stories';
import { retrieveLoggedInUser } from './reducers/auth';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} onEnter={onAppEnter}>
      <IndexRoute component={Home} />
      <Route path="users" component={UsersListContainer} />
      <Route path="users/:id" component={UserDetailContainer} />
      <Route path="stories" component={StoriesContainer} />
      <Route path="stories/:id" component={StoryDetailContainer} />
      <Route path="login" component={Login} />
      // all other routes redirect to Home
      <Route path="*" component={Home} /> 
    </Route>
  </Router>
);

function onAppEnter() {
  return Promise.all([
    store.dispatch(receiveUsers()),
    store.dispatch(receiveStories()),
    store.dispatch(retrieveLoggedInUser())
  ]);
  // .then(() => {
  //   const { users, stories } = store.getState();
  // })
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