// import { SplashActionTypes } from './SplashActions';
import { AuthActionTypes } from './AuthActions';

const initialState = {
  token: '',
  id: '',
  username: '',
  plan: '',
};

const splashReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionTypes.STORE_AUTH_TOKEN:
      return { ...state, token: action.payload };
    case AuthActionTypes.STORE_USER_ID:
      return { ...state, id: action.payload };
    case AuthActionTypes.STORE_USER_NAME:
      return { ...state, username: action.payload };
    case AuthActionTypes.STORE_USER_PLAN:
      return { ...state, plan: action.payload };
    default:
      return state;
  }
};

export default splashReducer;
