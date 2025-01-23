/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppIcon from '../../assets/images/logo/AppIcon';
import {ms, vs} from 'react-native-size-matters';
import Mic from '../../assets/images/getstarted/Mic';
import AppButton from '../../components/Button';
import GetIcon from '../../utils/GetIcon';
import GetStartedIcon from '../../assets/images/getstarted/GetStarted';

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.screenContainer}>
      <AppIcon width={vs(80)} height={vs(80)} />
      <GetStartedIcon
        width={400}
        height={400}
        style={{marginTop: vs(20), marginRight: 50}}
      />
      <Text style={styles.title}>
        An Iranian Radio from Southern California.
      </Text>
      <Text style={styles.punchLine}>
        The Future Belongs to the Nation of the Past Know Yourself Well.
      </Text>
      <View
        style={{
          marginTop: 'auto',
          marginVertical: vs(15),
          alignItems: 'center',
        }}>
        <AppButton
          onPress={() => {
            console.log('seting');
            navigation.navigate('Login');
          }}
          text="Get Started"
        />
        <Text style={{fontSize: ms(11)}}>
          By proceeding, you agree to our Terms & Conditions and Privacy policy.
        </Text>
      </View>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: '#ffffff',
    flex: 1,
    alignItems: 'center',
    paddingTop: vs(20),
  },
  title: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(32),
    color: '#251605',
    fontWeight: '700',
  },
  punchLine: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(18),
    fontWeight: '400',
    paddingHorizontal: 20,
    color: '#424242',
    textAlign: 'left',
  },
});
