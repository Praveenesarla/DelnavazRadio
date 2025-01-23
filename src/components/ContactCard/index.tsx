import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';
import LanguageContext from '../../utils/LanguageContext';

const ContactCard = () => {
  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoAndCompany}>
        <Image
          source={require('../../assets/ContactCard/logo.png')}
          style={styles.logo}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{t('delnavazRadio')}</Text>
          <Text style={styles.description}>
            {t('IraninaOrangeCountyPodcast')}
          </Text>
        </View>
      </View>
      <View style={styles.line} />
      <View style={styles.lastContainer}>
        <Text style={styles.trademark}>{t('trademark')}</Text>
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
    textAlign: 'left',
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(12),
    color: '#FFFFFF',
    textAlign: 'left',
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
    textAlign: 'left',
  },
  socialmediaContainer: {flexDirection: 'row', gap: 10},
  logoAndCompany: {gap: 5},
});
