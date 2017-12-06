import COLORS from '../Common/Colors';

const style = {
  parentView: {
    backgroundColor: COLORS.WHITE,
  },
  carouselContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
  },
  itemContainer: {
    backgroundColor: COLORS.YELLOW_SHADE,
    width: '50%',
    height: '85%',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#615f61',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.75,
    elevation: 1,
  },
  ctaActionText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '200',
  },
  ctaContentText: {
    textAlign: 'center',
  },
};

export default style;
//
// borderColor: 'purple',
//   borderWidth: 1,
//   borderStyle: 'solid',
