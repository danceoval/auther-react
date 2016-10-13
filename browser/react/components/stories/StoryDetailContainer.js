import { connect } from'react-redux';
import StoryDetail from './StoryDetail';
import _ from 'lodash';

const mapStateToProps = ({ stories }, ownProps) => {
  const id = Number(ownProps.params.id);
  const story = _.find(stories, story => story.id === id);
  return { story }
}


const StoryDetailContainer = connect(
  mapStateToProps
)(StoryDetail);

export default StoryDetailContainer;