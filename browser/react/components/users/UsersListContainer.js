import { connect } from'react-redux';
import UsersList from './UsersList';
import { removeUser } from '../../reducers/users';

const mapStateToProps = ({ users, currentUser }) => ({ users, currentUser })

const mapDispatchToProps = { removeUser }

const UserListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);

export default UserListContainer;