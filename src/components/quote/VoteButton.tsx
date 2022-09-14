import { StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import { COLOR_GREY, COLOR_LIGHT_GREY, COLOR_RIPPLE } from '../../styles/colors';
import React, { FC, PropsWithChildren } from 'react';

const voteButtonStyle = StyleSheet.create({
  voteButton: {
    paddingVertical: 4,
    paddingHorizontal: 24,
    borderRadius: 4,
    backgroundColor: COLOR_LIGHT_GREY,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  voteButtonText: {
    color: COLOR_GREY,
    fontSize: 24,
    lineHeight: 24,
  },
});

export type VoteProps = { onPress: () => void, direction: 'up' | 'down' };

export const VoteButton: FC<PropsWithChildren<VoteProps>> = ({ direction, onPress }) => {
  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(COLOR_RIPPLE, false)}
      onPress={onPress}
    >
      <View style={voteButtonStyle.voteButton}>
        <Text style={voteButtonStyle.voteButtonText}>{direction === 'up' ? '+' : '-'}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};
