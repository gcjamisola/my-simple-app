import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import {StyledFooter} from './index';

test('it works', () => {
	const tree = renderer.create(<StyledFooter/>).toJSON();
	expect(tree).toMatchSnapshot();
});