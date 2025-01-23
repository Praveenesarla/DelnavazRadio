/* eslint-disable prettier/prettier */
// CustomInput.tsx
import React from 'react';
import {StyleSheet, Text, TextInput, View, TextInputProps} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';

interface CustomInputProps extends TextInputProps {
  label: string;
  placeholder: string;
}

const ProfileInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholderTextColor={'#A1A3A2'}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
    gap: 6,
  },
  label: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(15),
    color: '#424242',
    textAlign: 'left',
  },
  input: {
    width: s(320),
    height: vs(35),
    backgroundColor: '#E6E8E7',
    borderRadius: 6,
    textAlign: 'left',
  },
});

export default ProfileInput;
