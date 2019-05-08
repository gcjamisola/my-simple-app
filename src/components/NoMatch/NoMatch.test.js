import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import NoMatch from './index';

describe('NoMatch component', () => {
	it('should render the component', () => {
		const component = shallow(<NoMatch />);
		const tree = toJson(component);
		expect(tree).toMatchSnapshot();
	});
});