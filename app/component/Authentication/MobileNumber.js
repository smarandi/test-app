import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Platform } from 'react-native';
import Styles from '../../styles/Auth/MobileNumber';

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


  componentDidMount() {
  }

  render() {
    return (
      <View style={Styles.overlayContainer}>
        <View style={Styles.mobileViewContainer}>
          <Text style={Styles.mobileViewLabel}> Enter the registered</Text>
          <Text style={Styles.mobileViewLabel}> mobile number.</Text>
          <TextInput style={mobileNumberInputStyle} />
          <TouchableOpacity>
            <View style={Styles.buttonContainer}>
              <Text style={Styles.buttonText}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={Styles.registrationText}>Not Registered?
          <Text accessible onPress={() => console.log('I am pressed')}> Register Here.</Text>
        </Text>
      </View>
    );
  }
}

export default MobileNumber;

