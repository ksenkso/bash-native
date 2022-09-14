import { StyleSheet } from 'react-native';
import { COLOR_GREEN, COLOR_GREY, COLOR_TEXT } from './colors';

export const textStyle = StyleSheet.create({
  default: {
    fontSize: 16,
    color: COLOR_TEXT,
  },
  link: {
    fontSize: 16,
    color: COLOR_GREEN,
    fontWeight: 'bold',
  },
  lightBold: {
    fontSize: 16,
    color: COLOR_GREY,
    fontWeight: 'bold',
  },
});
