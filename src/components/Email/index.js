import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { Table, Button } from '../../styles';
import { rGetUsers } from '../../resources/jsonPlaceholder';

class Email extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: []
		};

		this._getTopUsers = this._getTopUsers.bind(this);
		this._mapTopUsers = this._mapTopUsers.bind(this);
		this._handleSendEmail = this._handleSendEmail.bind(this);
	}

	componentDidMount() {
		this._getTopUsers();
	}

	_getTopUsers() {
		rGetUsers()
			.then((response) => {
				const tmpArr = _.slice(response, 0, 5);

				this.setState({users: tmpArr});
			});
	}

	_mapTopUsers() {
		const {users} = this.state;
		return _.map(users, ({id, name, email}, i) => {
			return (
				<form onSubmit={this._handleSendEmail} key={i}>
					<div className="wrapper text-4" >
						<div className="wrapper text-2">
							<div id="userID" className="text">{id}</div>
							<div className="text">{name}</div>
						</div>
						<div className="wrapper text-2">
							<div className="text" title={email}>{email}</div>
							<Button>send email</Button>
						</div>
					</div>
				</form>
			);
		});
	}

	_handleSendEmail(e) {
		e.preventDefault();

		const userID = $(e.target).find('#userID').text();

		rGetUsers(userID)
			.then((responseV1) => {
				responseV1 ? alert('Coming soon') : '';
			});
	}

	render() {
		const {users} = this.state;
		const EmailContainer = styled.div`
			display: flex;
			flex-wrap: wrap;
		`;

		return (
			<EmailContainer>
				<Table header>
					<div className="wrapper text-4">
						<div className="wrapper text-2">
							<div className="text">ID</div>
							<div className="text">Full Name</div>
						</div>
						<div className="wrapper text-2">
							<div className="text">Email</div>
							<div className="text">Action</div>
						</div>
					</div>
				</Table>
				<Table>
					{users.length > 0 ? this._mapTopUsers() : ''}
				</Table>
			</EmailContainer>
		);
	}
}

export default Email;