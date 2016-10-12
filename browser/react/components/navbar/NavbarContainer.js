import { connect } from'react-redux';
import Navbar from'./Navbar';

const mapStateToProps = ({ currentUser }) => ({ currentUser })

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;