import { connect } from'react-redux';
import UserItem from './UserItem';
import _ from 'lodash';
import { removeUser } from '../../ducks/user'; 

const mapState = ({ users, stories, currentUser }, ownProps) => {
  const param_id = Number(ownProps.params.id);
  return { 
    user: _.find(users, user => user.id === param_id), 
    currentUser 
  }
}

const mapDispatch = { removeUser }

export default connect(mapState, mapDispatch)(UserItem);