import { connect } from'react-redux';
import Auth from './Auth';
import { login } from '../../ducks/auth';

const mapState = () => ({ message: "Log in" })
const mapDispatch = { login }

export default connect(mapState, mapDispatch)(Auth);