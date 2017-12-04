import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

import AppNavigationStyles from '../../styles/Explore/Explore';
import scorecard from '../../assets/img/explore/scorecard.png';
import ScoreCardNavigation from './ScoreCardNavigation';

const styles = StyleSheet.create(AppNavigationStyles);

class ScoreCardWrapper extends Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',
    tabBarLabel: 'Score Card',
    tabBarIcon: ({ tintColor }) => (<Image source={scorecard} style={[styles.icon, { tintColor }]} />
    ),
  };

  render() {
    return (<ScoreCardNavigation />);
  }
}

export default ScoreCardWrapper;
