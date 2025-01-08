import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';

const CardHeader = ({header}) => {
  return <Text style={styles.title}>{header}</Text>;
};

export default CardHeader;

const styles = StyleSheet.create({
  title: {
    paddingLeft: s(15),
    fontFamily: 'Inter-SemiBold',
    color: '#463730',
    fontSize: ms(20),
    alignSelf: 'flex-start',
    paddingVertical: vs(20),
  },
});
