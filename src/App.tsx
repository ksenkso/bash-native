import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { QuoteModel } from './components/quote/Quote';
import { QuotesList } from './components/QuotesList';
import { COLOR_LIGHT_GREY } from './styles/colors';
import { QuoteSearch } from './components/quote/QuoteSearch';

const quotes: QuoteModel[] = [
  {
    id: 1,
    date: '14.09.2022',
    rating: -1,
    text: 'хуй',
  },
  {
    id: 2,
    date: '14.09.2022',
    rating: 1,
    text: 'xxx: хуй',
  },
  {
    id: 3,
    date: '14.09.2022',
    rating: 1,
    text: 'xxx: хуй',
  },
  {
    id: 4,
    date: '14.09.2022',
    rating: 1,
    text: 'xxx: хуй',
  },
  {
    id: 5,
    date: '14.09.2022',
    rating: 1,
    text: 'xxx: хуй',
  },
  {
    id: 6,
    date: '14.09.2022',
    rating: 1,
    text: 'xxx: хуй',
  },
];

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_LIGHT_GREY,
  },
});

const App: FC = () => {
  return (
    <SafeAreaView style={style.container}>
      <QuoteSearch/>
      <QuotesList quotes={quotes}/>
    </SafeAreaView>
  );
};

export default App;
