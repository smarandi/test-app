import React, { Component } from 'react';
import { Text, View } from 'react-native';
import COLORS from '../../styles/Colors';

class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  render() {
    return (
      <View>
        <Text>
          Hello Home
        </Text>
      </View>
    );
  }
}

export default Home;
