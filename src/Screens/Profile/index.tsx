/* eslint-disable prettier/prettier */
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import ProfileOption from '../../components/ProfileOption';
import {getProfile} from '../../api/auth';

const Profile = ({navigation}) => {
  const [name, setName] = useState('');
  const profileData = [
    {id: 1, title: 'Edit Profile', screenName: 'EditProfile'},
    {id: 2, title: 'Help & Support', screenName: 'HelpAndSupport'},
    {id: 3, title: 'About us', screenName: 'About Us'},
    {id: 4, title: 'Programs & Hosts', screenName: 'ProgramAndHost'},
    {id: 5, title: 'Founders', screenName: 'Founders'},
    {id: 6, title: 'Press & Events', screenName: 'PressAndEvents'},
    {id: 7, title: 'Nonprofit', screenName: 'NonProfit'},
    {id: 8, title: 'Privacy Policy', screenName: 'PrivacyPolicy'},
    {id: 9, title: 'Account Privacy', screenName: 'AccountPrivacy'},
    {id: 10, title: 'Logout', screeName: 'Auth'},
  ];

  useEffect(() => {
    getName();
  }, []);

  const getName = async () => {
    const response = await getProfile();
    console.log('reposne', response?.data.data?.name);
    setName(response?.data.data?.name);
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.firstPart}>
        <View style={styles.profilePic} />
        <Text style={styles.profileName}>{name}</Text>
      </View>
      <View style={styles.profileMenuContainer}>
        <FlatList
          scrollEnabled={false}
          data={profileData}
          renderItem={({item}) => (
            <ProfileOption item={item} navigation={navigation} />
          )}
          keyExtractor={item => item.id.toString()} // Add keyExtractor
        />
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {flex: 1, backgroundColor: '#dfe4ed'},
  firstPart: {
    backgroundColor: '#251605',
    height: '31%',
    alignItems: 'center',
    paddingHorizontal: s(30),
    paddingBottom: vs(100),
    padding: ms(28),
  },
  profilePic: {
    width: s(100),
    height: vs(90),
    backgroundColor: '#463730',
    borderRadius: ms(64),
  },
  profileName: {
    fontFamily: 'Inter-Medium',
    fontSize: ms(20),
    color: '#FFFFFF',
  },
  profileMenuContainer: {
    backgroundColor: '#ffffff',
    bottom: vs(70),
    width: '80%',
    left: '10%',
    borderRadius: ms(12),
  },
});
