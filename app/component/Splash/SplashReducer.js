

import { SplashActionTypes } from './SplashActions';

const initialState = {
  data: { test: 'Hello World' },
};

const splashReducer = (state = initialState, action) => {
  switch (action.type) {
    case SplashActionTypes:
      return {
        ...state,
        data: {
          ...state.data,
          test: 'Reducer Hit',
        },
      };
    default:
      return state;
  }
};

export default splashReducer;
