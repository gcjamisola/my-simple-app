import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { GalleryContainer, GalleryImage } from '../../../../styles';

class Gallery extends Component {
	constructor(props) {
		super(props);

		this.state = {
			photoArr: []
		};

		this._mountPhotos = this._mountPhotos.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.photoArr !== this.props.photoArr) {
			this.setState({photoArr: nextProps.photoArr});
		}
	}

	_mountPhotos() {
		const {photoArr} = this.state;
		return _.map(photoArr, ({thumbnailUrl}, i) => {
			return (
				<GalleryImage key={i} src={thumbnailUrl} />
			);
		});
	}

	render() {
		return(
			<GalleryContainer>
				{this._mountPhotos()}
			</GalleryContainer>
		);
	}
}

Gallery.propTypes = {
	photoArr: PropTypes.array
};

export { Gallery };