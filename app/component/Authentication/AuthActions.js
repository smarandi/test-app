
const AuthActionTypes = {
  STORE_AUTH_TOKEN: 'AUTH/STORE_AUTH_TOKEN',
  STORE_USER_ID: 'AUTH/STORE_USER_ID',
  STORE_USER_NAME: 'AUTH/STORE_USER_NAME',
  STORE_USER_PLAN: 'AUTH/STORE_USER_PLAN',
};

const AuthActions = {

  storeAuthToken: payload => ({ type: AuthActionTypes.STORE_AUTH_TOKEN, payload }),

  storeUserId: payload => ({ type: AuthActionTypes.STORE_USER_ID, payload }),

  storeUserName: payload => ({ type: AuthActionTypes.STORE_USER_NAME, payload }),

  storeUserPlan: payload => ({ type: AuthActionTypes.STORE_USER_PLAN, payload }),

  storeAuthenticationCredentials: payload => (dispatch) => {
    const {
      auth_token, user_id, username, plan,
    } = payload;
    dispatch(AuthActions.storeAuthToken(auth_token));
    dispatch(AuthActions.storeUserId(user_id));
    dispatch(AuthActions.storeUserName(username));
    dispatch(AuthActions.storeUserPlan(plan));
  },
};

export {
  AuthActionTypes,
  AuthActions,
};
