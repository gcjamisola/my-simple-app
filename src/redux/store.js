import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './root';
import { composeWithDevTools } from 'redux-devtools-extension';

let makeStore;

let middleware = applyMiddleware(thunk);

if (process.env.ENABLE_REDUX_CHROME_EXTENSION === 'true') {
  makeStore = initialState =>
    createStore(reducers, initialState, composeWithDevTools(middleware));
} else {
  makeStore = initialState => createStore(reducers, initialState, middleware);
}

export default makeStore;
