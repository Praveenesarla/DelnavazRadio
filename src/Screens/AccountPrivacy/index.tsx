import {StyleSheet, Text, TouchableOpacity, View, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {clear, getItem} from '../../api/localstorage';
import {deleteAccount} from '../../api/auth';

const AccountPrivacy = ({navigation}) => {
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    validId();
  }, []);

  const validId = async () => {
    const response = await getItem('user');
    console.log(response);
    try {
      const parsedResponse = response ? JSON.parse(response) : null;
      setId(parsedResponse.id);
      setEmail(parsedResponse.email);
    } catch (error) {
      console.error('Invalid JSON format:', error);
      setId(null);
    }
  };

  const accountDelete = async () => {
    try {
      const res = await deleteAccount(id, email);
      console.log('Account deleted', res);
      if (res.status === 200) {
        await clear();
        navigation.replace('Auth');
        Alert.alert(
          'Success',
          'Your account has been deleted successfully.',
          [{text: 'OK'}],
          {cancelable: false},
        );
      }
    } catch (error) {
      console.error('Failed to delete account:', error);
      Alert.alert(
        'Error',
        'Failed to delete your account. Please try again later.',
        [{text: 'OK'}],
      );
    }
  };

  return (
    <View>
      <TouchableOpacity
        onPress={accountDelete}
        style={{
          width: 300,
          height: 50,
          backgroundColor: 'red',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <Text style={{color: '#FFFFFF'}}>DELETE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AccountPrivacy;

const styles = StyleSheet.create({
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
});
