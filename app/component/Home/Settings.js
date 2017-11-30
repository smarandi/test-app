import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import AppNavigationStyles from '../../styles/Settings';
import exploreImage from '../../assets/img/explore/more.png';

const styles = StyleSheet.create(AppNavigationStyles);


class ScoreCard extends Component {
  static navigationOptions = {
    header: null,
    headerMode: 'none',
    tabBarLabel: 'More',
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
          More
        </Text>
      </View>
    );
  }
}

export default ScoreCard;
