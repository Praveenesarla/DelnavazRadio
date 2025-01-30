import React from 'react';
import {View, TextInput, StyleSheet, Image, TextInputProps} from 'react-native';
import {ms, s, vs} from 'react-native-size-matters';

// Define the type for the component props
type SearchInputProps = TextInputProps & {
  placeholder?: string; // Optional placeholder, defaults to 'Search Podcast'
  onChangeText: (text: string) => void; // Function to handle text changes
};

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search Podcast',
  onChangeText,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/icons/Magnifer.png')}
        style={styles.icon}
      />
      <TextInput
        {...props}
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
    paddingHorizontal: s(10),
    width: s(315),
    height: vs(50),
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    height: vs(40),
    paddingLeft: s(10),
    textAlign: 'left',
  },
  icon: {
    width: s(20),
    height: vs(20),
    marginRight: s(8),
  },
});

export default SearchInput;
