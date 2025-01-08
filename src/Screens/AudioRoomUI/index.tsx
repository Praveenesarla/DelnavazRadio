/* eslint-disable prettier/prettier */
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {useCall} from '@stream-io/video-react-native-sdk';
import {AudioRoomDescription} from '../../components/AudioRoom/AudioRoomDescription';
import {AudioRoomParticipants} from '../../components/AudioRoom/AudioRoomParticipants';
import {AudioRoomControlsPanel} from '../../components/AudioRoom/AudioRoomControlsPanel';
import {PermissionRequestsPanel} from '../../components/AudioRoom/PermissionsRequestsPanel';
import AppButton from '../../components/Button';
import LottieView from 'lottie-react-native';

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
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: 'Inter-Bold',
            fontSize: 30,
            textDecorationStyle: 'solid',
            textDecorationLine: 'underline',
          }}>
          Delnavaz AudioRoom
        </Text>
        <LottieView
          autoPlay
          loop
          source={require('../../assets/icons/livestreaming.json')}
          style={{width: 100, height: 100}}
        />
      </View>

      <LottieView
        source={require('../../assets/icons/audio.json')}
        style={{width: '100%', height: 200}}
        autoPlay
        loop
        hardwareAccelerationAndroid
      />

      <View style={{alignItems: 'center'}}>
        <AppButton text="Leave Audio Room" onPress={leaveCall} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
});
