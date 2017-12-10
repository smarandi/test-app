import COLORS from '../Common/Colors';

const style = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 600,
    marginTop: '-10%',
  },
  courseCard: {
    backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY,
    width: '85%',
    height: '75%',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
    shadowColor: '#615f61',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.75,
    elevation: 1,
  },
  columnLeft: {
    flex: 6,
    height: '100%',
    justifyContent: 'space-between',
  },
  columnRight: {
    flex: 4,
    height: '90%',
    justifyContent: 'space-between',
  },
  courseLogoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 6,
  },
  courseLogoIconContainer: {
    borderRadius: 15,
    width: 135,
    height: 135,
  },
  courseIcon: {
    width: 175,
    height: 175,
  },
  label: {
    color: COLORS.WHITE,
    backgroundColor: 'transparent',
  },
  courseVideoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
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
    flex: 4,
  },
};

export default style;
//
// borderStyle: 'solid',
//   borderWidth: 1,
//   borderColor: 'yellow',
//
// borderStyle: 'solid',
//   borderWidth: 1,
//   borderColor: 'red',
