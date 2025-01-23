/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {useCall} from '@stream-io/video-react-native-sdk';
import {AudioRoomDescription} from '../../components/AudioRoom/AudioRoomDescription';
import {AudioRoomParticipants} from '../../components/AudioRoom/AudioRoomParticipants';
import {AudioRoomControlsPanel} from '../../components/AudioRoom/AudioRoomControlsPanel';
import {PermissionRequestsPanel} from '../../components/AudioRoom/PermissionsRequestsPanel';
import AppButton from '../../components/Button';
import LottieView from 'lottie-react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useTranslation} from 'react-i18next';
import LanguageContext from '../../utils/LanguageContext';

type Props = {goToHomeScreen: () => void};

export const AudioRoomUI = ({goToHomeScreen}: Props) => {
  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);
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
          {t('DelnavazAudioRoom')}
        </Text>
        <LottieView
          autoPlay
          loop
          source={require('../../assets/icons/livestreaming.json')}
          style={{width: 100, height: 100}}
        />
      </View>

      {/* <LottieView
        source={require('../../assets/icons/audio.json')}
        style={{width: '100%', height: 200}}
        autoPlay
        loop
        hardwareAccelerationAndroid
      /> */}

      <Icon name="mic" size={200} color="#463730" />

      <View style={{alignItems: 'center'}}>
        <AppButton text={t('LeaveAudioRoom')} onPress={leaveCall} />
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
