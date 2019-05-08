import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Home from './index';

describe('Header component', () => {
	it('should render the component', () => {
		const component = shallow(<Home />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});