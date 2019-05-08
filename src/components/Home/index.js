import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import {Gallery} from './components';

import { rGetPhotos } from '../../resources/jsonPlaceholder';



class Home extends Component {
	constructor(props) {
		super(props);

		this._getPhotos = this._getPhotos.bind(this);

		this.state = {
			photos: []
		};
	}

	componentDidMount() {
		this._getPhotos();
	}

	_getPhotos() {
		return rGetPhotos().then((response) => {
			let tmpArr = [];

			const objArr = _.filter(response, (val) => val.albumId === 1);

			_.forIn(objArr, (elem) => {
				tmpArr.push(elem);
			});

			this.setState({ photos: tmpArr });
		});
	}

	render() {
		const {photos} = this.state;
		return (
			<Gallery photoArr={photos} />
		);
	}
}


export default connect()(Home);