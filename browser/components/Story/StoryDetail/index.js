import { connect } from'react-redux';
import StoryDetail from './StoryDetail';
import { updateStory } from '../../../ducks/stories';

import _ from 'lodash';

const mapState = ({ stories, users, currentUser }, ownProps) => {
  const id = Number(ownProps.params.id);
  const story = _.find(stories, story => story.id === id);
  return { story, users, currentUser }
}

const mapDispatch = { updateStory }

export default connect(mapState, mapDispatch)(StoryDetail);