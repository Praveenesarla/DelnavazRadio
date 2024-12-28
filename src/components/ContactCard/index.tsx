import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';

const ContactCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoAndCompany}>
        <Image
          source={require('../../assets/ContactCard/logo.png')}
          style={styles.logo}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Delnavaz Persian Radio</Text>
          <Text style={styles.description}>Iranian, Orange County Podcast</Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.lastContainer}>
        <Text style={styles.trademark}>© 2024 Delnavaz Radio</Text>
        <View style={styles.socialmediaContainer}>
          <Image
            source={require('../../assets/ContactCard/instagram.png')}
            style={{width: s(15), height: vs(16), resizeMode: 'contain'}}
          />
          <Image
            source={require('../../assets/ContactCard/facebook.png')}
            style={{width: s(15), height: vs(16), resizeMode: 'contain'}}
          />
          <Image
            source={require('../../assets/ContactCard/twitter.png')}
            style={{width: s(15), height: vs(16), resizeMode: 'contain'}}
          />
        </View>
      </View>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#463730',
    width: '100%',
    paddingVertical: vs(25),
    paddingHorizontal: s(15),
    paddingBottom: vs(5),
  },
  logo: {width: s(105), height: vs(100)},
  titleContainer: {paddingVertical: vs(12)},
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(16),
    color: '#FFFFFF',
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(12),
    color: '#FFFFFF',
  },
  line: {backgroundColor: '#FFFFFF', height: vs(0.5)},
  lastContainer: {
    paddingVertical: vs(13),
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  trademark: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(12),
    color: '#FFFFFF',
  },
  socialmediaContainer: {flexDirection: 'row', gap: 10},
  logoAndCompany: {gap: 5},
});
