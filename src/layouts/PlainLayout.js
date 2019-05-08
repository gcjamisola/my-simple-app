import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Wrapper } from '../styles';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway');

	body {
		font-family: 'Raleway', sans-serif;
		margin: 0;
	}
`;

class PlainLayout extends Component {
	render() {
		return (
			<Wrapper>
				<GlobalStyle />
				<Header />
				{this.props.children}
				<Footer />
			</Wrapper>
		);
	}
}

PlainLayout.propTypes = {
	children: PropTypes.node
};


export { PlainLayout };