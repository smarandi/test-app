import { StackNavigator } from 'react-navigation';
import MobileNumber from './MobileNumber';
import OTP from './OTP';
import Register from './Register';
import Home from '../AppNavigation';

const Routes = {
  Home: { screen: Home },
  MobileNumber: { screen: MobileNumber },
  OTP: { screen: OTP },
  Register: { screen: Register },
};

const NavigationOptions = {
  header: null,
  headerMode: 'none',
};

export default StackNavigator(Routes, NavigationOptions);

//
// class AuthNavigation extends Component {
//   /**
//    * Header and Header Mode set to null & none to remove
//    * the top header from a screen/View
//    * @type {{header: null, headerMode: string}}
//    */
//   static navigationOptions = {
//   };
//
//   render() {
//     return (
//       <View style={Styles.container}>
//         <Image source={background} style={Styles.background} resizeMode="contain" />
//         <MobileNumber />
//       </View>
//     );
//   }
// }
//
// export default AuthNavigation;
// StackNavigator({
//   MobileNumber: { screen: MobileNumber },
//   OTP: { screen: OTP },
//   Register: { screen: Register },
// });
//
// <Register />
// <OTP />
// import React, { Component } from 'react';
// import { View, Image } from 'react-native';
// // import { StackNavigator } from 'react-navigation';
// import Styles from '../../styles/Auth/Auth';
// import background from '../../assets/img/onboardingbackground.png';
