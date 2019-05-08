import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PlainLayout } from './layouts';

import Home from './components/Home';
import Register from './components/Register';
import Email from './components/Email';
import Permissions from './components/Permissions';

const Root = ({ store }) => {
	return (
		<Provider store={store}>
			<Router>
				<PlainLayout>
					<Route exact path="/" component={Home} />
					<Route path="/register" component={Register} />
					<Route path="/email" component={Email} />
					<Route path="/permissions" component={Permissions} />
				</PlainLayout>
			</Router>
		</Provider>
	);
};

Root.propTypes = {
	store: PropTypes.object.isRequired
};

export default Root;