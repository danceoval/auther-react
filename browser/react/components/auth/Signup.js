import React from 'react';
import {signup} from '../../reducers/auth';
import store from '../../store';

export default class extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };
        // Bind event from node to component
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.submitSignup = this.submitSignup.bind(this);
    }

    updateEmail(e) {
        this.setState({ email: e.target.value });
    }

    updatePassword(e) {
        this.setState({ password: e.target.value });
    }

    submitSignup(e) {
        e.preventDefault();
        // Call our action.
        store.dispatch(signup(this.state));
    }

    toData(res) {
        return res.data;
    }

    render() {
        return (
            <div className="signin-container">
                <div className="buffer local">
                    <form onSubmit={this.submitSignup}>
                        <div className="form-group">
                            <label>email</label>
                            <input type="text" className="form-control" onChange={this.updateEmail} value={this.state.email} required />
                        </div>
                        <div className="form-group">
                            <label>password</label>
                            <input type="password" className="form-control" onChange={this.updatePassword} value={this.state.password} required />
                        </div>
                        <button type="submit" className="btn btn-block btn-primary">login</button>
                    </form>
                </div>
            </div>
        );
    }

}