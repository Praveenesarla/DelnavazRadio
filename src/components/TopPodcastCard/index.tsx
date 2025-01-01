/* eslint-disable prettier/prettier */
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import TrackPlayer from 'react-native-track-player';

const TopPodcastCard = ({handlePlay, item}) => {
  // const handlePlay = async item => {
  //   await TrackPlayer.add({
  //     url: 'https://pdopgyapxmlscnwctqsj.supabase.co/storage/v1/object/public/music/one.mp3?t=2024-12-02T10%3A25%3A31.598Z',
  //   });
  //   await TrackPlayer.play();
  // };
  return (
    <Pressable style={styles.container} onPress={() => handlePlay(item)}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.artwork}} style={styles.image} />
      </View>
      <View style={{paddingHorizontal: s(12)}}>
        <Text style={styles.title} numberOfLines={1}>
          {item?.title || 'Title'}
        </Text>
        <Text style={styles.category}>{item?.artist || 'Category'}</Text>
      </View>
    </Pressable>
  );
};

export default TopPodcastCard;

const styles = StyleSheet.create({
  container: {
    width: s(170),
    height: vs(220),
    // backgroundColor: 'red',
  },
  category: {
    color: '#424242',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    textAlign: 'left',
    fontSize: ms(15),
    color: '#251605',
  },
  image: {width: '100%', height: '100%', resizeMode: 'cover'},
  imageContainer: {
    width: '100%',
    height: '75%',
    borderRadius: ms(16),
    overflow: 'hidden',
  },
});
