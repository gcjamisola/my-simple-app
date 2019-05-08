require('./index.config');
import React from 'react';
import { render } from 'react-dom';
import makeStore from './redux/store';

import App from './app';

render( <App store={makeStore()}/>,
	document.getElementById('root')
);