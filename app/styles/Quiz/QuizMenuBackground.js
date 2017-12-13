import COLORS from '../Common/Colors';

const style = {
  menuItemsContainer: {
    flex: 1,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    backgroundColor: COLORS.GREY,
  },
  column: {
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  rowTop: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  rowMiddle: {
    flex: 3,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  rowBottom: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
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
