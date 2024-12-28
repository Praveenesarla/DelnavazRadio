import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const StreamingScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/cards/topPodcastCard.png')}
      style={{flex: 1}}></ImageBackground>
  );
};

export default StreamingScreen;

const styles = StyleSheet.create({});
