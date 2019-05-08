import React, { Component } from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import Popup from '../Modal';

import { rAddUser } from '../../resources/jsonPlaceholder';
import {Form, Button} from '../../styles';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			trigger: false
		};

		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleSubmit(e) {
		e.preventDefault();

		const dataObj = _.mapValues(_.keyBy($(e.target).serializeArray(), 'name'), 'value');

		const userObj = {
			'name': dataObj.name,
			'username': dataObj.username,
			'email': dataObj.email,
			'address': {
				'street': dataObj.street,
				'suite': 'Ipsum',
				'city': dataObj.city,
				'zipcode': dataObj.zipcode,
				'geo': {
					'lat': '-37.3159',
					'lng': '81.1496'
				}
			},
			'phone': dataObj.phone,
			'website': dataObj.url,
			'company': {
				'name': 'Lorem-Ipsum-company',
				'catchPhrase': 'Multi-layered client-server neural-net',
				'bs': 'harness real-time e-markets'
			}
		};

		rAddUser(userObj)
			.then((response) => {
				// const {trigger} = this.state;
				// response ? this.setState({trigger: !trigger}) : '';
				response ? alert('User has already been added !') : '';
			});
	}

	render() {
		const RegisterContainer = styled.div`
			display: flex;
			justify-content: center;
		`;

		const {trigger} = this.state;

		return (
			<RegisterContainer>
				<Form onSubmit={this._handleSubmit}>
					<ul>
						<li>
							<label htmlFor='name'>Name</label>
							<input type='text' name='name' maxLength='100' />
							<span>Enter your full name here</span>
						</li>
						<li>
							<label htmlFor='username'>Username</label>
							<input type='text' name='username' maxLength='100' />
							<span>Enter a username</span>
						</li>
						<li>
							<label htmlFor='email'>Email</label>
							<input type='email' name='email' maxLength='100' />
							<span>Enter a valid email address</span>
						</li>
						<li>
							<label htmlFor='address'>Address</label>
							<input type='text' name='street' maxLength='100' placeholder='street'/>
							<input type='text' name='city' maxLength='100' placeholder='city'/>
							<input type='text' name='zipcode' maxLength='100' placeholder='zipcode'/>
							<span>Enter a address</span>
						</li>
						<li>
							<label htmlFor='phone'>Phone</label>
							<input type='text' name='phone' maxLength='100' />
							<span>Enter phone number</span>
						</li>
						<li>
							<label htmlFor='url'>Website</label>
							<input type='url' name='url' maxLength='100' />
							<span>Your website address (eg: http://www.google.com)</span>
						</li>
						<li>
							<Button>Submit</Button>
						</li>
					</ul>
				</Form>
				<Popup open={trigger}/>
			</RegisterContainer>
		);
	}
}

export default Register;