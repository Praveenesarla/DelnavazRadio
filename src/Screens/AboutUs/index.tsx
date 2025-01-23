import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import ContactCard from '../../components/ContactCard';
import LanguageContext from '../../utils/LanguageContext';
import {useTranslation} from 'react-i18next';

const AboutUs = ({navigation}) => {
  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);
  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{alignItems: 'center'}}>
      {/* First Section */}
      <View style={styles.firstContainer}>
        <Image
          source={require('../../assets/aboutus/one.png')}
          style={styles.imageContainer}
        />
        <Text style={styles.titleText}>{t('esteemedGlobalPodcast')}</Text>
        <View>
          <Text style={styles.paraText}>{t('firstLine')}</Text>
          <Text style={styles.paraText}>{t('secLine')}</Text>
          <Text style={styles.paraText}>{t('thirdLine')}</Text>
          <Text style={styles.paraText}></Text>
          <Text style={styles.paraText}>{t('fourtLine')}</Text>
          <Text style={styles.paraText}>{t('fifthLine')}</Text>
        </View>
      </View>

      {/* Second Section */}
      <View style={styles.secondContainer}>
        <Image
          source={require('../../assets/aboutus/two.png')}
          style={styles.imageContainer}
        />
        <Text style={styles.titleText}>{t('radioDir')}</Text>
        <View>
          <Text style={styles.paraText}>{t('sixthLine')}</Text>
          <Text style={styles.paraText}>{t('seventhLine')}</Text>
          {/* <Text style={styles.paraText}>
            Interviews with intellectuals from Iran’s children’s products
            department “Aunt Bear’s Tree of Knowledge” podcast segment.
          </Text> */}
        </View>
      </View>

      {/* Third Section */}
      <LinearGradient
        colors={['#BCE2B7', '#2E4E2E']}
        style={{
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: s(15),
          paddingVertical: vs(30),
        }}>
        <Image
          source={require('../../assets/aboutus/three.png')}
          style={{width: '100%', height: 430, resizeMode: 'cover'}}
        />
        <Text style={[styles.titleText, {color: '#ffffff'}]}>
          {t('radioDir2')}
        </Text>
        <View>
          <Text style={[styles.paraText, {color: '#ffffff'}]}>
            {t('eightLine')}
          </Text>
          <Text style={[styles.paraText, {color: '#ffffff'}]}>
            {t('ninthLine')}
          </Text>
          <Text style={[styles.paraText, {color: '#ffffff'}]}>
            {t('tenthLine')}
          </Text>
        </View>
      </LinearGradient>
      <ContactCard />
    </ScrollView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  firstContainer: {
    paddingHorizontal: s(14),
    alignItems: 'center',
    paddingVertical: vs(14),
  },
  secondContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: s(14),
    paddingVertical: vs(20),
  },
  imageContainer: {
    width: s(320),
    height: vs(200),
    marginVertical: vs(20),
    borderRadius: 10,
    resizeMode: 'cover',
  },
  titleText: {
    fontFamily: 'Inter-SemiBold',
    alignSelf: 'flex-start',
    fontSize: ms(20),
    color: '#251605',
  },
  paraText: {
    paddingVertical: vs(5),
    fontSize: ms(16),
    textAlign: 'left',
  },
});
