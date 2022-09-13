import React, { FC } from 'react';
import { FlatList, ListRenderItemInfo, SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Quote, QuoteModel } from './components/Quote';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const quotes: QuoteModel[] = [
  {
    id: 1,
    date: 'null',
    rating: -1,
    text: 'хуй',
  },
  {
    id: 2,
    date: 'null',
    rating: 1,
    text: 'xxx: хуй',
  },
];

const App: FC = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <FlatList data={quotes} renderItem={(item: ListRenderItemInfo<QuoteModel>) => <Quote quote={item.item} />} />
    </SafeAreaView>
  );
};

export default App;
