import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Stories from './Stories';

const Routes = {
  Home: { screen: Home },
  Stories: { screen: Stories },
};

export default StackNavigator(Routes);
