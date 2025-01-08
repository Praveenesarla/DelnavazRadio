/* eslint-disable prettier/prettier */
import {Alert, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {ms, vs} from 'react-native-size-matters';
import ProfileInput from '../../components/ProfileInput';
import AppButton from '../../components/Button';
import LeftArrow from '../../assets/icons/LeftArrow';
import {addProfile} from '../../api/auth';

const AddProfile = ({navigation}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const addData = async () => {
    try {
      const response = await addProfile(phoneNumber, name);
      if (response?.status === 200) {
        Alert.alert('Success', 'User details updated successfully!');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while updating your profile.');
    } finally {
      navigation.replace('App');
    }
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <LeftArrow />
        </Pressable>
        <Text style={styles.headerText}>Add Profile Details</Text>
      </View>
      <View style={styles.inputContainer}>
        <ProfileInput
          label="Name"
          placeholder="Enter your Name"
          onChangeText={setName}
          value={name}
        />
        <ProfileInput
          label="Phone Number"
          placeholder="Enter your Phone Number"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton text="Save Profile" onPress={addData} />
      </View>
    </View>
  );
};

export default AddProfile;

const styles = StyleSheet.create({
  mainView: {flex: 1, marginTop: vs(5), paddingHorizontal: 15},
  inputContainer: {gap: 8},
  buttonContainer: {
    marginTop: 'auto',
    marginHorizontal: 'auto',
    marginVertical: vs(10),
  },
  header: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    marginVertical: vs(30),
  },
  headerText: {
    fontFamily: 'Inter-Medium',
    fontSize: ms(20),
    color: '#251605',
  },
});
