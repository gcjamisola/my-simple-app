import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Footer from './index';

describe('Footer component', () => {
	it('should render the component', () => {
		const component = shallow(<Footer />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});