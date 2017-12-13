import COLORS from '../Common/Colors';

const style = {
  sliderItem: {
    // backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY,
    width: '85%',
    height: '85%',
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
    paddingBottom: 5,
  },
  scoreContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countContainer: {
    flex: 3,
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
    alignSelf: 'center',
  },
  courseLogoContainer: {
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // borderStyle: 'solid',
    // borderColor: 'red',
    // borderWidth: 1,
  },
  logo: {
    height: 55,
    width: 75,
    borderRadius: 5,
  },
  courseTitle: {
    fontSize: 16,
    color: COLORS.WHITE,
    fontWeight: '500',
    alignSelf: 'center',
    textAlign: 'center',
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
    position: 'absolute',
    // flex: 1,
    //
    width: '100%',
    height: '100%',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: 'transparent',
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
