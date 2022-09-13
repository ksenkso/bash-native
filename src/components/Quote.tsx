import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React, { FC, useState } from 'react';

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
  },
  header: {
    justifyContent: 'space-between',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rating: {
    marginHorizontal: 10,
  },
  ratingControl: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: 'rgb(160,160,160)',
  },
  ratingControlLeft: {
    marginRight: 10,
  },
  ratingControlRight: {
    marginLeft: 10,
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
    <View>
      <Text>
        Рейтинг {quote.id}, запощено {quote.date}
      </Text>
      <Text>{quote.text}</Text>
      <View style={style.footer}>
        <TouchableHighlight style={style.ratingControl} onPress={down}>
          <Text>-</Text>
        </TouchableHighlight>
        <Text style={style.rating}>{rating}</Text>
        <TouchableHighlight style={style.ratingControl} onPress={up}>
          <Text>+</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};
