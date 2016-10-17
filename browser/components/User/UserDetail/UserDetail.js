import React from 'react';
import UserItem from '../UserItem';
import StoryItem from '../../Story/StoryItem';
import { Link } from 'react-router';

export default class UserDetail extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
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
			      <form className="list-group-item story-item" onSubmit={this.submit}>
			        <input 
			        	name="title"
			        	type="text"
              	className="form-like"
              	required
              	placeholder="Story Title"
            	/>
			        <button type="submit" className="btn btn-warning btn-xs">
			          <span className="glyphicon glyphicon-plus"></span>
			        </button>
			      </form>
			      {
              stories
              	.filter(story => story.author_id === user.id)
                .map(story => <StoryItem story={story} key={story.id} />)
			      }
			    </ul>
			  </div>
			</div>
		);
	}

	submit(event) {
		event.preventDefault()
		const { addStory, user } = this.props;
		const story = {
			title: event.target.title.value,
			paragraphs: [],
			author_id: user.id

		}
		console.log('submit', story)
		addStory(story);
		event.target.title.value = "";
	}
}