import COLORS from '../Common/Colors';

const style = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND_COLOR_SECONDARY,
  },
  background: {
    flex: 1,
  },
  overlayContainer: {
    display: 'flex',
    flex: 1,
    position: 'absolute',
    top: '40%',
  },
  overlayContent: {
    width: 250,
    height: 250,
  },
  onBoardingText: {
    /* FIXME: get custom font to work */
    // fontFamily: 'ProximaNovaRegular',
    color: COLORS.WHITE,
    position: 'absolute',
    top: '82%',
    fontSize: 16,
  },
};

export default style;
