import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Register from './index';
import { rAddUser } from '../../resources/jsonPlaceholder';

describe('Register component', () => {
	it('should render the component', () => {
		const component = shallow(<Register />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});

	it('should return response upon submission', () => {
		const userData = {
			'name': 'Lorem Ipsum',
			'username': 'lorem.ipsum',
			'email': 'lorem.ipsum@li.biz',
			'address': {
				'street': 'Lorem',
				'suite': 'Ipsum',
				'city': 'Dolor',
				'zipcode': '92998-3874',
				'geo': {
					'lat': '-37.3159',
					'lng': '81.1496'
				}
			},
			'phone': '1-770-736-8031 x56442',
			'website': 'loremipsum.org',
			'company': {
				'name': 'Lorem-Ipsum-company',
				'catchPhrase': 'Multi-layered client-server neural-net',
				'bs': 'harness real-time e-markets'
			}
		};

		return rAddUser(userData)
			.then((response) => {
				expect(response).toBeDefined();
			});
	});
});