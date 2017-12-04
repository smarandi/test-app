import { StackNavigator } from 'react-navigation';

import More from './More';
import Policy from './Policy';
import Help from './Help';
import Parent from './Parent';

const Routes = {
  More: { screen: More },
  Help: { screen: Help },
  Parent: { screen: Parent },
  Policy: { screen: Policy },
};

export default StackNavigator(Routes);
