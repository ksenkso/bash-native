import { StyleSheet, TextInput, View } from 'react-native';
import { textStyle } from '../../styles/text';
import { COLOR_GREY } from '../../styles/colors';
import React from 'react';

const searchStyle = StyleSheet.create({
  search: {
    backgroundColor: '#fff',
    borderColor: '#e6e5e0',
    borderWidth: 1,
    borderRadius: 3,
    margin: 4,
    marginBottom: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  searchActive: {
    borderColor: '#d2d0c7',
  },
  searchFocus: {
    borderColor: '#bdbbae',
  },
});
export const QuoteSearch = () => {
  return (
    <View>
      <TextInput
        style={[searchStyle.search, textStyle.default]}
        placeholderTextColor={COLOR_GREY}
        placeholder="Текст или номер цитаты"
      />
    </View>
  );
};
