import { connect } from'react-redux';
import StoryDetail from './StoryDetail';
import _ from 'lodash';

const mapStateToProps = ({ stories, users, currentUser }, ownProps) => {
  const id = Number(ownProps.params.id);
  const story = _.find(stories, story => story.id === id);
  return { story, users, currentUser }
}


const StoryDetailContainer = connect(
  mapStateToProps
)(StoryDetail);

export default StoryDetailContainer;