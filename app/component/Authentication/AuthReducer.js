// import { SplashActionTypes } from './SplashActions';
import { AuthActionTypes } from './AuthActions';

const initialState = {
  token: '1d866253385f7497dd2def1a5c0adf58314788f79e014f658ce6f61e749f8b7e',
  id: 'a7a24e90f734d9204c1a9be60e138bba439ff4101efa2957dc10eed067cda3b4',
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
