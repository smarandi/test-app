import { StackNavigator } from 'react-navigation';

import ScoreCard from './ScoreCard';
import Search from './Search';

const Routes = {
  ScoreCard: { screen: ScoreCard },
  Search: { screen: Search },
};

export default StackNavigator(Routes);
