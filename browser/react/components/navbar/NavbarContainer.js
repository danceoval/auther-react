import { connect } from'react-redux';
import Navbar from'./Navbar';
import { logout } from '../../reducers/auth';

const mapStateToProps = ({ currentUser }) => ({ currentUser })
const mapDispatchToProps = { logout }

const NavbarContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Navbar);

export default NavbarContainer;