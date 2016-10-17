import React from 'react';
import UserItem from '../UserItem';
import StoryItem from '../../Story/StoryItem';
import { Link } from 'react-router';

export default class UserDetail extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
    const { user, stories } = this.props;
    if (!user) return <div></div>  // the user id is invalid or data isn't loaded yet
		return (
			<div className="container">
		 		<UserItem user={user}></UserItem>
			  <div className="panel panel-warning">
			    <div className="panel-heading">
			      <h2 className="panel-title large-font">stories</h2>
			    </div>
			    <ul className="list-group">
			      <p className="list-group-item story-item">
			        <span>
			        </span>
			        <button className="btn btn-warning btn-xs">
			          <span className="glyphicon glyphicon-plus"></span>
			        </button>
			      </p>
			      {
              stories
                .map(story => <StoryItem story={story} key={story.id} />)
			      }
			    </ul>
			  </div>
			</div>
		);
	}
}