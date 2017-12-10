import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View, Image, ScrollView, Platform, TouchableOpacity } from 'react-native';

import { getJourney } from '../../../services/Explore';

import COLORS from '../../../styles/Common/Colors';

import JourneyStyles from '../../../styles/Explore/Journey';
import Background from '../../../assets/img/journey/journey-background.png';
import Assessment from '../../../assets/img/journey/assesments.png';
import Professionals from '../../../assets/img/journey/professionals.png';
import Launch from '../../../assets/img/journey/launch.png';
import Stories from '../../../assets/img/journey/stories.png';
import Blog from '../../../assets/img/journey/blogs.png';
import Projects from '../../../assets/img/journey/projects.png';

// const styles = StyleSheet.create(JourneyStyles);
@connect(store => ({ auth: store.auth }))
class Journey extends Component {
  static navigationOptions = {
    title: 'Journey',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  state = {
    storiesRead: 0,
    projectsCompleted: 0,
    blogsRead: 0,
    totalStories: 0,
    totalProjects: 0,
    totalBlogs: 10,
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { token, id } = this.props.auth;
    const { uuid } = this.props.navigation.state.params;

    const formData = new FormData();
    formData.append('course_uuid', uuid);

    getJourney(token, id, formData)
      .then(response => this.updateJourneyData(response.data));
  }

  updateJourneyData = (data) => {
    const {
      stories_attempted: storiesRead,
      projects_attempted: projectsCompleted,
      blogs_attempted: blogsRead,
      total_stories: totalStories,
      total_projects: totalProjects,
      total_blogs: totalBlogs,
    } = data;

    this.setState({
      storiesRead, projectsCompleted, blogsRead, totalStories, totalProjects, totalBlogs,
    });
  };


  render() {
    const {
      storiesRead, projectsCompleted, blogsRead, totalStories, totalProjects, totalBlogs,
    } = this.state;
    return (
      <View>
        <ScrollView>
          <View>
            <Image
              style={Platform.select(JourneyStyles.background)}
              source={Background}
              resizeMode="contain"
            />
            <View style={JourneyStyles.infoOverlay}>
              <View style={JourneyStyles.sectionOne}>
                <View>
                  <Image
                    source={Assessment}
                    style={{ width: 150, height: 150 }}
                    resizeMode="contain"
                  />
                </View>
                <View style={JourneyStyles.sectionAssessmentInfo}>
                  <View style={JourneyStyles.sectionNumberLabelContainer}>
                    <Text style={JourneyStyles.sectionLabel}>1</Text>
                  </View>
                  <TouchableOpacity style={JourneyStyles.sectionLabelContainer}>
                    <Text style={JourneyStyles.sectionLabel}>Assesments</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={JourneyStyles.sectionTwo}>
                <View style={JourneyStyles.sectionTwoParent}>
                  <View style={JourneyStyles.sectionTwoItemContainer}>
                    <View>
                      <View style={JourneyStyles.sectionTwoImageContainer}>
                        <Image
                          source={Stories}
                          style={JourneyStyles.sectionTwoImage}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={JourneyStyles.sectionTwoLabel}>Stories</Text>
                      <Text style={JourneyStyles.sectionTwoLabel}>{storiesRead}/{totalStories}</Text>
                    </View>
                    <View>
                      <View style={JourneyStyles.sectionTwoImageContainer}>
                        <Image
                          source={Projects}
                          style={JourneyStyles.sectionTwoImage}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={JourneyStyles.sectionTwoLabel}>Projects</Text>
                      <Text style={JourneyStyles.sectionTwoLabel}>{projectsCompleted}/{totalProjects}</Text>
                    </View>
                    <View>
                      <View style={JourneyStyles.sectionTwoImageContainer}>
                        <Image
                          source={Blog}
                          style={JourneyStyles.sectionTwoImage}
                          resizeMode="contain"
                        />
                      </View>
                      <Text style={JourneyStyles.sectionTwoLabel}>Blogs</Text>
                      <Text style={JourneyStyles.sectionTwoLabel}>{blogsRead}/{totalBlogs}</Text>
                    </View>
                  </View>
                  <View style={JourneyStyles.sectionTwoNumericLabel}>
                    <Text style={JourneyStyles.sectionLabel}>2</Text>
                  </View>
                </View>
              </View>
              <View style={JourneyStyles.sectionThree}>
                <View style={JourneyStyles.sectionJourneyProfessionalsImageContainer}>
                  <Image
                    source={Professionals}
                    style={Platform.select(JourneyStyles.sectionProfessionalsImage)}
                    resizeMode="contain"
                  />
                </View>
                <View style={JourneyStyles.sectionProfessionals}>
                  <View style={JourneyStyles.sectionNumberLabelContainer}>
                    <Text style={JourneyStyles.sectionLabel}>3</Text>
                  </View>
                  <TouchableOpacity style={JourneyStyles.sectionLabelContainer}>
                    <Text style={JourneyStyles.sectionLabel}>Meet Real Life Professionals</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={JourneyStyles.sectionFour}>
                <View style={JourneyStyles.sectionJourneyLaunchImageContainer}>
                  <Image
                    source={Launch}
                    style={JourneyStyles.sectionLaunchImage}
                    resizeMode="contain"
                  />
                </View>
                <View style={JourneyStyles.sectionLaunch}>
                  <TouchableOpacity style={JourneyStyles.sectionLaunchLabelContainer}>
                    <Text style={JourneyStyles.sectionLabel}>
                      Experience through junior internship & gain social skills
                    </Text>
                  </TouchableOpacity>
                  <View style={JourneyStyles.sectionLaunchNumberLabelContainer}>
                    <Text style={JourneyStyles.sectionLabel}>4</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Journey;
