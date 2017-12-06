import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

import AppNavigationStyles from '../../styles/Explore/Explore';
import MoreIcon from '../../assets/img/explore/more.png';
import MoreNavigation from './QuizNavigation';

const styles = StyleSheet.create(AppNavigationStyles);

class QuizWrapper extends Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',
    tabBarLabel: 'Quiz',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={MoreIcon}
        style={[styles.icon, { tintColor }]}
        resizeMode="contain"
      />
    ),
  };

  render() {
    return (<MoreNavigation />);
  }
}

export default QuizWrapper;
