/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import COLORS from '../../styles/Common/Colors';
import ParentStyles from '../../styles/More/Parent';
import ParentHeaderIcon from '../../assets/img/more/parent-app.png';
import ParentBackground from '../../assets/img/more/parent-app-background.png';

class Parent extends Component {
  static navigationOptions = {
    title: 'Parent App',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={ParentStyles.headerSection}>
          <Image
            source={ParentBackground}
            style={ParentStyles.backgroundImage}
            resizeMode="contain"
          />
          <View style={ParentStyles.headerIconContainer}>
            <Image
              source={ParentHeaderIcon}
              style={ParentStyles.headerIcon}
              resizeMode="contain"
            />
            <Text style={ParentStyles.textInfo}>
              Know more about your kid's interests
            </Text>
          </View>
        </View>
        <View style={ParentStyles.instructionContainer}>
          <Text style={ParentStyles.instructionHeader}>Follow these steps to login in to Parent App</Text>
          <Text style={ParentStyles.bullet}>1. Enter the registered mobile number.</Text>
          <Text style={ParentStyles.info}>+91 9988899888</Text>
          <Text style={ParentStyles.bullet}>2. Enter the below mention parent code.</Text>
          <Text style={ParentStyles.info}>WA3DS4</Text>
        </View>
        <View style={ParentStyles.buttonContainer}>
          <TouchableOpacity style={ParentStyles.button}>
            <Text style={ParentStyles.buttonText}>Get Parent App</Text>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}

export default Parent;
//
// <Text>
//   Hello Parent
// </Text>
