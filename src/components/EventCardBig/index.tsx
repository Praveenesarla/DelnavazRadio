import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import RightArrow from '../../assets/icons/RightArrow';
import {useTranslation} from 'react-i18next';
import LanguageContext from '../../utils/LanguageContext';

const EventCardBig = () => {
  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);
  return (
    <View
      style={{
        width: '100%',
        height: vs(399),
        borderRadius: ms(12),
        overflow: 'hidden',
        gap: 5,
        backgroundColor: '#FFFFFF',
      }}>
      <Image
        source={require('../../assets/images/cards/event2.png')}
        style={{width: '100%', height: '42%', resizeMode: 'cover'}}
      />
      <View style={{padding: ms(15)}}>
        <Text
          style={{
            fontFamily: 'Inter-Medium',
            fontSize: ms(16),
            color: '#FFB800',
          }}>
          {t('CulturalEducationaConference')}
        </Text>
        <Text
          style={{
            color: '#251605',
            fontFamily: 'Inter-SemiBold',
            fontSize: ms(20),
          }}>
          {t('EducationalSeminarCelebration')}
        </Text>
        <Text
          style={{
            color: '#989898',
            fontFamily: 'Inter-Regular',
            fontSize: ms(12),
          }}>
          {t('June52024')}
        </Text>
        <Text
          numberOfLines={6}
          style={{
            fontFamily: 'Inter-Regular',
            fontSize: ms(16),
            color: '#424242',
          }}>
          {t('eventCardLine')}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            width: s(200),
            alignItems: 'center',
            gap: 5,
            paddingTop: vs(10),
          }}>
          <Text
            style={{
              color: '#3E3E3E',
              fontFamily: 'Inter-Medium',
              fontSize: ms(12),
            }}>
            {t('READMORE')}
          </Text>
          <RightArrow />
        </View>
      </View>
    </View>
  );
};

export default EventCardBig;

const styles = StyleSheet.create({});
