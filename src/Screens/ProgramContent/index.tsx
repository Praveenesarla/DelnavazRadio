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

const ProgramContent = ({navigation}) => {
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
        <Text style={styles.title}>Exploration of Music’s Profound Impact</Text>
        <Text style={styles.description}>
          Music, often regarded as the genesis of human expression, traces back
          to humanity’s earliest attempts to articulate emotions through sound.
          It served as a language akin to speech, each melodious note resonating
          with the innate rhythms of human existence. Among the pantheon of
          artistic achievements, none rivals music in its ability to forge a
          profound connection with the cadence of life. It springs from the
          depths of the human soul, stirring veins and spirit alike. Esteemed
          scholars have tirelessly endeavored to safeguard and exalt its
          significance, recognizing its transformative power to elevate
          individuals from the mundane to the transcendent realms of existence.
          True music transcends mere auditory pleasure, delving into the most
          enigmatic recesses of the soul to commune in whispers with the
          ineffable.
        </Text>
      </View>
      <View style={{paddingHorizontal: s(15), paddingVertical: vs(20)}}>
        <Image
          source={require('../../assets/ProgramContent/host.png')}
          style={{width: '100%', height: vs(180), resizeMode: 'cover'}}
        />
        <Text style={styles.title}>Host: Mrs. Parnian, Programmer</Text>
        <Text style={styles.description}>
          Mrs. Parnian, a luminary born in Tehran in 1986, has cultivated a
          multifaceted career spanning mathematics, ancient Iranian literature,
          and the performing arts. Armed with a mathematics degree from
          Amirkabir University of Technology and a master’s in pure mathematics
          from Tarbiat Modares University, she has dedicated over a decade to
          educating young minds in non-profit institutions. Her profound
          reverence for ancient Iranian literature propelled her on a seven-year
          odyssey through its hallowed annals. A polymath in her own right, Mrs.
          Parnian has seamlessly woven her academic pursuits with a passion for
          the performing arts. Embarking on a journey that saw her grace the
          silver screen in prominent roles, she also immersed herself in the
          rich tapestry of Iranian vocal traditions, enriching her repertoire as
          a member of esteemed music ensembles. Her erudition finds expression
          not only in the classroom but also on the airwaves, where she has lent
          her voice to the elucidation of literary and mystical texts on Mehr
          Radio.
        </Text>
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
        <Text style={styles.thirdContainerText}>Music’s Profound Impact</Text>
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
  },
  description: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(16),
    paddingVertical: vs(5),
  },
  thirdContainerText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(20),
    textAlign: 'center',
  },
});
