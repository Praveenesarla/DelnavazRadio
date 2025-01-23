import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import ContactCard from '../../components/ContactCard';
import {useTranslation} from 'react-i18next';
import LanguageContext from '../../utils/LanguageContext';

const NonProfit = () => {
  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);
  return (
    <ScrollView style={{paddingVertical: vs(10)}}>
      <View
        style={{
          paddingVertical: vs(10),
          paddingBottom: vs(20),
          paddingHorizontal: s(15),
        }}>
        <Text style={styles.title}>{t('nonProfitDelnavz')}</Text>
        <Text style={styles.paragraph}>{t('nonProfitFirstLine')}</Text>
        <Text style={styles.paragraph}>{t('nonProfitSecondLine')}</Text>
        <Text style={styles.paragraph}>{t('nonProfitThirdLine')}</Text>
        <Image
          source={require('../../assets/Nonprofit/one.png')}
          style={styles.imageContainer}
        />
        <Text style={styles.title}>{t('ANewAirWaves')}</Text>
        <Text style={styles.paragraph}>{t('nonProfitFourthLin')}</Text>
        <Text style={styles.title}>{t('ProgrammingwithPurpose')}</Text>
        <Text style={styles.paragraph}>{t('nonProfitFifthLine')}</Text>
        <Text style={styles.title}>{t('CommunityEngagementandSupport')}</Text>
        <Text style={styles.paragraph}>{t('nonProfitSixLin')}</Text>
        <Text style={styles.title}>{t('BridgingCultures')}</Text>
        <Text style={styles.paragraph}>{t('nonProfitSeventhLine')}</Text>
        <Text style={styles.title}>{t('TuneInandConnect')}</Text>
        <Text style={styles.paragraph}>{t('nonProfitEightLine')}</Text>
        <Text style={styles.paragraph}>{t('nonProfitNineLine')}</Text>
      </View>
      <ContactCard />
    </ScrollView>
  );
};

export default NonProfit;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(21),
    color: '#251605',
    paddingVertical: vs(5),
    textAlign: 'left',
  },
  paragraph: {
    color: '#424242',
    fontFamily: 'Inter-regular',
    fontSize: ms(16),
    paddingVertical: vs(5),
    textAlign: 'left',
  },
  imageContainer: {
    width: s(320),
    height: vs(200),
    marginVertical: vs(17),
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
