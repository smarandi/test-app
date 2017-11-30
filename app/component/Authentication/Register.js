import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import styles from '../../styles/Register';

// const mobileNumberInputStyle = Platform.select(styles.textInput);
// const fullWidthTextInput = Platform.select(styles.fullWidthTextInput);
class Register extends Component {
  /**
   * Header and Header Mode set to null & none to remove
   * the top header from a screen/View
   * @type {{header: null, headerMode: string}}
   */
  static navigationOptions = {
    header: null,
    headerMode: 'none',
  };

  static classes= [
    { value: 'VIII' },
    { value: 'IX' },
    { value: 'X' },
    { value: 'XI' },
    { value: 'XII' },
  ];

  static cities=[
    { value: 'Mumbai' },
    { value: 'Bengaluru' },
    { value: 'Chennao' },
    { value: 'Delhi' },
    { value: 'Pune' },
  ];

  static area = [];

  state={
    selectedClass: 'X',
    selectedCity: '',
    selectedArea: '',
  };


  componentDidMount() {
  }

  render() {
    const { selectedClass, selectedCity, selectedArea } = this.state;
    return (
      <View style={styles.overlayContainer}>
        <View style={Platform.select(styles.mobileViewContainer)}>
          <View>
            <Text>Name</Text>
            <TextInput style={Platform.select(styles.fullWidthTextInput)} />
          </View>
          <View style={styles.classAndSchoolContainer}>
            <View style={styles.classDropdownContainer}>
              <Dropdown
                label="Class"
                data={Register.classes}
                baseColor="rgba(0,0,0,1)"
                value={selectedClass}
              />
            </View>
            <View style={styles.schoolInputContainer}>
              <Text>School</Text>
              <TextInput style={Platform.select(styles.schoolInputText)} />
            </View>
          </View>
          <View style={styles.emailAndMobileContainer}>
            <Text>Email ID</Text>
            <TextInput style={Platform.select(styles.fullWidthTextInput)} />
          </View>
          <View style={styles.emailAndMobileContainer}>
            <Text>Mobile Number</Text>
            <TextInput style={Platform.select(styles.fullWidthTextInput)} />
          </View>
          <View style={styles.classAndSchoolContainer}>
            <View style={styles.cityDropdown}>
              <Dropdown
                label="City"
                data={Register.classes}
                baseColor="rgba(0,0,0,1)"
                value={selectedCity}
              />
            </View>
            <View style={styles.areaDropdown}>
              <Dropdown
                label="Area"
                data={Register.area}
                baseColor="rgba(0,0,0,1)"
                value={selectedArea}
              />
            </View>
          </View>
          <View style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.loginTextContainer}>
          <Text style={styles.loginText}>Already Registered?
            <Text accessible onPress={() => console.log('I am pressed')}> Login Here.</Text>
          </Text>

          {/* <Text style={styles.termsAndConditionsText}>By registering you agree to our */}
          {/* <Text accessible onPress={() => console.log('I am pressed')}> Terms and Privacy Policy.</Text> */}
          {/* </Text> */}
        </View>
      </View>
    );
  }
}

export default Register;

/* Add Terms and Condition */
