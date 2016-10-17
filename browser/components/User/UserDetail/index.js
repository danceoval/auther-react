import { connect } from'react-redux';
import UserDetail from './UserDetail';
import _ from 'lodash';

const mapState = ({ users, stories, currentUser }, ownProps) => {
  const param_id = Number(ownProps.params.id);
  return { 
    user:    _.find(users, user => user.id === param_id), 
    stories: stories.filter(story => story.author_id === param_id), 
    currentUser 
  }
}

export default connect(mapState)(UserDetail);