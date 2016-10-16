import { connect } from'react-redux';
import Navbar from './Navbar';
import { logout } from '../../ducks/auth';

const mapState = ({ currentUser }) => ({ currentUser })
const mapDispatch = { logout }

export default connect(mapState, mapDispatch)(Navbar);