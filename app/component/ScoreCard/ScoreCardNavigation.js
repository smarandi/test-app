import { StackNavigator } from 'react-navigation';

import ScoreCard from './ScoreCard';
import Search from './Search';

const Routes = {
  Search: { screen: Search },
  ScoreCard: { screen: ScoreCard },
};

export default StackNavigator(Routes);
