/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import { Text, View, ScrollView, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import COLORS from '../../styles/Common/Colors';
import MoreStyles from '../../styles/More/More';

import CampaignImage from '../../assets/img/more/campaign.png';

// const ScreenWidth = Dimensions.get('window').width;
// noinspection JSAnnotator
// const campaigns = [// [1, 2, 3, 4, 5];
//   {
//     image: CampaignImage,
//     title: 'Inspire\'s Corner: Campaign No. 1',
//   }, {
//     image: CampaignImage,
//     title: 'Inspire\'s Corner: Campaign No. 2',
//   }, {
//     image: CampaignImage,
//     title: 'Inspire\'s Corner: Campaign No. 3',
//   },
// ];

class More extends Component {
  static navigationOptions = {
    title: 'More',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
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
              <Text style={MoreStyles.campaignTitle}>Inspire's Corner: Campaign No. 1</Text>
            </View>
          </View>
        </View>
        <View style={MoreStyles.socialMediaContainer}>
          <Text>Social Media Links</Text>
        </View>
        <View style={MoreStyles.settingsContainer}>
          <Text>Parent App</Text>
          <Text>Your Profile</Text>
        </View>
        <View style={MoreStyles.aboutContainer}>
          <Text>Help & Feedback</Text>
          <Text>Terms & Conditions</Text>
        </View>
      </View>
    );
  }
}

export default More;


/* <Carousel */
/* ref={(d) => { this._carousel = d; }} */
/* data= */
/* renderItem={(item, index) => this.renderItem(item, index)} */
/* sliderWidth={300} */
/* itemWidth={300} */
/* /> */

