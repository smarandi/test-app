import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import AppNavigationStyles from '../../styles/ScoreCard';
import exploreImage from '../../assets/img/explore/scorecard.png';

const styles = StyleSheet.create(AppNavigationStyles);


class ScoreCard extends Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',
    tabBarLabel: 'Score Card',
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
          Score Card
        </Text>
      </View>
    );
  }
}

export default ScoreCard;
