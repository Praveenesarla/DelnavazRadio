import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ScholarCard = ({
  title = 'Master Of Truth',
  image = require('../../assets/images/cards/scholar.png'),
  handlePlay,
  item,
}) => {
  return (
    <Pressable style={styles.container} onPress={() => handlePlay(item)}>
      <View style={styles.imageContainer}>
        <Image source={{uri: item?.artwork || image}} style={styles.image} />
        {/* Fixed Play Icon */}
        <View style={styles.iconContainer}>
          <Icon name="play" size={ms(30)} color="#fff" />
        </View>
      </View>
      <Text style={styles.title}>{item?.title || 'Title'}</Text>
    </Pressable>
  );
};

export default ScholarCard;

const styles = StyleSheet.create({
  container: {
    width: s(215),
    height: vs(170),
    overflow: 'hidden',
    borderRadius: 20,
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '80%',
    borderRadius: 20,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
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
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(20),
    color: '#251605',
    textAlign: 'center',
    marginTop: vs(5),
  },
});
