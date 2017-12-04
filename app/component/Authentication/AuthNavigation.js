import React, { Component } from 'react';
import { View, Image } from 'react-native';
// import { StackNavigator } from 'react-navigation';
import Styles from '../../styles/Auth/Auth';
import background from '../../assets/img/onboardingbackground.png';
import MobileNumber from './MobileNumber';
import OTP from './OTP';
import Register from './Register';

class AuthNavigation extends Component {
  /**
   * Header and Header Mode set to null & none to remove
   * the top header from a screen/View
   * @type {{header: null, headerMode: string}}
   */
  static navigationOptions = {
    header: null,
    headerMode: 'none',
  };

  render() {
    return (
      <View style={Styles.container}>
        <Image source={background} style={Styles.background} resizeMode="contain" />
        <MobileNumber />
        {/* <Register /> */}
        {/* <OTP /> */}
      </View>
    );
  }
}

export default AuthNavigation;
// StackNavigator({
//   MobileNumber: { screen: MobileNumber },
//   OTP: { screen: OTP },
//   Register: { screen: Register },
// });

