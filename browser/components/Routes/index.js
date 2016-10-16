import { connect } from'react-redux';
import Routes from './Routes';
import { fetchLoggedInUser } from '../../ducks/auth';
import { fetchUsers } from '../../ducks/users';
import { fetchStories } from '../../ducks/stories';

const mapDispatch = { fetchLoggedInUser, fetchUsers, fetchStories }

export default connect(null, mapDispatch)(Routes);
