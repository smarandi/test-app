import COLORS from '../Common/Colors';

const style = {
  sliderItem: {
    // backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY,
    width: '85%',
    height: '75%',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: 10,
    marginTop: '10%',
    shadowColor: '#615f61',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.75,
    elevation: 1,
  },
  sliderItemHeader: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingBottom: 10,
  },
  scoreContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  highlightedText: {
    fontSize: 24,
    color: COLORS.MAGENTA_SHADE,
  },
  infoText: {
    fontSize: 12,
    color: COLORS.WHITE,
  },
  courseLogoContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logo: {
    height: 65,
    width: 75,
    borderRadius: 5,
  },
  courseTitle: {
    fontSize: 18,
    color: COLORS.WHITE,
  },
  highlightedQuizIndexContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  quizCountText: {
    fontSize: 16,
    color: COLORS.WHITE,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  menuContainer: {
    flex: 3,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  touchableStyle: {
    ios: {
      width: 33,
      height: 33,
      borderRadius: 15,
      backgroundColor: '#c0c0c0',
      position: 'absolute',
      top: '11%',
      left: '11%',
    },
    android: {
      width: 33,
      height: 33,
      borderRadius: 15,
      backgroundColor: '#c0c0c0',
      position: 'absolute',
      top: '11%',
      left: '15.5%',
    },
  },
};

export default style;
// borderStyle: 'solid',
//   borderColor: 'red',
//   borderWidth: 1,
