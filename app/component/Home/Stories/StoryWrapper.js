import React, { Component } from 'react';

import StoryNavigation from './StoryNavigation';
import COLORS from '../../../styles/Common/Colors';

class StoryWrapper extends Component {
  static navigationOptions = {
    title: 'Stories',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE, textAlign: 'left' },
    // header: null,
    // headerMode: 'none',
  };

  render() {
    return (<StoryNavigation />);
  }
}

export default StoryWrapper;
