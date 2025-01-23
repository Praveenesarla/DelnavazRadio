/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext, useRef, useState} from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTranslation} from 'react-i18next';
import LanguageContext from '../../utils/LanguageContext';

const RecentPodcastCard = () => {
  const videoRef = useRef(null);
  const [paused, setPaused] = useState(true);
  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);
  // Toggle play/pause state
  const togglePlayPause = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={togglePlayPause} activeOpacity={1}>
        <View style={styles.videoContainer}>
          <Video
            ref={videoRef}
            source={require('../../assets/video/video.mp4')}
            style={styles.video}
            resizeMode="cover"
            paused={paused}
          />
          {paused && (
            <View style={styles.iconContainer}>
              <Icon name="play" size={ms(30)} color="#fff" />
            </View>
          )}
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{t('delGPod')}</Text>
      <Text style={styles.subtitle}>{t('iraSouthCali')}</Text>
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
  videoContainer: {
    width: '100%',
    height: 200,
    borderRadius: ms(10),
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  iconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  title: {
    fontSize: ms(20),
    fontFamily: 'Inter-SemiBold',
    color: '#251605',
    textAlign: 'left',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(16),
    color: '#424242',
    textAlign: 'left',
  },
});
