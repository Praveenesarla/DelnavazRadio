import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import ProgramCardBig from '../../components/ProgramCardBig';
import ContactCard from '../../components/ContactCard';
import ContactDetailsCard from '../../components/ContactDetailsCard';

const ProgramsAndHosts = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <ProgramCardBig
          navigation={navigation}
          banner={require('../../assets/images/cards/event.png')}
          host={`Mrs. Anahita`}
          description={`Music, often regarded as the genesis of human expression, traces back to humanity’s earliest attempts to articulate emotions through sound. It served as a language akin to speech, each melodious note resonating with the innate rhythms of human existence. Among the pantheon of artistic achievements, none rivals music in its ability to forge a profound connection with the cadence of life. It springs from the depths of the human soul, stirring veins and spirit alike. Esteemed scholars have tirelessly endeavored to safeguard and exalt its significance, recognizing its transformative power to elevate individuals from the mundane to the transcendent realms of existence. True music transcends mere auditory pleasure, delving into the most enigmatic recesses of the soul to commune in whispers with the ineffable`}
          title={`Exploration of Music’s Profound Impact`}
          profileImage={require('../../assets/ProgramCardBig/one.png')}
        />
        <ProgramCardBig
          navigation={navigation}
          banner={require('../../assets/ProgramCardBig/five.png')}
          host={`Mrs. Anahita`}
          description={`Music, often regarded as the genesis of human expression, traces back to humanity’s earliest attempts to articulate emotions through sound. It served as a language akin to speech, each melodious note resonating with the innate rhythms of human existence. Among the pantheon of artistic achievements, none rivals music in its ability to forge a profound connection with the cadence of life. It springs from the depths of the human soul, stirring veins and spirit alike. Esteemed scholars have tirelessly endeavored to safeguard and exalt its significance, recognizing its transformative power to elevate individuals from the mundane to the transcendent realms of existence. True music transcends mere auditory pleasure, delving into the most enigmatic recesses of the soul to commune in whispers with the ineffable`}
          title={`Exploration of Music’s Profound Impact`}
          profileImage={require('../../assets/ProgramsAndHosts/profile1.png')}
        />
        <ProgramCardBig
          navigation={navigation}
          banner={require('../../assets/ProgramCardBig/four.png')}
          host={`Mrs. Anahita`}
          description={`Music, often regarded as the genesis of human expression, traces back to humanity’s earliest attempts to articulate emotions through sound. It served as a language akin to speech, each melodious note resonating with the innate rhythms of human existence. Among the pantheon of artistic achievements, none rivals music in its ability to forge a profound connection with the cadence of life. It springs from the depths of the human soul, stirring veins and spirit alike. Esteemed scholars have tirelessly endeavored to safeguard and exalt its significance, recognizing its transformative power to elevate individuals from the mundane to the transcendent realms of existence. True music transcends mere auditory pleasure, delving into the most enigmatic recesses of the soul to commune in whispers with the ineffable`}
          title={`Exploration of Music’s Profound Impact`}
          profileImage={require('../../assets/ProgramsAndHosts/profile2.png')}
        />
        <ProgramCardBig
          navigation={navigation}
          banner={require('../../assets/ProgramCardBig/one.png')}
          host={`Mrs. Anahita`}
          description={`Music, often regarded as the genesis of human expression, traces back to humanity’s earliest attempts to articulate emotions through sound. It served as a language akin to speech, each melodious note resonating with the innate rhythms of human existence. Among the pantheon of artistic achievements, none rivals music in its ability to forge a profound connection with the cadence of life. It springs from the depths of the human soul, stirring veins and spirit alike. Esteemed scholars have tirelessly endeavored to safeguard and exalt its significance, recognizing its transformative power to elevate individuals from the mundane to the transcendent realms of existence. True music transcends mere auditory pleasure, delving into the most enigmatic recesses of the soul to commune in whispers with the ineffable`}
          title={`Exploration of Music’s Profound Impact`}
          profileImage={require('../../assets/ProgramsAndHosts/profile1.png')}
        />
        <ProgramCardBig
          navigation={navigation}
          banner={require('../../assets/ProgramCardBig/two.png')}
          host={`Mrs. Anahita`}
          description={`Music, often regarded as the genesis of human expression, traces back to humanity’s earliest attempts to articulate emotions through sound. It served as a language akin to speech, each melodious note resonating with the innate rhythms of human existence. Among the pantheon of artistic achievements, none rivals music in its ability to forge a profound connection with the cadence of life. It springs from the depths of the human soul, stirring veins and spirit alike. Esteemed scholars have tirelessly endeavored to safeguard and exalt its significance, recognizing its transformative power to elevate individuals from the mundane to the transcendent realms of existence. True music transcends mere auditory pleasure, delving into the most enigmatic recesses of the soul to commune in whispers with the ineffable`}
          title={`Exploration of Music’s Profound Impact`}
          profileImage={require('../../assets/ProgramsAndHosts/profile1.png')}
        />
        <ProgramCardBig
          navigation={navigation}
          banner={require('../../assets/ProgramCardBig/three.png')}
          host={`Mrs. Anahita`}
          description={`Music, often regarded as the genesis of human expression, traces back to humanity’s earliest attempts to articulate emotions through sound. It served as a language akin to speech, each melodious note resonating with the innate rhythms of human existence. Among the pantheon of artistic achievements, none rivals music in its ability to forge a profound connection with the cadence of life. It springs from the depths of the human soul, stirring veins and spirit alike. Esteemed scholars have tirelessly endeavored to safeguard and exalt its significance, recognizing its transformative power to elevate individuals from the mundane to the transcendent realms of existence. True music transcends mere auditory pleasure, delving into the most enigmatic recesses of the soul to commune in whispers with the ineffable`}
          title={`Exploration of Music’s Profound Impact`}
          profileImage={require('../../assets/ProgramsAndHosts/profile.png')}
        />
      </View>
      <View style={{marginTop: vs(15)}}>
        <ContactCard />
      </View>
    </ScrollView>
  );
};

export default ProgramsAndHosts;

const styles = StyleSheet.create({
  mainContainer: {paddingHorizontal: s(15), gap: 15},
  imageContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    height: vs(360),
    borderRadius: ms(12),
    marginVertical: vs(5),
    overflow: 'hidden',
  },
  image: {width: '100%', height: '45%'},
  titleText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(19),
    color: '#251605',
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(15),
    color: '#424242',
  },
  profileImage: {width: 40, height: 40},
  contentContainer: {padding: 15, gap: 8},
  profileDetails: {flexDirection: 'row', alignItems: 'center', gap: 7},
});
