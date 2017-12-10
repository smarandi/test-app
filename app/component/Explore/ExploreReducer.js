// import { SplashActionTypes } from './SplashActions';
import { ExploreActionTypes } from './ExploreActions';

const initialState = {
  data: [],
  plan: 'PAID', /* TODO: SET DEFAULT TO TRIAL */
};

const exploreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ExploreActionTypes.LOAD_DATA:
      return { ...state, data: action.payload };
    case ExploreActionTypes.LOAD_SUBSCRIPTION_STATUS:
      return { ...state, plan: action.payload.plan };
    default:
      return state;
  }
};

export default exploreReducer;
