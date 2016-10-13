import { connect } from'react-redux';
import StoriesList from './StoriesList';

const mapStateToProps = ({ stories, users }) => ({ stories, users });


const StoriesContainer = connect(mapStateToProps)(StoriesList);

         
export default StoriesContainer;

