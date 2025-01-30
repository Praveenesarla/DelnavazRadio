import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import ProfileOption from '../../components/ProfileOption';
import {getProfile} from '../../api/auth';
import {Skeleton} from 'native-base'; // Import Skeleton from native-base

const Profile = ({navigation}) => {
  const [name, setName] = useState('');
  const profileData = [
    {id: 1, title: 'editProfile', screenName: 'EditProfile'},
    {id: 2, title: 'helpSupport', screenName: 'HelpAndSupport'},
    {id: 3, title: 'aboutUs', screenName: 'About Us'},
    {id: 4, title: 'programsHosts', screenName: 'ProgramAndHost'},
    {id: 5, title: 'founders', screenName: 'Founders'},
    {id: 6, title: 'pressEvents', screenName: 'PressAndEvents'},
    {id: 7, title: 'nonProfit', screenName: 'NonProfit'},
    {id: 8, title: 'privacyPolicy', screenName: 'PrivacyPolicy'},
    {id: 9, title: 'accountPrivacy', screenName: 'AccountPrivacy'},
    {id: 10, title: 'Logout', screeName: 'Auth'},
  ];

  useEffect(() => {
    getName();
  }, []);

  const getName = async () => {
    const response = await getProfile();
    console.log('rep-profile', response?.data.data.name);
    setName(response?.data.data.name);
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.firstPart}>
        {/* Skeleton Loader for Profile Picture */}
        <View style={styles.profilePic}>
          {!name ? (
            <Skeleton size="lg" rounded="full" startColor={'coolGray.300'} />
          ) : (
            <Text
              style={{
                color: '#FFF',
                fontFamily: 'Gilroy-Medium',
                fontSize: 35,
              }}>
              {name[0]?.toUpperCase()}
            </Text>
          )}
        </View>

        {/* Skeleton Loader for Profile Name */}
        {!name ? (
          <Skeleton.Text
            lines={1}
            startColor={'coolGray.300'}
            marginTop={'10'}
          />
        ) : (
          <Text style={styles.profileName}>{name}</Text>
        )}
      </View>

      {/* Profile Menu Container */}
      <View style={styles.profileMenuContainer}>
        {/* Skeleton Loader for Profile Menu Items */}
        {!profileData ? (
          <FlatList
            scrollEnabled={false}
            data={[1, 2, 3, 4, 5]} // Fake data to show skeleton loader for menu items
            renderItem={() => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 15,
                }}>
                <Skeleton.Text lines={1} w="60%" startColor={'coolGray.300'} />
                <Skeleton size="4" rounded="full" startColor={'coolGray.300'} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        ) : (
          <FlatList
            scrollEnabled={false}
            data={profileData}
            renderItem={({item}) => (
              <ProfileOption item={item} navigation={navigation} />
            )}
            keyExtractor={item => item.id.toString()}
          />
        )}
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
    width: 100,
    height: 100,
    backgroundColor: '#463730',
    borderRadius: ms(64),
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontFamily: 'Inter-Medium',
    fontSize: ms(25),
    color: '#FFFFFF',
    marginTop: 10,
  },
  profileMenuContainer: {
    backgroundColor: '#ffffff',
    bottom: vs(70),
    width: '80%',
    left: '10%',
    borderRadius: ms(12),
  },
});
