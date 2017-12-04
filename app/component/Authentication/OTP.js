import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import styles from '../../styles/Auth/OTP';

const mobileNumberInputStyle = Platform.select(styles.textInput);

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


  componentDidMount() {
  }

  render() {
    return (
      <View style={styles.overlayContainer}>
        <View style={styles.mobileViewContainer}>
          <Text style={styles.mobileViewLabel}> Enter the code sent to the registered</Text>
          <Text style={styles.mobileViewLabel}> mobile number.
            <Text style={styles.changeNumber} accessible onPress={() => {}}> Change Number</Text>
          </Text>
          <Text style={styles.resendCode}> Resend Code</Text>
          <View style={styles.inputContainer}>
            <TextInput style={mobileNumberInputStyle} />
            <TextInput style={mobileNumberInputStyle} />
            <TextInput style={mobileNumberInputStyle} />
            <TextInput style={mobileNumberInputStyle} />
          </View>
          <TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Login</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default MobileNumber;

