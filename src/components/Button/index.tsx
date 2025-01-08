/* eslint-disable prettier/prettier */
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';

interface AppButtonProps {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
}

const AppButton: React.FC<AppButtonProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};
export default AppButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: s(320),
    height: vs(50),
    backgroundColor: '#463730',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Inter-Regular',
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: ms(18),
  },
});
