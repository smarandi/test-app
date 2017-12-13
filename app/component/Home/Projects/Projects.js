import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Text, View, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import moment from 'moment';

import COLORS from '../../../styles/Common/Colors';
// import DEMO_IMAGE from '../../../assets/img/home/projects/graphics-design.png';

import ProjectStyles from '../../../styles/Explore/Projects';
import { getAllProjects } from '../../../services/Explore';
import { ProjectActions } from './ProjectActions';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create(ProjectStyles);

// const entries = [2, 3, 4, 5, 6, 7];

// const title = 'Outside Material: The Cover Art';

// const date = '2nd Nov 2017';

// const description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
//   'Vivamus tristique tortor sit amet nunc lobortis, facilisis accumsan turpis suscipit. ' +
//   'Curabitur id eleifend ipsum.';

@connect(store => ({ auth: store.auth, project: store.project }))
class Projects extends Component {
  static navigationOptions = {
    title: 'Projects',
    headerStyle: { backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY },
    headerTitleStyle: { color: COLORS.WHITE },
  };

  static propTypes = {
    navigation: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { token, id } = this.props.auth;
    const { uuid } = this.props.navigation.state.params;

    const formData = new FormData();
    formData.append('course_uuid', uuid);

    getAllProjects(token, id, formData)
      .then(data => this.props.dispatch(ProjectActions.loadCourseInfo(data)));
  }

  renderItem = ({ item, index }) => {
    const {
      image_link: link,
      project_info: info,
      project_name: title,
      created_at: date,
      uuid,
    } = item;
    const { course } = this.props.navigation.state.params;

    return (
      <View
        index={uuid}
        style={{
          width,
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View style={styles.sliderItem}>
          <View style={styles.sliderImageContainer}>
            <Image
              style={styles.sliderImage}
              source={{ uri: link }}
              resizeMode="cover"
            />
          </View>
          <View style={styles.sliderTextContentContainer}>
            <View style={styles.headerContainer}>
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
              </View>
              <View style={styles.dateContainer}>
                <Text style={styles.date}>{moment(date).format('DD-MM-YYYY')}</Text>
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.description}>{info}</Text>
            </View>
            <TouchableOpacity
              style={styles.readMoreContainer}
              onPress={() => this.props.navigation.navigate(
                'Detail',
                {
                  header: 'Projects',
                  course,
                  url: link,
                  title,
                  details: info,
                  date: moment(date).format('DD-MM-YYYY'),
                },
              )}
            >
              <Text style={styles.readMoreText}>Read More</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    const { data } = this.props.project;
    return (data.length === 0 ? <Text>Loading...</Text> :
      (
        <View>
          <View style={styles.carouselContainer} />
          <Carousel
            ref={(c) => { this._carousel = c; }}
            data={data}
            renderItem={this.renderItem}
            sliderWidth={width}
            itemWidth={width}
          />
        </View>
      )
    );
  }
}

export default Projects;
