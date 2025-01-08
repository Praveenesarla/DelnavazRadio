import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';

const ProgramCardBig = ({
  navigation,
  host,
  profileImage,
  banner,
  title = 'Exploration of Music’s Profound Impact',
  description = `Music, often regarded as the genesis of human expression, traces back to humanity’s earliest attempts to articulate emotions through sound.It served as a language akin to speech`,
}) => {
  return (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => navigation.navigate('ProgramContent')}>
      <Image source={banner} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.titleText}>{title}</Text>
        <Text style={styles.description} numberOfLines={4}>
          {description}
        </Text>
        <View style={styles.profileDetails}>
          <Image source={profileImage} style={styles.profileImage} />
          <Text style={{fontSize: ms(14)}}>Hosted by {host}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProgramCardBig;

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    height: vs(330),
    borderRadius: ms(12),
    marginVertical: vs(5),
    overflow: 'hidden',
  },
  image: {width: '100%', height: '45%'},
  titleText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(19),
    color: '#251605',
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(15),
    color: '#424242',
  },
  profileImage: {
    width: s(32),
    height: vs(30),
    borderRadius: ms(20),
    resizeMode: 'cover',
  },
  contentContainer: {gap: 7, padding: ms(15)},
  profileDetails: {flexDirection: 'row', alignItems: 'center', gap: 7},
});
