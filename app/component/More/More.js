/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import PropTypes from 'prop-types';

import COLORS from '../../styles/Common/Colors';
import MoreStyles from '../../styles/More/More';

import CampaignImage from '../../assets/img/more/campaign.png';
import FacebookIcon from '../../assets/img/more/facebook.png';
import InstagramIcon from '../../assets/img/more/instagram.png';
import LinkedInIcon from '../../assets/img/more/linkedin.png';

import Help from '../../assets/img/more/help.png';
import ChevronRight from '../../assets/img/more/chevron-right.png';
import Profile from '../../assets/img/more/profile.png';
import Phone from '../../assets/img/more/phone.png';
import Terms from '../../assets/img/more/terms.png';

class More extends Component {
  static navigationOptions = {
    title: 'More',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  static propTypes={
    navigation: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={MoreStyles.campaignContainer}>
          <Text style={MoreStyles.campaignContainerTitle}>Inspire's Corner</Text>
          <View style={MoreStyles.campaignCarouselSection}>
            <View style={MoreStyles.campaignCarouselContainer}>
              <Image
                source={CampaignImage}
                style={MoreStyles.campaignImage}
                resizeMode="cover"
              />
            </View>
            <View style={MoreStyles.campaignTitleContainer}>
              <Text style={Platform.select(MoreStyles.campaignTitle)}>Inspire's Corner: Campaign No. 1</Text>
            </View>
          </View>
        </View>
        <View style={MoreStyles.socialMediaContainer}>
          <Text style={MoreStyles.socialMediaText}>
            Social Media Links
          </Text>
          <View style={MoreStyles.socialMediaIconContainer}>
            <Image
              accessible
              source={FacebookIcon}
              style={MoreStyles.socialMediaIcons}
              resizeMode="cover"
            />
            <Image
              accessible
              source={InstagramIcon}
              style={MoreStyles.socialMediaIcons}
              resizeMode="cover"
            />
            <Image
              accessible
              source={LinkedInIcon}
              style={MoreStyles.socialMediaIcons}
              resizeMode="cover"
            />
          </View>
        </View>
        <View style={MoreStyles.settingsContainer}>
          <TouchableOpacity
            style={MoreStyles.actionButtonStyle}
            onPress={() => this.props.navigation.navigate('Parent')}
          >
            <View style={MoreStyles.actionButtonLeftLabelContainer}>
              <Image
                source={Phone}
                style={MoreStyles.actionIcons}
                resizeMode="contain"
              />
              <Text> Parent App </Text>
            </View>
            <Image
              source={ChevronRight}
              style={MoreStyles.actionIconChevron}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={MoreStyles.actionButtonStyle}>
            <View style={MoreStyles.actionButtonLeftLabelContainer}>
              <Image
                source={Profile}
                style={MoreStyles.actionIcons}
                resizeMode="contain"
              />
              <Text> Your Profile </Text>
            </View>
            <Image
              source={ChevronRight}
              style={MoreStyles.actionIconChevron}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={MoreStyles.aboutContainer}>
          <TouchableOpacity
            style={MoreStyles.actionButtonStyle}
            onPress={() => this.props.navigation.navigate('Help')}
          >
            <View style={MoreStyles.actionButtonLeftLabelContainer}>
              <Image
                source={Help}
                style={MoreStyles.actionIcons}
                resizeMode="contain"
              />
              <Text> Help & Feedback </Text>
            </View>
            <Image
              source={ChevronRight}
              style={MoreStyles.actionIconChevron}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={MoreStyles.actionButtonStyle}
            onPress={() => this.props.navigation.navigate('Policy')}
          >
            <View style={MoreStyles.actionButtonLeftLabelContainer}>
              <Image
                source={Terms}
                style={MoreStyles.actionIcons}
                resizeMode="contain"
              />
              <Text> Terms & Conditions </Text>
            </View>
            <Image
              source={ChevronRight}
              style={MoreStyles.actionIconChevron}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default More;
