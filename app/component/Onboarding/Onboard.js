import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import Styles from '../../styles/Onboard';
import background from '../../assets/img/onboardingbackground.png';
import firstImage from '../../assets/img/onboarding-1.png';

/* TODO: Implement Carousel */
class Onboard extends Component {
  /**
   * Header and Header Mode set to null & none to remove
   * the top header from a screen/View
   * @type {{header: null, headerMode: string}}
   */
  static navigationOptions = {
    header: null,
    headerMode: 'none',
  };

  componentDidMount() {
  }

  render() {
    return (
      <View style={Styles.container}>
        <Image source={background} style={Styles.background} resizeMode="contain" />
        <View style={Styles.overlayContainer}>
          <Image source={firstImage} style={Styles.overlayContent} resizeMode="contain" />
        </View>
        <Text style={Styles.onBoardingText}>Understanding Yourself</Text>
      </View>
    );
  }
}

export default Onboard;

