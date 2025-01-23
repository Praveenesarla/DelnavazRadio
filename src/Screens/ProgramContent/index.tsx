import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import ContactCard from '../../components/ContactCard';
import {useTranslation} from 'react-i18next';

const ProgramContent = ({navigation}) => {
  const {t} = useTranslation();
  return (
    <ScrollView>
      <ImageBackground
        source={require('../../assets/images/cards/event.png')}
        style={{width: '100%', height: vs(250)}}
        resizeMode="cover"
        resizeMethod="resize">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../../assets/ProgramContent/ArrowLeft.png')}
            style={{
              width: s(25),
              height: vs(25),
              marginHorizontal: s(15),
              marginVertical: vs(30),
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
      <View style={{paddingHorizontal: s(15)}}>
        <Text style={styles.title}>{t('ExplorationMusicProfoundImpact')}</Text>
        <Text style={styles.description}>{t('programCardContent')}</Text>
      </View>
      <View style={{paddingHorizontal: s(15), paddingVertical: vs(20)}}>
        <Image
          source={require('../../assets/ProgramContent/host.png')}
          style={{width: '100%', height: vs(180), resizeMode: 'cover'}}
        />
        <Text style={styles.title}>
          {t('host')}: {t('ParnianProgrammer')}
        </Text>
        <Text style={styles.description}>{t('programmerData')}</Text>
      </View>
      <View
        style={{
          paddingHorizontal: s(15),
          paddingVertical: vs(10),
          paddingBottom: vs(100),
        }}>
        <Image
          source={require('../../assets/ProgramContent/third.png')}
          style={{width: '100%', height: vs(150), borderRadius: ms(10)}}
        />
        <Text style={styles.thirdContainerText}>
          {t('MusicProfoundImpact')}
        </Text>
      </View>
      <ContactCard />
    </ScrollView>
  );
};

export default ProgramContent;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter-SemiBold',
    color: '#251605',
    fontSize: ms(18),
    paddingVertical: vs(5),
    paddingTop: vs(18),
    textAlign: 'left',
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(16),
    paddingVertical: vs(5),
    textAlign: 'left',
  },
  thirdContainerText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(20),
    textAlign: 'center',
  },
});
