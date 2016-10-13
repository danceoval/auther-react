import { connect } from'react-redux';
import UserDetail from './UserDetail';
import _ from 'lodash';
import { removeUser } from '../../reducers/users';

const mapStateToProps = ({ users }, ownProps) => {
  const id = Number(ownProps.params.id);
  const user = _.find(users, user => user.id === id);
  return { user }
}

const mapDispatchToProps = { removeUser }

const UserDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);

export default UserDetailContainer;