import COLORS from '../Common/Colors';

const style = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseCard: {
    backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY,
    width: '85%',
    height: '75%',
    alignItems: 'center',
    borderRadius: 15,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    // padding: 20,
  },
  columnLeft: {
    // flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'space-around',
    paddingLeft: '10%',
  },
  columnRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  courseLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  courseLogoIconContainer: {
    borderRadius: 15,
    width: 135,
    height: 135,
    // borderStyle: 'solid',
    // borderWidth: 1,
    // borderColor: 'black',
  },
  courseIcon: {
    width: 175,
    height: 175,
  },
  label: {
    color: COLORS.WHITE,
  },
  courseVideoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoIconContainer: {
    borderRadius: 5,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: COLORS.BACKGROUND_COLOR_SECONDARY,
    width: 125,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
  },
  seeJourneyContainer: {
    backgroundColor: COLORS.YELLOW_SHADE,
    width: 125,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  seeJourneyLabel: {
    color: COLORS.BLACK,
    fontSize: 16,
    fontWeight: '300',
  },
  courseActivity: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseActivityIconContainer: {
    backgroundColor: COLORS.BACKGROUND_COLOR_SHADE,
    padding: 10,
    borderRadius: 5,
  },
  courseActivityIcon: {
    width: 65,
    height: 65,
  },
  videoIcon: {
    width: 75,
    height: 25,
  },
  seeJourney: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default style;
