import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import ContactCard from '../../components/ContactCard';
import {useTranslation} from 'react-i18next';
import LanguageContext from '../../utils/LanguageContext';

const Founders = ({navigation}) => {
  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);
  const goToFeed = () => {
    navigation.navigate('App', {screen: 'Profile'});
  };
  return (
    <ScrollView>
      <View
        style={{
          width: '100%',
          height: vs(100),
          backgroundColor: '#A9927D',
          paddingHorizontal: s(15),
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Inter-SemiBold',
            color: '#FFFFFF',
            fontSize: ms(20),
            textAlign: 'left',
          }}>
          {t('BabakSafvat')}
        </Text>
        <Text
          style={{
            fontFamily: 'Inter-SemiBold',
            color: '#FFFFFF',
            fontSize: ms(20),
            textAlign: 'left',
          }}>
          {t('FounderProducer')}
        </Text>
      </View>
      <LinearGradient
        colors={['#FFFFFF', '#F2E3BC80']} // White to Beige with 50% opacity
        start={{x: 1, y: 0}} // Start from the right
        end={{x: 0, y: 0}} // End at the left
        style={{
          width: '100%',
          height: 'auto',
          paddingHorizontal: s(15),
          padding: ms(15),
        }}>
        <Text style={styles.titleText}>{t('BiographyDiary')}</Text>
        <Text
          style={{
            fontFamily: 'Inter-Regular',
            fontSize: ms(16),
            color: '#424242',
            textAlign: 'left',
          }}>
          {t('foundersFirstLi')}
        </Text>
        <Image
          source={require('../../assets/founders/one.png')}
          style={styles.imageContainer}
        />
        <Text style={styles.titleText}>{t('ArtisticProductions')}</Text>
        <Text style={styles.paraText}>{t('foundersSecLin')}</Text>
        <Text style={styles.titleText}>{t('soundProjectPersepolis')}</Text>
        <Text style={styles.paraText}>{t('foundersThirdLine')}</Text>
        <Text style={styles.titleText}>{t('MysticalStudiesWrittenWorks')}</Text>
        <Text style={styles.paraText}>{t('foundersFourLin')}</Text>
        <Text style={styles.titleText}>{t('AboutRumi')}</Text>
        <Text style={styles.paraText}>{t('foundersFiveLine')}</Text>
        <Image
          source={require('../../assets/founders/two.png')}
          style={styles.imageContainer}
        />
        <Text style={styles.titleText}>{t('RumiGlobalCenter')}</Text>
        <Text style={styles.paraText}>{t('foundeSixLine')}</Text>
        <Image
          source={require('../../assets/founders/three.png')}
          style={styles.imageContainer}
        />
        <Text style={styles.titleText}>{t('IntheeveningofGod')}</Text>
        <Text style={styles.paraText}>{t('foundersSeventhLine')}</Text>
        <Text style={styles.paraText}>{t('foundersEightLine')}</Text>
        <Text style={styles.titleText}>{t('RadioMehr')}</Text>
        <Text style={styles.paraText}>{t('foundersNineLine')}</Text>
        <Text style={styles.titleText}>{t('DelnavazPodcast')}</Text>
        <Text style={styles.paraText}>{t('foundersTenLine')}</Text>
      </LinearGradient>
      <View
        style={{
          width: '100%',
          height: vs(100),
          backgroundColor: '#A9927D',
          paddingHorizontal: s(15),
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Inter-SemiBold',
            color: '#FFFFFF',
            fontSize: ms(20),
          }}>
          {t('Babaksafvat')}
        </Text>
        <Text
          style={{
            fontFamily: 'Inter-SemiBold',
            color: '#FFFFFF',
            fontSize: ms(20),
          }}>
          {t('Founderproducer')}
        </Text>
      </View>
      <LinearGradient
        colors={['#FFFFFF', '#F2E3BC80']} // White to Beige with 50% opacity
        start={{x: 1, y: 0}} // Start from the right
        end={{x: 0, y: 0}} // End at the left
        style={{
          width: '100%',
          height: 'auto',
          paddingHorizontal: s(15),
          padding: ms(15),
          paddingVertical: vs(20),
        }}>
        <Text style={styles.titleText}>{t('BiographyofArashMadah')}</Text>
        <Text style={styles.paraText}>{t('foundersElevenLin')}</Text>
        <Image
          source={require('../../assets/founders/four.png')}
          style={styles.imageContainer}
        />
        <Text style={styles.titleText}>{t('StepsoflearningScience')}</Text>
        <Text style={styles.paraText}>{t('foundersTwelveLin')}</Text>
        <Text style={styles.titleText}>{t('ImmigrationtoAmerica')}</Text>
        <Text style={styles.paraText}>{t('founderthirteenLine')}</Text>
        <Text style={styles.titleText}>{t('OtherArts')}</Text>
        <Text style={[styles.paraText]}>{t('foundersFourteenLine')}</Text>
      </LinearGradient>
      <ContactCard />
    </ScrollView>
  );
};

export default Founders;

const styles = StyleSheet.create({
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
    paddingVertical: vs(5),
  },
  paraText: {
    paddingVertical: vs(5),
    fontSize: ms(16),
    textAlign: 'left',
  },
});
