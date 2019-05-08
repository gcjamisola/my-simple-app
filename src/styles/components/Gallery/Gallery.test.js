import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { GalleryContainer, GalleryImage } from './index';

test('it works', () => {
	let tree = renderer.create(<GalleryContainer/>).toJSON();
	expect(tree).toMatchSnapshot();

	tree = renderer.create(<GalleryImage/>).toJSON();
	expect(tree).toMatchSnapshot();
});
