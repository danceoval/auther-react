import React from 'react';
import { browserHistory } from 'react-router';

export default class Auth extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
	}

	render() {
		const { message } = this.props;
		return (
			<div className="signin-container">
				<div className="buffer local">
						<form onSubmit={this.submit}>
								<div className="form-group">
									<label>email</label>
									<input
										name="email" 
										ref="email" 
										type="email" 
										className="form-control" 
										required 
									/>
								</div>
								<div className="form-group">
										<label>password</label>
										<input 
										  name="password"
											ref="password" 
											type="password" 
											className="form-control" 
											required 
										/>
								</div>
								<button type="submit" 
																className="btn btn-block btn-primary"
																>{message}</button>
						</form>
				</div>
				<div className="or buffer">
					<div className="back-line">
						<span>OR</span>
					</div>
				</div>
				<div className="buffer oauth">
					<p>
						<a target="_self"
							 href="/auth/google"
							 className="btn btn-social btn-google">
						<i className="fa fa-google"></i>
						<span>{message} with Google</span>
						</a>
					</p>
				</div>
			</div>
		);
	}

	submit(event) {
		event.preventDefault();
		
		const authorize = this.props.login || this.props.signup;
		const credentials = {
			email: event.target.email.value,
			password: event.target.password.value
		}

		authorize(credentials)
			.then(() => browserHistory.push('/users'))
	}
}