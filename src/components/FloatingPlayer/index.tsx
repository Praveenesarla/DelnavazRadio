/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
  useSharedValue,
} from 'react-native-reanimated';
import {Slider} from 'react-native-awesome-slider';
import {spacing} from '../../constants/dimensions';
import {colors} from '../../constants/colors';
import MovingText from '../MovingText';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import TrackPlayer, {
  useActiveTrack,
  useIsPlaying,
  useProgress,
} from 'react-native-track-player';
import {useNavigation} from '@react-navigation/native';

const FloatingPlayer = () => {
  const activeTrack = useActiveTrack();
  const navigation = useNavigation();
  const {duration, position} = useProgress();
  const progress = useSharedValue(0.7);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  const isSliding = useSharedValue(false);
  const {playing} = useIsPlaying();

  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false, // Reanimated runs in strict mode by default
  });

  if (!isSliding.value) {
    progress.value = duration > 0 ? position / duration : 0;
  }

  const playButton = () => {
    TrackPlayer.play();
  };

  const pauseButton = () => {
    TrackPlayer.pause();
  };
  return (
    <View>
      <View style={{zIndex: 1}}>
        <Slider
          style={styles.container}
          progress={progress}
          minimumValue={min}
          maximumValue={max}
          renderBubble={() => null}
          onSlidingStart={() => (isSliding.value = true)}
          onValueChange={async value => {
            await TrackPlayer.seekTo(value * duration);
          }}
          onSlidingComplete={async value => {
            if (!isSliding.value) {
              return;
            }
            isSliding.value = false;
            await TrackPlayer.seekTo(value * duration);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.85}
        onPress={() => navigation.navigate('player')}>
        <Image source={{uri: activeTrack?.artwork}} style={styles.coverImage} />
        <View style={styles.titleContainer}>
          <MovingText
            text={activeTrack?.title}
            animationThreshold={15}
            style={styles.title}
          />
          <Text style={styles.artist}>{activeTrack?.artist}</Text>
        </View>
        <View style={styles.playerControlContainer}>
          <AntDesign
            name="stepbackward"
            size={35}
            color={'black'}
            onPress={() => TrackPlayer.skipToPrevious()}
          />
          <Ionicons
            name={playing ? 'pause' : 'play'}
            size={35}
            color={'black'}
            onPress={playing ? pauseButton : playButton}
          />
          <AntDesign
            name="stepforward"
            size={35}
            color={'black'}
            onPress={() => TrackPlayer.skipToNext()}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default FloatingPlayer;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coverImage: {
    height: 60,
    width: 60,
    resizeMode: 'cover',
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: spacing.sm,
    overflow: 'hidden',
    marginLeft: spacing.sm,
  },
  title: {
    color: '#091227',
    fontSize: 16,
    paddingRight: 10,
  },
  artist: {
    color: colors.textSecondary,
    fontSize: 16,
  },
  playerControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingRight: spacing.lg,
  },
});
