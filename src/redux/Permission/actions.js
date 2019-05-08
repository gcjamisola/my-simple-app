/**
 * CONSTANTS
 */
export const CHANGE_PERMISSION = 'PERMISSION/CHANGE_PERMISSION';

/**
 * PURE
 */
export const changePermission = roleID => ({ type: CHANGE_PERMISSION, roleID });
