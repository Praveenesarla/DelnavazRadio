import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import EventCardBig from '../../components/EventCardBig';
import {s, vs} from 'react-native-size-matters';

const PressAndEvents = () => {
  return (
    <View style={{paddingHorizontal: s(15), paddingVertical: vs(10)}}>
      <EventCardBig />
    </View>
  );
};

export default PressAndEvents;

const styles = StyleSheet.create({});
