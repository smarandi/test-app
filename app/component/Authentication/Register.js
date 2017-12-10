import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, TouchableOpacity, Platform, Image, ScrollView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import styles from '../../styles/Auth/Register';
import AuthStyles from '../../styles/Auth/Auth';
import background from '../../assets/img/onboardingbackground.png';
import { register } from '../../services/Auth';
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
    { value: 'Chennai' },
    { value: 'Delhi' },
    { value: 'Pune' },
  ];

  static area = [];

  state={
    firstName: '',
    lastName: '',
    school: '',
    userName: '',
    emailId: '',
    mobileNumber: '',
    selectedClass: 'X',
    selectedCity: '',
    selectedArea: '',
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  handleSubmit = () => {
    const {
      selectedClass, selectedCity, selectedArea, firstName, lastName, school, emailId, mobileNumber, userName,
    } = this.state;

    const formData = new FormData();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('username', userName);
    formData.append('email_id', emailId);
    formData.append('phone_number', mobileNumber);
    formData.append('school', school);
    formData.append('class', selectedClass);
    formData.append('city', selectedCity);
    formData.append('area', selectedArea);

    /* TODO: Handle Different Status Codes other than 200 */
    register(formData)
      .then(response => (response.status === 200 ? this.props.navigation.navigate('MobileNumber') : '')
        .catch());
    // this.props.navigation.navigate('MobileNumber');
  };

  render() {
    const {
      selectedClass, selectedCity, selectedArea, firstName, lastName, school, emailId, mobileNumber, userName,
    } = this.state;
    return (
      <View style={AuthStyles.container}>
        <Image source={background} style={AuthStyles.background} resizeMode="contain" />
        <ScrollView style={styles.overlayContainer}>
          <View style={Platform.select(styles.mobileViewContainer)}>
            <View>
              <Text>Firstname</Text>
              <TextInput
                value={firstName}
                onChangeText={text => this.setState({ firstName: text })}
                style={Platform.select(styles.fullWidthTextInput)}
              />
            </View>
            <View>
              <Text style={{ paddingTop: 10 }}>Lastname</Text>
              <TextInput
                value={lastName}
                onChangeText={text => this.setState({ lastName: text })}
                style={Platform.select(styles.fullWidthTextInput)}
              />
            </View>
            <View>
              <Text style={{ paddingTop: 10 }}>Username</Text>
              <TextInput
                value={userName}
                onChangeText={text => this.setState({ userName: text })}
                style={Platform.select(styles.fullWidthTextInput)}
              />
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
                <TextInput
                  value={school}
                  onChangeText={text => this.setState({ school: text })}
                  style={Platform.select(styles.schoolInputText)}
                />
              </View>
            </View>
            <View style={styles.emailAndMobileContainer}>
              <Text>Email ID</Text>
              <TextInput
                value={emailId}
                onChangeText={text => this.setState({ emailId: text })}
                style={Platform.select(styles.fullWidthTextInput)}
              />
            </View>
            <View style={styles.emailAndMobileContainer}>
              <Text>Mobile Number</Text>
              <TextInput
                value={mobileNumber}
                onChangeText={text => this.setState({ mobileNumber: text })}
                style={Platform.select(styles.fullWidthTextInput)}
              />
            </View>
            <View style={styles.classAndSchoolContainer}>
              <View style={styles.cityDropdown}>
                <Dropdown
                  label="City"
                  data={Register.cities}
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
              <TouchableOpacity
                onPress={() => this.handleSubmit()}
              >
                <View style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Continue</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.loginTextContainer}>
            <Text style={styles.loginText}>Already Registered?
              <Text accessible onPress={() => this.props.navigation.goBack()}> Login Here.</Text>
            </Text>

            {/* <Text style={styles.termsAndConditionsText}>By registering you agree to our */}
            {/* <Text accessible onPress={() => console.log('I am pressed')}> Terms and Privacy Policy.</Text> */}
            {/* </Text> */}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Register;

/* Add Terms and Condition */
