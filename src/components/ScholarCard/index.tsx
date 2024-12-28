import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';

const ScholarCard = ({
  title = 'Master Of Truth',
  image = require('../../assets/images/cards/scholar.png'),
}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ScholarCard;

const styles = StyleSheet.create({
  container: {
    width: s(240),
    height: vs(200),
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(20),
    color: '#251605',
    textAlign: 'center',
  },
});
