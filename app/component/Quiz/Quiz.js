import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import AppNavigationStyles from '../../styles/Quiz/Quiz';
import exploreImage from '../../assets/img/explore/quiz.png';

const styles = StyleSheet.create(AppNavigationStyles);


class Quiz extends Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',
    tabBarLabel: 'Quizzes',
    tabBarIcon: ({ tintColor }) =>
      (<Image
        source={exploreImage}
        style={[styles.icon, { tintColor }]}
        resizeMode="contain"
      />
      ),
  };

  render() {
    return (
      <View>
        <Text>
          Quiz
        </Text>
      </View>
    );
  }
}

export default Quiz;
