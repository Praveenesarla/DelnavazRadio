import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useCallStateHooks} from '@stream-io/video-react-native-sdk';
export const AudioRoomDescription = () => {
  const {useCallCustomData, useParticipants, useIsCallLive} =
    useCallStateHooks();
  const custom = useCallCustomData();
  const participants = useParticipants();
  const isLive = useIsCallLive();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {custom?.title} {!isLive ? '(Live)' : '(Not Live)'}
      </Text>
      <Text style={styles.subtitle}>{custom?.description}</Text>
      <Text style={styles.count}>{`${participants.length} Participants`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  subtitle: {
    paddingVertical: 4,
    fontSize: 14,
    color: 'black',
  },
  count: {
    fontSize: 12,
    color: 'black',
  },
});
