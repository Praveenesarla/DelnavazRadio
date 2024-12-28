/* eslint-disable prettier/prettier */
import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchInput = ({placeholder = 'Search Podcast', onChangeText}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/Magnifer.png')}
        style={{width: s(20), height: vs(20)}}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={'#C6C6C6'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderRadius: ms(28),
    paddingHorizontal: 10,
    width: s(315),
    height: vs(50),
    backgroundColor: '#FFFFFF',
    padding: 5,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default SearchInput;
