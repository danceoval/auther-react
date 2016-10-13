import { connect } from'react-redux';
import StoriesList from './StoriesList';

const mapStateToProps = ({ stories }) => ({ stories });

const StoriesContainer = connect(mapStateToProps)(StoriesList);
         
export default StoriesContainer;

