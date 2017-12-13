import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, TouchableOpacity, Image, Platform } from 'react-native';
import { isEmpty, isLength, isMobilePhone, isNumeric } from 'validator';

import Styles from '../../styles/Auth/MobileNumber';
import AuthStyles from '../../styles/Auth/Auth';
import background from '../../assets/img/onboardingbackground.png';
import { generate } from '../../services/Auth';

const mobileNumberInputStyle = Platform.select(Styles.textInput);

class MobileNumber extends Component {
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
  };

  state = {
    text: '',
  };

  handleTextInputChange = text => this.setState({ text })

  handleSuccess = (res) => {
    /* TODO: Handle Different Status Codes other than 200 */
    switch (res.status) {
      case 101:
        this.props.navigation.navigate('Register');
        break;
      default:
        this.props.navigation.navigate('OTP', { phone: this.state.text });
    }
  };

  handleLoginClick = () => {
    const formData = new FormData();
    formData.append('phone_number', this.state.text);

    generate(formData)
      .then(res => this.handleSuccess(res))
      .catch(() => {}); // this.props.navigation.navigate('Register'));
  /* TODO: Appropriately Handle This Catch on Application Level */
  };

  render() {
    return (
      <View style={AuthStyles.container}>
        <Image source={background} style={AuthStyles.background} resizeMode="contain" />
        <View style={Styles.overlayContainer}>
          <View style={Styles.mobileViewContainer}>
            <Text style={Styles.mobileViewLabel}> Enter the registered</Text>
            <Text style={Styles.mobileViewLabel}> mobile number.</Text>
            <TextInput
              maxLength={10}
              value={this.state.text}
              keyboardType="numeric"
              style={mobileNumberInputStyle}
              onChangeText={text => this.handleTextInputChange(text)}
            />
            <TouchableOpacity
              onPress={() => this.handleLoginClick()}
            >
              <View style={Styles.buttonContainer}>
                <Text style={Styles.buttonText}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={Styles.registrationText}>Not Registered?
            <Text
              accessible
              onPress={() => this.props.navigation.navigate('Register')}
            > Register Here.
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

export default MobileNumber;

