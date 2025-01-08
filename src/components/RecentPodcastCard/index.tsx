/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import Video from 'react-native-video';
import {useFocusEffect} from '@react-navigation/native';

const RecentPodcastCard = () => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);

  // Toggle play/pause state
  const togglePlayPause = () => {
    setPaused(!paused);
  };

  // Use focus effect to control video playback
  // useFocusEffect(
  //   React.useCallback(() => {
  //     // When screen is focused, resume playback
  //     setPaused(false);

  //     // When screen is unfocused, pause playback
  //     return () => {
  //       setPaused(true);
  //     };
  //   }, []),
  // );

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={togglePlayPause} activeOpacity={1}>
        <Video
          ref={videoRef}
          source={require('../../assets/video/video.mp4')}
          style={styles.video}
          resizeMode="cover"
          paused={paused}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Delnavaz global podcast</Text>
      <Text style={styles.subtitle}>
        Iranian Radio from Southern California
      </Text>
    </View>
  );
};

export default RecentPodcastCard;

const styles = StyleSheet.create({
  mainContainer: {
    width: s(315),
    height: vs(230),
    gap: 3,
    position: 'relative',
  },
  video: {
    width: '100%',
    height: 200,
    borderRadius: ms(10),
    overflow: 'hidden',
  },
  title: {
    fontSize: ms(20),
    fontFamily: 'Inter-SemiBold',
    color: '#251605',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(16),
    color: '#424242',
  },
});
