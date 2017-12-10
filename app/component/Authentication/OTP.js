/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View, TextInput, TouchableOpacity, Platform, Image } from 'react-native';
import styles from '../../styles/Auth/OTP';
import AuthStyles from '../../styles/Auth/Auth';
import background from '../../assets/img/onboardingbackground.png';
import { login } from '../../services/Auth';
import { AuthActions } from './AuthActions';

const mobileNumberInputStyle = Platform.select(styles.textInput);

@connect(store => ({ auth: store.auth }))
class OTP extends Component {
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
    navigation: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  state = {
    firstDigit: '',
    secondDigit: '',
    thirdDigit: '',
    fourthDigit: '',
  };

  handleSuccess = ({ status, data }) => {
    const {
      auth_token, user_id, username, plan,
    } = data;
    /* TODO: Handle Different Status Codes other than 200 */
    switch (status) {
      case 200:
        this.props.dispatch(AuthActions.storeAuthenticationCredentials({
          auth_token, user_id, username, plan,
        }));
        this.props.navigation.navigate('Home');
        break;
      default:
        this.props.navigation.navigate('MobileNumber');
    }
  };

  handleLoginClick = () => {
    const {
      firstDigit, secondDigit, thirdDigit, fourthDigit,
    } = this.state;
    const otp = `${firstDigit}${secondDigit}${thirdDigit}${fourthDigit}`;
    const { phone } = this.props.navigation.state.params;
    const formData = new FormData();

    formData.append('phone_number', phone);
    formData.append('otp', otp);

    login(formData).then(data => this.handleSuccess(data)).catch(() => {});
  };

  render() {
    const {
      firstDigit, secondDigit, thirdDigit, fourthDigit,
    } = this.state;
    return (
      <View style={AuthStyles.container}>
        <Image source={background} style={AuthStyles.background} resizeMode="contain" />
        <View style={styles.overlayContainer}>
          <View style={styles.mobileViewContainer}>
            <Text style={styles.mobileViewLabel}> Enter the code sent to the registered</Text>
            <Text style={styles.mobileViewLabel}> mobile number.
              <Text style={styles.changeNumber} accessible onPress={() => this.props.navigation.goBack()}> Change Number</Text>
            </Text>
            <Text style={styles.resendCode}> Resend Code</Text>
            <View style={styles.inputContainer}>
              <TextInput
                value={firstDigit}
                style={mobileNumberInputStyle}
                onChangeText={text => this.setState({ firstDigit: text })}
              />
              <TextInput
                value={secondDigit}
                style={mobileNumberInputStyle}
                onChangeText={text => this.setState({ secondDigit: text })}
              />
              <TextInput
                value={thirdDigit}
                style={mobileNumberInputStyle}
                onChangeText={text => this.setState({ thirdDigit: text })}
              />
              <TextInput
                value={fourthDigit}
                style={mobileNumberInputStyle}
                onChangeText={text => this.setState({ fourthDigit: text })}
              />
            </View>
            <TouchableOpacity
              onPress={() => this.handleLoginClick()}
            >
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default OTP;

