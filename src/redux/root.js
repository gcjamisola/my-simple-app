import { combineReducers } from 'redux';

import permissionReducer from './Permission/reducer';

export const reducers = combineReducers({
    permission: permissionReducer
});