import { connect } from'react-redux';
import StoryItem from './StoryItem';
import { removeStory } from '../../../ducks/stories'; 

const mapState = ({ currentUser }) => ({ currentUser })

const mapDispatch = { removeStory }

export default connect(mapState, mapDispatch)(StoryItem);