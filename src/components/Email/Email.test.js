import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Email from './index';

describe('Email component', () => {
	it('should render the component', () => {
		const component = shallow(<Email />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});