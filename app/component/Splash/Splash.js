import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View, StyleSheet, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { SplashActions } from './SplashActions';
import Onboard from '../Onboarding/Onboard';
import Auth from '../Authentication/AuthNavigation';
import Home from '../AppNavigation';
import Styles from '../../styles/Common/Splash';
import logo from '../../assets/img/logo.png';

@connect(store => ({ splash: store.splash }))
class Splash extends Component {
  /**
   * Header and Header Mode set to null & none to remove
   * the top header from a screen/View
   * @type {{header: null, headerMode: string}}
   */
  static navigationOptions = {
    header: null,
    headerMode: 'none',
  };

  static propTypes = {
    splash: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  /**
   * Fired the load reducer (is used for logging application activity)
   */
  componentDidMount() {
    this.props.dispatch(SplashActions.load());
    setTimeout(() => this.props.navigation.navigate('Auth'), 1000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={Styles.logo}
          source={logo}
          resizeMode="contain"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create(Styles);

/**
 * This is base splash screen that
 * can be seen with inspire logo.
 * It is wrapped in a stack navigator
 */
export default StackNavigator({
  Splash: { screen: Splash },
  Onboard: { screen: Onboard },
  Auth: { screen: Auth },
  Home: { screen: Home },
});
