import {StyleSheet} from 'react-native';
import {fonts} from '../constants/fonts';
import Colors from '../constants/color';

export const HomeScreenStyles = StyleSheet.create({
  parentContainer: {flex: 1, backgroundColor: Colors.primary_container},
  headerContainer: {
    width: '100%',
    backgroundColor: Colors.primary,
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: fonts.bold,
    color: Colors.background,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 20,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: Colors.background,
  },
  bottomInfoChild: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 5,
  },
  placeHolder: {
    fontFamily: fonts.medium,
    fontSize: 18,
    color: Colors.text,
    fontWeight: '400',
  },
  stockName: {fontFamily: fonts.bold, fontSize: 18, color: Colors.text},

  valueText: {fontFamily: fonts.book, fontSize: 18, color: Colors.text},
  cardItemParent: {
    borderRadius: 10,
    padding: 16,
    margin: 8,
    backgroundColor: 'white',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
  },
  cardRow: {
    marginVertical: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  divider: {height: 16},
  noRecordComponent: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
