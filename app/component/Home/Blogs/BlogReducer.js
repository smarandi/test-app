// import { SplashActionTypes } from './SplashActions';
import { BlogActionTypes } from './BlogActions';

const initialState = {
  data: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case BlogActionTypes.LOAD_DATA:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default blogReducer;
