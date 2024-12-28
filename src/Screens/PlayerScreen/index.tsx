/* eslint-disable prettier/prettier */
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {startTransition, useEffect, useState} from 'react';
import {colors} from '../../constants/colors';
import {spacing} from '../../constants/dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import PlayerRepeatToggle from '../../components/PlayerRepeatToggle';
import PlayerShuffleToggle from '../../components/PlayerShuffleToggle';
import PlayerProgressBar from '../../components/PlayerProgressBar';
import TrackPlayer, {
  useActiveTrack,
  useIsPlaying,
} from 'react-native-track-player';

const PlayerScreen = ({navigation}) => {
  const isLiked = false;
  const [isMute, setIsMute] = useState(false);

  const activeTrack = useActiveTrack();
  const {playing} = useIsPlaying();

  useEffect(() => {
    setVolume();
  });

  const setVolume = async () => {
    const volume = await TrackPlayer.getVolume();
    setIsMute(volume === 0 ? true : false);
  };

  if (!activeTrack) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={'large'} color={colors.backgroundColor} />
      </View>
    );
  }

  const pauseButton = () => {
    TrackPlayer.pause();
  };
  const playButton = () => {
    TrackPlayer.play();
  };

  const handleToggleVolume = () => {
    TrackPlayer.setVolume(isMute ? 1 : 0);
    setIsMute(!isMute);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" color={colors.iconPrimary} size={28} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Playing Now</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{uri: activeTrack?.artwork}} style={styles.coverImage} />
      </View>
      <View style={styles.titleRowHeartContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{activeTrack?.title}</Text>
          <Text style={styles.artist}>{activeTrack?.artist}</Text>
        </View>
        <TouchableOpacity>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={28}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.playerControlContainer}>
        <TouchableOpacity style={styles.volumeContainer}>
          <Feather
            onPress={handleToggleVolume}
            size={28}
            name={isMute ? 'volume-x' : 'volume-1'}
            color={colors.iconSecondary}
          />
        </TouchableOpacity>
        <View style={styles.repeatShuffleContainer}>
          <PlayerRepeatToggle />
          <PlayerShuffleToggle />
        </View>
      </View>
      <PlayerProgressBar />
      <View style={{alignItems: 'center'}}>
        <View style={styles.playerControlContainer}>
          <AntDesign
            name="stepbackward"
            size={35}
            color={'white'}
            onPress={() => TrackPlayer.skipToPrevious()}
          />
          <Ionicons
            name={playing ? 'pause' : 'play'}
            size={35}
            color={'white'}
            onPress={playing ? pauseButton : playButton}
          />
          <AntDesign
            name="stepforward"
            size={35}
            color={'white'}
            onPress={() => TrackPlayer.skipToNext()}
          />
        </View>
      </View>
    </View>
  );
};

export default PlayerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    color: colors.textPrimary,
    textAlign: 'center',
    fontSize: 18,
    flex: 1,
  },
  coverImage: {
    height: 270,
    width: 270,
    borderRadius: 10,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: spacing.xl,
  },
  title: {
    fontSize: 14,
    color: colors.textPrimary,
  },
  artist: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  titleRowHeartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  playerControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
    gap: 20,
  },
  volumeContainer: {
    flex: 1,
  },
  repeatShuffleContainer: {
    flexDirection: 'row',
    gap: 15,
    marginVertical: 20,
  },
  playPauseContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.lg,
  },
});
