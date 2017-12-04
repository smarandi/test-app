import COLORS from '../Common/Colors';

/* Actual Scorecard Styles */
const style = {
  sectionHeader: {
    height: 200,
    flexDirection: 'row',
  },
  quizPlayedSection: {
    width: '30%',
    justifyContent: 'flex-end',
    marginBottom: '10%',
    alignItems: 'center',
  },
  logoSection: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hoursSpentSection: {
    width: '30%',
    justifyContent: 'flex-end',
    marginBottom: '10%',
  },
  backgroundImageContainer: {
    backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY,
    position: 'absolute',
    opacity: 1,
  },
  backgroundImage: {
    width: 150,
    height: 100,
    borderRadius: 10,
  },
  logoText: {
    paddingTop: '5%',
    fontSize: 22,
    color: COLORS.WHITE,
    backgroundColor: 'transparent',
  },
  hoursSpentSectionOneContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  hoursSpentNumeric: {
    fontSize: 30,
    backgroundColor: 'transparent',
    color: COLORS.YELLOW_SHADE,
  },
  hoursSpentUnit: {
    fontSize: 18,
    backgroundColor: 'transparent',
    color: COLORS.YELLOW_SHADE,
  },
  hourSpentLabel: {
    fontSize: 14,
    backgroundColor: 'transparent',
    color: COLORS.WHITE,
    fontWeight: '400',
  },
  quizPlayedSectionOneContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  quizPlayedNumeric: {
    fontSize: 30,
    backgroundColor: 'transparent',
    color: COLORS.YELLOW_SHADE,
  },
  quizPlayedUnit: {
    fontSize: 18,
    backgroundColor: 'transparent',
    color: COLORS.YELLOW_SHADE,
  },
  quizPlayedLabel: {
    fontSize: 14,
    backgroundColor: 'transparent',
    color: COLORS.WHITE,
    fontWeight: '400',
  },

};

export default style;
//
// borderColor: 'purple',
//   borderWidth: 1,
//   borderStyle: 'solid',
