/* eslint-disable react/no-multi-comp */
// import React, { Component } from 'react';
// import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Explore from './Explore/ExploreWrapper';
// import Quiz from './Quiz/Quiz';
import ScoreCard from './ScoreCard/ScoreCardWrapper';
import More from './More/MoreWrapper';
import COLORS from '../styles/Common/Colors';


const Routes = {
  // Quiz: { screen: Quiz },
  More: { screen: More },
  Explore: { screen: Explore },
  ScoreCard: { screen: ScoreCard },
};

const NavigationOptions = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  swipeEnabled: false,
  mode: 'modal',
  tabBarOptions: {
    activeTintColor: COLORS.BACKGROUND_COLOR_SECONDARY,
    inactiveTintColor: COLORS.BACKGROUND_COLOR_SHADE,
    showIcon: true,
    labelStyle: { fontSize: 12 },
    tabStyle: { width: 100 },
    upperCaseLabel: false,
    allowFontScaling: false,
    style: {
      backgroundColor: COLORS.WHITE,
    },
  },
};

export default TabNavigator(Routes, NavigationOptions);