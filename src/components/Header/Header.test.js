import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Header from './index';

describe('Header component', () => {
	it('should render the component', () => {
		const component = shallow(<Header />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});