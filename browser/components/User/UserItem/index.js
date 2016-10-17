import { connect } from'react-redux';
import UserItem from './UserItem';
import { removeUser } from '../../../ducks/users'; 
import { removeStory } from '../../../ducks/stories'; 


const mapState = ({ currentUser, stories }) => ({ currentUser, stories })

const mapDispatch = { removeUser, removeStory }

export default connect(mapState, mapDispatch)(UserItem);