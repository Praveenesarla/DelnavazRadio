import {Pressable, StyleSheet, Text, View, Alert} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {ms, vs} from 'react-native-size-matters';
import ProfileInput from '../../components/ProfileInput';
import AppButton from '../../components/Button';
import LeftArrow from '../../assets/icons/LeftArrow';
import {addProfile, getProfile} from '../../api/auth';
import {useTranslation} from 'react-i18next';
import LanguageContext from '../../utils/LanguageContext';

const EditProfile = ({navigation}) => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);

  useEffect(() => {
    checkData();
  }, []);

  const addData = async () => {
    try {
      const response = await addProfile(phoneNumber, name);
      if (response?.status === 200) {
        Alert.alert('Success', 'User details updated successfully!');
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while updating your profile.');
    } finally {
    }
  };

  const checkData = async () => {
    const res = await getProfile();
    console.log('res', res?.data.data);
    if (res?.data.data.name) {
      setName(res?.data.data.name);
    }
    if (res?.data.data.phone) {
      setPhoneNumber(res?.data.data.phone);
    }
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <LeftArrow />
        </Pressable>
        <Text style={styles.headerText}>{t('EditProfileDetails')}</Text>
      </View>
      <View style={styles.inputContainer}>
        <ProfileInput
          label={t('name')}
          placeholder={t('enterName')}
          onChangeText={setName}
          value={name}
        />
        <ProfileInput
          label={t('PhoneNumber')}
          placeholder={t('EnteryourPhone')}
          onChangeText={setPhoneNumber}
          value={phoneNumber}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton text={t('saveProfile')} onPress={addData} />
      </View>
    </View>
  );
};

export default EditProfile;

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
