import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import {Wrapper} from './index';

test('it works', () => {
	const tree = renderer.create(<Wrapper/>).toJSON();
	expect(tree).toMatchSnapshot();
});