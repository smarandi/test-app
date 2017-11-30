/* eslint-disable react/no-multi-comp */
// import React, { Component } from 'react';
// import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Explore from './Explore';
import Quiz from './Quiz';
import ScoreCard from './ScoreCard';
import Settings from './Settings';
import COLORS from '../../styles/Colors';


const Routes = {
  Explore: { screen: Explore },
  Quiz: { screen: Quiz },
  ScoreCard: { screen: ScoreCard },
  Settings: { screen: Settings },
};

// const tabStyle = {
//   ios: {},
//   android: {}
// };

const NavigationOptions = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: COLORS.BACKGROUND_COLOR_SECONDARY,
    inactiveTintColor: COLORS.BACKGROUND_COLOR_SHADE,
    showIcon: true,
    labelStyle: { fontSize: 12 },
    tabStyle: { width: 100 },
    upperCaseLabel: false,
    allowFontScaling: false,
    style: {
      backgroundColor: COLORS.WHITE,
    },
  },
};

export default TabNavigator(Routes, NavigationOptions);

// class Home extends Component {
//   static navigationOptions = {
//     header: null,
//     headerMode: 'none',
//   };
//   componentDidMount() {
//   }
//
//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     );
//   }
// }
// export default Home;
//
// class MyNotificationsScreen extends React.Component {
//   static navigationOptions = {
//     tabBarLabel: 'Notifications',
//     tabBarIcon: ({ tintColor }) => (
//       <Image
//         source={{ uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/104020-200.png' }}
//         style={[styles.icon, { tintColor }]}
//       />
//     ),
//   };
//
//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.goBack()}
//         title="Go back home"
//       />
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   icon: {
//     width: 26,
//     height: 26,
//   },
// });
//
// const MyApp = TabNavigator({
//   Home: { screen: Home },
//   Notifications: { screen: MyNotificationsScreen },
// }, {
//   tabBarPosition: 'bottom',
//   animationEnabled: true,
//   tabBarOptions: {
//     activeTintColor: '#e91e63',
//   },
// });
//
// export default MyApp;
