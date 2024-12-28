/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';
import {Slider} from 'react-native-awesome-slider';
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
  useSharedValue,
} from 'react-native-reanimated';
import TrackPlayer, {useProgress} from 'react-native-track-player';
import {formatSecondsToMinute} from '../../utils';

const PlayerProgressBar = () => {
  const {duration, position} = useProgress();
  const progress = useSharedValue(0.7);
  const min = useSharedValue(0);
  const max = useSharedValue(1);
  const isSliding = useSharedValue(false);

  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false, // Reanimated runs in strict mode by default
  });

  if (!isSliding.value) {
    progress.value = duration > 0 ? position / duration : 0;
  }

  const trackElapsedTime = formatSecondsToMinute(position);
  const trackRemainingTime = formatSecondsToMinute(duration - position);
  return (
    <View>
      <View style={styles.timeRow}>
        <Text style={styles.timeText}>{trackElapsedTime}</Text>
        <Text style={styles.timeText}>
          {'-'}
          {trackRemainingTime}
        </Text>
      </View>

      <Slider
        style={styles.sliderContainer}
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
      {/* <View style={{alignItems: 'center'}}>
        <View style={styles.playerControlContainer}>
          <AntDesign name="stepbackward" size={35} color={'white'} />
          <Ionicons name="pause" size={35} color={'white'} />
          <AntDesign name="stepforward" size={35} color={'white'} />
        </View>
      </View> */}
    </View>
  );
};

export default PlayerProgressBar;

const styles = StyleSheet.create({
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  timeText: {
    color: colors.textPrimary,
    fontSize: 16,
    opacity: 0.76,
  },
  sliderContainer: {
    marginVertical: 50,
  },
  playerControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 'auto',
    marginTop: 20,
    gap: 50,
  },
});
