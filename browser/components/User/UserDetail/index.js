import { connect } from'react-redux';
import UserDetail from './UserDetail';
import { addStory } from '../../../ducks/stories';
import _ from 'lodash';

const mapState = ({ users, stories, currentUser }, ownProps) => {
  const param_id = Number(ownProps.params.id);
  return { 
    user:    _.find(users, user => user.id === param_id), 
    stories, 
    currentUser 
  }
}

const mapDispatch = { addStory }

export default connect(mapState, mapDispatch)(UserDetail);