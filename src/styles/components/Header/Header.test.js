import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import {NavContainer} from './index';

test('it works', () => {
	const tree = renderer.create(<NavContainer/>).toJSON();
	expect(tree).toMatchSnapshot();
});