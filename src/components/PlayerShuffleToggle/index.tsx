/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/Feather';
import {colors} from '../../constants/colors';
import TrackPlayer from 'react-native-track-player';

const PlayerShuffleToggle = () => {

  const shuffleSongs = async () => {
    let queue = await TrackPlayer.getQueue();
    await TrackPlayer.reset();
    queue.sort(() => Math.random() - 0.5);
    await TrackPlayer.add(queue);
    await TrackPlayer.play();
  };
  return (
    <TouchableOpacity onPress={shuffleSongs}>
      <MaterialCommunityIcons
        name="shuffle"
        color={colors.iconSecondary}
        size={28}
      />
    </TouchableOpacity>
  );
};

export default PlayerShuffleToggle;

const styles = StyleSheet.create({});
