/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

type Props = {
  navigateToJoinRoom: () => void;
  navigateToCreateRoom: () => void;
};

export const WelcomeScreen = ({
  navigateToJoinRoom,
  navigateToCreateRoom,
}: Props) => {
  return (
    <View style={styles.container}>
      <Button title="Join Audio Room 🎧" onPress={navigateToJoinRoom} />
      <Button title="Create Audio Room 🛠️" onPress={navigateToCreateRoom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20,
  },
});
