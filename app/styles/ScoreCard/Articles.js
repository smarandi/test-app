import COLORS from '../Common/Colors';

/* Actual Scorecard Styles */
const style = {
  articleParent: {
    height: 250,
    backgroundColor: COLORS.WHITE,
  },
  textSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '2%',
  },
  articleHeadText: {
    fontSize: 20,
    fontWeight: '400',
  },
  swipeDeckContainer: {
    padding: '5%',
    height: 200,
  },
  cardStyle: {
    width: '100%',
    height: '100%',
  },
  articleIcon: {
    width: 80,
    height: 80,
  },
  cardIconAndTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  cardIconContainer: {
    width: '30%',
  },
  cardTitleContainer: {
    width: '70%',
  },
  cardTitle: {
    fontSize: 18,
  },
  cardBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: '5%',
  },
  cardBottomText: {
    fontSize: 16,
  },
  blogTypeContainer: {
    borderWidth: 1,
    borderColor: COLORS.BACKGROUND_COLOR_SHADE,
    borderStyle: 'dashed',
    borderRadius: 15,
    padding: 5,
  },
};

export default style;

// borderWidth: 1,
//   borderColor: 'purple',
//   borderStyle: 'solid',
