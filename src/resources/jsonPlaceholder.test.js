import {
	rGetPhotos
} from './jsonPlaceholder';

describe('rGetPhotos using Promises', () => {

	it('should return photo data', () => {
		return rGetPhotos()
			.then((response) => {
				expect(response).toBeDefined();
			});
	});
});