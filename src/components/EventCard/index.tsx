import {Image, Linking, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import RightArrow from '../../assets/icons/RightArrow';
import {useTranslation} from 'react-i18next';
import LanguageContext from '../../utils/LanguageContext';

const EventCard = () => {
  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);

  const openURL = async (url: string): Promise<void> => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/cards/event2.png')}
        style={styles.image}
      />
      <View style={{padding: ms(15), gap: 5}}>
        <Text style={styles.head}>{t('CulturalEducationaConference')}</Text>
        <Text style={styles.title}>{t('EducationalSeminarCelebration')}</Text>
        <Text style={styles.time}>{t('June52024')}</Text>
        <Text style={styles.content} numberOfLines={6}>
          {t('eventCardLine')}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text onPress={() => openURL('https://delnavazradio.com/home-2/')}>
            {t('READMORE')}
          </Text>
          <RightArrow />
        </View>
      </View>
    </View>
  );
};

export default EventCard;

const styles = StyleSheet.create({
  container: {
    height: vs(400),
    width: s(280),
    borderWidth: ms(0.2),
    borderRadius: ms(10),
    overflow: 'hidden',
    borderColor: '#251605',
  },
  image: {
    height: '44%',
    resizeMode: 'cover',
    width: '100%',
  },
  head: {
    fontFamily: 'Inter-Medium',
    fontSize: ms(14),
    color: '#FFB800',
    textAlign: 'left',
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(17),
    color: '#251605',
    textAlign: 'left',
  },
  time: {
    color: '#989898',
    fontFamily: 'Inter-Regular',
    fontSize: ms(10),
    textAlign: 'left',
  },
  content: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(14),
    color: '#424242',
    textAlign: 'left',
  },
});
