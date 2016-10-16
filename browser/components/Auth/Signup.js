import { connect } from'react-redux';
import Auth from './Auth';
import { signup } from '../../ducks/auth';

const mapState = () => ({ message: "Sign up" })
const mapDispatch = { signup }

export default connect(mapState, mapDispatch)(Auth);