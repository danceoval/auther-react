import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Root from '../components/Root';
import Home from '../components/Home';
import Login from '../components/Auth/Login';
import Signup from '../components/Auth/Signup';
import UserList from '../components/User/UserList';
import UserDetail from '../components/User/UserDetail';
import StoryList from '../components/Story/StoryList';
import StoryDetail from '../components/Story/StoryDetail';

export default class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);
  }

  render() {
    const { fetchLoggedInUser, fetchUsers, fetchStories } = this.props;

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