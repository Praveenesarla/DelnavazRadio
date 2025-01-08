import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import {playbackService} from '../../../musicPlayerServices';
import {play} from 'react-native-track-player/lib/src/trackPlayer';

const ControlCentre = () => {
  const playBackState = usePlaybackState();

  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const togglePlayback = async (playback: State) => {
    const currentTrack = await TrackPlayer.getActiveTrack();
    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };
  return (
    <View>
      <Text onPress={skipToPrevious}>Prev</Text>
      <Text onPress={() => togglePlayback(playBackState)}>
        {playBackState.state === State.Playing ? 'pause' : 'play'}
      </Text>
      <Text onPress={skipToNext}>Next</Text>
    </View>
  );
};

export default ControlCentre;

const styles = StyleSheet.create({});
