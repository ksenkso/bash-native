import { StyleSheet, Text, View } from 'react-native';
import React, { FC, useState } from 'react';
import { textStyle } from '../../styles/text';
import { COLOR_LIGHTER_GREY, COLOR_WHITE } from '../../styles/colors';
import { VoteButton } from './VoteButton';

export type QuoteModel = {
  text: string;
  id: number;
  date: string;
  rating: number;
}

type Props = {
  quote: QuoteModel;
}

const style = StyleSheet.create({
  quote: {
    flexDirection: 'column',
    backgroundColor: COLOR_WHITE,
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 12,
  },
  text: {
    marginVertical: 8,
    paddingHorizontal: 12,
  },
  rating: {
    marginHorizontal: 12,
    minWidth: 50,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopColor: COLOR_LIGHTER_GREY,
    borderTopWidth: 1,
    paddingVertical: 8,
  },
});

const useRatingControls = (startRating: number) => {
  const [rating, setRating] = useState(startRating);

  return {
    rating,
    up() {
      setRating((val) => val + 1);
    },
    down() {
      setRating((val) => val - 1);
    },
  };
};

export const Quote: FC<Props> = ({ quote }) => {
  const { rating, up, down } = useRatingControls(quote.rating);

  return (
    <View style={style.quote}>
      <View style={style.header}>
        <Text style={textStyle.link}>#{quote.id}</Text>
        <Text style={textStyle.lightBold}>{quote.date}</Text>
      </View>
      <Text style={[style.text, textStyle.default]}>{quote.text}</Text>
      <View style={style.footer}>
        <VoteButton
          onPress={down}
          direction="down"
        />
        <Text style={[style.rating, textStyle.default]}>{rating}</Text>
        <VoteButton
          onPress={up}
          direction="up"
        />
      </View>
    </View>
  );
};
