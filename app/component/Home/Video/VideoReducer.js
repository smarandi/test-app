// import { SplashActionTypes } from './SplashActions';
import { VideoActionTypes } from './VideoActions';

const initialState = {
  course: {},
};

const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case VideoActionTypes.LOAD_DATA:
      return { ...state, course: action.payload };
    default:
      return state;
  }
};

export default videoReducer;
