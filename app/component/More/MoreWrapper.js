import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

import AppNavigationStyles from '../../styles/Explore/Explore';
import MoreIcon from '../../assets/img/explore/more.png';
import MoreNavigation from './MoreNavigation';

const styles = StyleSheet.create(AppNavigationStyles);

class MoreWrapper extends Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',
    tabBarLabel: 'More',
    tabBarIcon: ({ tintColor }) => (<Image source={MoreIcon} style={[styles.icon, { tintColor }]} />
    ),
  };

  render() {
    return (<MoreNavigation />);
  }
}

export default MoreWrapper;
