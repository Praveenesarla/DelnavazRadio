/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {vs} from 'react-native-size-matters';
import ProfileInput from '../../components/ProfileInput';
import AppButton from '../../components/Button';

const EditProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  return (
    <View style={styles.mainView}>
      <View style={styles.inputContainer}>
        <ProfileInput
          label="Name"
          placeholder="Enter your Name"
          onChangeText={setName}
          value={name}
        />
        <ProfileInput
          label="Email"
          placeholder="Enter your Email"
          onChangeText={setEmail}
          value={email}
        />
        <ProfileInput
          label="Phone Number"
          placeholder="Enter your Phone Number"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton text="Save Profile" onPress={() => {}} />
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  mainView: {flex: 1, marginTop: vs(5)},
  inputContainer: {gap: 8},
  buttonContainer: {
    marginTop: 'auto',
    marginHorizontal: 'auto',
    marginVertical: vs(10),
  },
});
