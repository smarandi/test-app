import COLORS from '../Common/Colors';

/* Actual Scorecard Styles */
const style = {
  headerSection: {
    flex: 2,
    backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIconContainer: {
    flex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInfo: {
    paddingTop: '2%',
    color: COLORS.WHITE,
    fontSize: 16,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  headerIcon: {
    width: 150,
    height: 150,
  },
  instructionContainer: {
    flex: 2,
    justifyContent: 'space-around',
    paddingLeft: '5%',
    paddingTop: '2%',
    backgroundColor: COLORS.WHITE,
  },
  instructionHeader: {
    color: COLORS.BACKGROUND_COLOR_SECONDARY,
    fontSize: 16,
    fontWeight: '400',
  },
  bullet: {
    color: COLORS.BACKGROUND_COLOR_PRIMARY,
    fontSize: 16,
    fontWeight: '200',
  },
  info: {
    fontSize: 20,
    fontWeight: '400',
    paddingLeft: '5%',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.BACKGROUND_COLOR_PRIMARY,
    width: '50%',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontSize: 24,
    fontWeight: '500',
  },
};

export default style;
//
// borderColor: 'purple',
//   borderWidth: 1,
//   borderStyle: 'solid',
