import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, Image, Platform, ScrollView, TouchableOpacity } from 'react-native';

import SearchStyles from '../../styles/ScoreCard/ScoreCard';
import COLORS from '../../styles/Common/Colors';
import SearchIcon from '../../assets/img/score-card/search.png';

/* Temporary Imports */
import Architecture from '../../assets/img/score-card/architecture.png';
import GraphicDesign from '../../assets/img/score-card/graphic-design.png';
import Pilot from '../../assets/img/score-card/pilot.png';

const baseUrl = '../../assets/img/score-card/';
const courses = [
  { icon: Architecture, title: 'Architecture' },
  { icon: GraphicDesign, title: 'Graphic Design' },
  { icon: Pilot, title: 'Pilot' },
  { icon: Architecture, title: 'Software Engineer' },
  { icon: GraphicDesign, title: 'Chartered Accountant' },
  { icon: Pilot, title: 'Aeronautical Engineer' },
  { icon: Architecture, title: 'Marine Biologist' },
  { icon: GraphicDesign, title: 'Geologist' },
  { icon: Pilot, title: 'Astronaut' },
  { icon: Architecture, title: 'Cartoonist' },
  { icon: GraphicDesign, title: 'Game Developer' },
  { icon: Pilot, title: 'Nuclear Scientist' },
];

class Search extends Component {
  static navigationOptions = {
    title: 'Score Card',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
  };

  render() {
    return (
      <View style={SearchStyles.parent}>
        <View style={SearchStyles.searchSection}>
          <View style={SearchStyles.searchInputContainer}>
            <View style={SearchStyles.textInputContainer}>
              <TextInput
                placeholder="Search a career"
                style={Platform.select(SearchStyles.textInput)}
                autoCorrect={false}
                underlineColorAndroid="transparent"
              />
            </View>
            <View style={SearchStyles.searchIconContainer}>
              <Image
                source={SearchIcon}
                style={SearchStyles.searchIcon}
                resizeMode="contain"
              />
            </View>
          </View>
        </View>
        <View style={SearchStyles.resultSection}>
          <ScrollView>
            {
              courses.map(result => (
                <TouchableOpacity
                  style={SearchStyles.resultItemContainer}
                  key={result.title}
                  onPress={() => this.props.navigation.navigate('ScoreCard')}
                >
                  <View>
                    <Image
                      source={result.icon}
                      style={SearchStyles.resultIcon}
                    />
                  </View>
                  <View style={SearchStyles.resultTextContainer}>
                    <Text style={SearchStyles.resultText}>{result.title}</Text>
                  </View>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Search;
