// import { SplashActionTypes } from './SplashActions';
import { ScoreCardActionTypes } from './ScoreCardActions';

const initialState = {
  data: [],
  totalTimeSpent: 0,
};

const scoreCardReducer = (state = initialState, action) => {
  switch (action.type) {
    case ScoreCardActionTypes.LOAD_DATA:
      return { ...state, data: action.payload };
    case ScoreCardActionTypes.LOAD_TIME_SPENT:
      return { ...state, totalTimeSpent: action.payload };
    default:
      return state;
  }
};

export default scoreCardReducer;
