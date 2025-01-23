import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useContext} from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import AppButton from '../../components/Button';
import ContactDetailsCard from '../../components/ContactDetailsCard';
import ContactCard from '../../components/ContactCard';
import MapCard from '../../assets/icons/MapCard';
import {useTranslation} from 'react-i18next';
import LanguageContext from '../../utils/LanguageContext';

const HelpAndSupport = () => {
  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);
  return (
    <ScrollView>
      <View style={styles.firstContainer}>
        <Text style={styles.topContent}>{t('helpAndSupport')}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={t('name')}
          placeholderTextColor={'#A1A3A2'}
          textAlign="left"
        />
        <TextInput
          style={styles.textInput}
          placeholder={t('email')}
          placeholderTextColor={'#A1A3A2'}
          textAlign="left"
        />
        <TextInput
          style={styles.textInput}
          placeholder={t('PhoneNumber')}
          placeholderTextColor={'#A1A3A2'}
          textAlign="left"
        />
        <TextInput
          style={styles.textInput}
          placeholder={t('Subject')}
          placeholderTextColor={'#A1A3A2'}
          textAlign="left"
        />
        <TextInput
          placeholderTextColor={'#A1A3A2'}
          style={[styles.textInput, styles.textArea]}
          placeholder={t('message')}
          multiline
          textAlign="left"
        />
        <View style={styles.buttonContainer}>
          <AppButton onPress={() => {}} text={t('sendMsg')} />
        </View>
      </View>
      <View style={styles.secondContainer}>
        <Image
          source={require('../../assets/HelpAndSupport/one.png')}
          style={styles.firstImage}
        />
        <Text style={styles.imageTilte}>{t('KhayyamBiography')}</Text>
      </View>
      <View style={styles.thirdContainer}>
        <ContactDetailsCard
          image={require('../../assets/HelpAndSupport/mail.png')}
          title={t('emailUs')}
          type={'radiodelnavaz@yahoo.com'}
        />
        <ContactDetailsCard
          image={require('../../assets/HelpAndSupport/location.png')}
          title={t('address')}
          type={'11540 Rockfield Blvd, Irvine, CA 92618'}
        />
        <ContactDetailsCard
          image={require('../../assets/HelpAndSupport/phone.png')}
          title={t('callUs')}
          type={'1-(310)-848-8290 ,1-(949)-424-4718'}
        />
      </View>
      <MapCard />
      <ContactCard />
    </ScrollView>
  );
};

export default HelpAndSupport;

const styles = StyleSheet.create({
  firstContainer: {paddingHorizontal: s(15), paddingBottom: vs(20)},
  textInput: {
    backgroundColor: '#E6E8E7',
    borderRadius: ms(6),
    marginVertical: vs(5),
    paddingHorizontal: s(8),
  },
  topContent: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(16),
    color: '#251605',
    paddingVertical: vs(15),
    textAlign: 'left',
  },
  textArea: {minHeight: vs(100), textAlignVertical: 'top'},
  buttonContainer: {alignItems: 'center'},
  secondContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: vs(25),
    paddingHorizontal: s(15),
  },
  firstImage: {width: '100%', height: vs(380), resizeMode: 'cover'},
  imageTilte: {
    color: '#251605',
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(20),
    textAlign: 'center',
    paddingVertical: vs(10),
  },
  thirdContainer: {
    backgroundColor: '#06070E',
    flex: 1,
    paddingHorizontal: s(15),
    paddingVertical: vs(20),
    gap: 15,
  },
});
