// LiveRoomCard.js
import React, {useContext} from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';
import AppButton from '../Button';
import LottieView from 'lottie-react-native';
import {useTranslation} from 'react-i18next';
import LanguageContext from '../../utils/LanguageContext';

const LiveRoomCard = ({onJoin}) => {
  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);
  return (
    <View style={styles.card}>
      <Image
        source={require('../../assets/images/banner.jpg')}
        style={styles.image}
      />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.title}>{t('LivePodcast')}</Text>
          <Text style={styles.description}>{t('DelnavazPodcast')}</Text>
        </View>
        <LottieView
          source={require('../../assets/icons/livestreaming3.json')}
          autoPlay
          loop
          style={{width: 60, height: 60}} // Adjust width if needed
        />
      </View>

      <View style={{alignItems: 'center', paddingVertical: 2}}>
        <AppButton text={t('StartListening')} onPress={onJoin} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    fontFamily: 'Gilroy-Medium',
  },
  description: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
    textAlign: 'left',
  },
});

export default LiveRoomCard;
