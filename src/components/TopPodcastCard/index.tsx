/* eslint-disable prettier/prettier */
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import TrackPlayer from 'react-native-track-player';
import Icon from 'react-native-vector-icons/FontAwesome5';

const TopPodcastCard = ({handlePlay, item}) => {
  return (
    <Pressable style={styles.container} onPress={() => handlePlay(item)}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item.artwork}} style={styles.image} />
        {/* Fixed Play Icon */}
        <View style={styles.iconContainer}>
          <Icon name="play" size={ms(24)} color="#fff" />
        </View>
      </View>
      <View style={{paddingHorizontal: s(1)}}>
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
    width: s(150),
    height: vs(200),
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
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageContainer: {
    width: '100%',
    height: '75%',
    borderRadius: ms(16),
    overflow: 'hidden',
    position: 'relative', // To position the icon absolutely within this container
  },
  iconContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent overlay
  },
});
