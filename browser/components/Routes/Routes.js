import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Root from '../Root';
import Home from '../Home';
import Login from '../Auth/Login';
import Signup from '../Auth/Signup';
import UserList from '../UserList';
import UserDetail from '../UserDetail';
import StoryList from '../StoryList';
import StoryDetail from '../StoryDetail';

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Root} onEnter={this.fetchData}>
          <IndexRoute component={Home} />
          <Route path="login" component={Login} />
          <Route path="signup" component={Signup} />
          <Route path="users" component={UserList} />
          <Route path="users/:id" component={UserDetail} />
          <Route path="stories" component={StoryList} />
          <Route path="stories/:id" component={StoryDetail} />
          <Route path="*" component={Home} />
        </Route>
      </Router>
    );
  }

  fetchData() {
    this.props.fetchLoggedInUser();
    this.props.fetchUsers();
    this.props.fetchStories();
  }
}