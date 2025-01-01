import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';

const ScholarCard = ({
  title = 'Master Of Truth',
  image = require('../../assets/images/cards/scholar.png'),
  handlePlay,
  item,
}) => {
  return (
    <Pressable style={styles.container} onPress={() => handlePlay(item)}>
      <Image source={{uri: item?.artwork}} style={styles.image} />
      <Text style={styles.title}> {item?.title || 'Title'}</Text>
    </Pressable>
  );
};

export default ScholarCard;

const styles = StyleSheet.create({
  container: {
    width: s(215),
    height: vs(140),
    overflow: 'hidden',
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(20),
    color: '#251605',
    textAlign: 'center',
  },
});
