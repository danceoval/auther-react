import { connect } from'react-redux';
import StoryList from './StoryList';
import { removeStory, addStory } from '../../../ducks/stories';
import {setCurrentUser} from '../../../ducks/auth'; 

const mapState = ({ users, stories, currentUser }) => ({ users, stories, currentUser });

const mapDispatch = { removeStory, addStory }

export default connect(mapState, mapDispatch)(StoryList);
