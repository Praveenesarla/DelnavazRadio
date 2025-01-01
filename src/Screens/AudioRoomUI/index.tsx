/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {useCall} from '@stream-io/video-react-native-sdk';
import {AudioRoomDescription} from '../../components/AudioRoom/AudioRoomDescription';
import {AudioRoomParticipants} from '../../components/AudioRoom/AudioRoomParticipants';
import {AudioRoomControlsPanel} from '../../components/AudioRoom/AudioRoomControlsPanel';
import {PermissionRequestsPanel} from '../../components/AudioRoom/PermissionsRequestsPanel';

type Props = {goToHomeScreen: () => void};

export const AudioRoomUI = ({goToHomeScreen}: Props) => {
  const call = useCall();
  const leaveCall = async () => {
    // This will leave the call and stop sending and receiving audio.
    await call?.leave();
    goToHomeScreen();
  };
  return (
    <View style={styles.container}>
      <AudioRoomDescription />
      <AudioRoomParticipants />
      <PermissionRequestsPanel />
      <AudioRoomControlsPanel />
      <Button title="Leave Audio Room" onPress={leaveCall} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
