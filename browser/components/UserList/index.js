import { connect } from'react-redux';
import UserList from './UserList';
import { removeUser, addUser } from '../../ducks/users';

const mapState = ({ users, currentUser }) => ({ users, currentUser })

const mapDispatch = { removeUser, addUser }

export default connect(mapState, mapDispatch)(UserList);

