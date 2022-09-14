import { StyleSheet, TouchableNativeFeedback, View } from 'react-native';
import { COLOR_LIGHT_GREY, COLOR_RIPPLE } from '../../styles/colors';
import React, { FC, PropsWithChildren } from 'react';
import VectorDrawable from '@klarna/react-native-vector-drawable';

const voteButtonStyle = StyleSheet.create({
  voteButton: {
    paddingVertical: 4,
    paddingHorizontal: 24,
    borderRadius: 4,
    backgroundColor: COLOR_LIGHT_GREY,
  },
  voteButtonIcon: {
    width: 20,
    height: 16,
  },
});

export type VoteProps = { onPress: () => void, direction: 'up' | 'down' };

export const VoteButton: FC<PropsWithChildren<VoteProps>> = ({ direction, onPress }) => {
  const icon = direction === 'up' ? 'ic_vote_plus' : 'ic_vote_minus';

  return (
    <TouchableNativeFeedback
      background={TouchableNativeFeedback.Ripple(COLOR_RIPPLE, false)}
      onPress={onPress}
    >
      <View style={voteButtonStyle.voteButton}>
        <VectorDrawable
          resourceName={icon}
          style={voteButtonStyle.voteButtonIcon}
        />
      </View>
    </TouchableNativeFeedback>
  );
};
