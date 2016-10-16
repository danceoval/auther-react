import { connect } from'react-redux';
import StoryList from './StoryList';
import { removeStory } from '../../ducks/stories';
import {setCurrentUser} from '../../ducks/auth'; 

const mapState = ({ stories, currentUser }) => ({ stories, currentUser });

const mapDispatch = { removeStory }

export default connect(mapState, mapDispatch)(StoryList);
