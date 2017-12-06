import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

import AppNavigationStyles from '../../styles/Explore/Explore';
import QuizIcon from '../../assets/img/explore/quiz.png';
import MoreNavigation from './QuizNavigation';

const styles = StyleSheet.create(AppNavigationStyles);

class QuizWrapper extends Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',
    tabBarLabel: 'Quiz',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={QuizIcon}
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
