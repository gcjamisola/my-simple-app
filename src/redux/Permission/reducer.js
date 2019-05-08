import * as actions from './actions';

const initState = {
  roleID: 1
};

const permissionReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.CHANGE_PERMISSION:
      return {
        ...state,
        roleID: action.roleID
      };

    default:
      return state;
  }
};

export default permissionReducer;
