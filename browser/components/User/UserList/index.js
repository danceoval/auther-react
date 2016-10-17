import { connect } from'react-redux';
import UserList from './UserList';
import { addUser } from '../../../ducks/users';

const mapState = ({ users, currentUser }) => ({ users, currentUser })

const mapDispatch = { addUser }

export default connect(mapState, mapDispatch)(UserList);

