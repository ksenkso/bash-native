import React, { FC } from 'react';
import { Quote, QuoteModel } from './quote/Quote';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';

const style = StyleSheet.create({
  list: {
    backgroundColor: 'transparent',
  },
});

export const QuotesList: FC<{ quotes: QuoteModel[] }> = ({ quotes }) => {
  return (
    <FlatList
      style={style.list}
      data={quotes}
      renderItem={(item: ListRenderItemInfo<QuoteModel>) => <Quote quote={item.item}/>}
    />
  );
};
