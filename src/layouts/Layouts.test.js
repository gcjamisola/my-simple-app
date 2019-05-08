import React from 'react';
import { shallow } from 'enzyme';

import {PlainLayout} from './index';

describe('PlainLayout component', () => {
	it('should render the component', () => {
		const component = shallow(<PlainLayout />);
		expect(component).toMatchSnapshot();
	});
});

