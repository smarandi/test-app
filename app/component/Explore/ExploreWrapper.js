import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

import AppNavigationStyles from '../../styles/Explore/Explore';
import exploreImage from '../../assets/img/explore/explore.png';
import ExploreNavigation from './ExploreNavigation';

const styles = StyleSheet.create(AppNavigationStyles);

class ExploreScreen extends Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',
    tabBarLabel: 'Explore',
    tabBarIcon: ({ tintColor }) => (<Image source={exploreImage} style={[styles.icon, { tintColor }]} />
    ),
  };

  render() {
    return (<ExploreNavigation />);
  }
}


export default ExploreScreen;
