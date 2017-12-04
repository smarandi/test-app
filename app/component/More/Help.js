/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import COLORS from '../../styles/Common/Colors';
import HelpStyles from '../../styles/More/Help';

import Phone from '../../assets/img/more/phone-help.png';
import Mail from '../../assets/img/more/mail.png';


class Help extends Component {
  static navigationOptions = {
    title: 'Help & Feedback',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  render() {
    return (
      <View style={HelpStyles.container}>
        <View style={{ flex: 2 }}>
          <View style={HelpStyles.phoneNumberContainer}>
            <Text style={HelpStyles.phoneInfoText}>For any queries, please call us at</Text>
            <View>
              <View style={HelpStyles.phoneCallToAction}>
                <Image
                  source={Phone}
                  style={HelpStyles.phoneIcon}
                  resizeMode="contain"
                />
                <Text style={HelpStyles.phoneText}>+91 9975165183</Text>
              </View>
            </View>
          </View>
          <View style={HelpStyles.emailContainer} >
            <Text style={HelpStyles.phoneInfoText}>or mail us at</Text>
            <View>
              <View style={HelpStyles.emailCallToAction}>
                <Image
                  source={Mail}
                  style={HelpStyles.phoneIcon}
                  resizeMode="contain"
                />
                <View>
                  <Text style={HelpStyles.emailText}>akshay@inspirescareers.com</Text>
                  <Text style={HelpStyles.emailText}>vitasta@inspirescareers.com</Text>
                </View>
              </View>
            </View>

          </View>
        </View>
        <View style={HelpStyles.linkContainer}>
          <Text style={HelpStyles.linkText}>Link to our website</Text>
          <View style={HelpStyles.button}>
            <Text style={HelpStyles.buttonText}>www.inspirescareer.com</Text>
          </View>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}

export default Help;
