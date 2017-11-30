import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Stories extends Component {
  static navigationOptions = {
    title: 'Stories',
  };

  render() {
    return (
      <View>
        <Text>
          Hello Story
        </Text>
      </View>
    );
  }
}

export default Stories;
