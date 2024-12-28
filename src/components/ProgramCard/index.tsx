/* eslint-disable prettier/prettier */
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';

const ProgramCard = ({
  title = 'Exploration of Music’s Profound Impact',
  description = 'Music, often regarded as the genesis of human expression, traces back to humanity’s earliest attempts to articulate emotions through sound. It served as a language akin to speech, each melodious note resonating with the innate rhythms of human existence. Among the pantheon of artistic achievements, none rivals music in its ability to forge a profound connection with the cadence of life. It springs from the depths of the human soul, stirring veins and spirit alike. Esteemed scholars have tirelessly endeavored to safeguard and exalt its significance, recognizing its transformative power to elevate individuals from the mundane to the transcendent realms of existence. True music transcends mere auditory pleasure, delving into the most enigmatic recesses of the soul to commune in whispers with the ineffable.',
  host = 'Mrs. Parnian',
  imageSource = require('../../assets/images/cards/event.png'),
}) => {
  return (
    <Pressable style={styles.container}>
      <Image source={imageSource} style={styles.imageStyle} />
      <View style={styles.content}>
        <Text style={styles.headStyle}>{title}</Text>
        <Text numberOfLines={4} style={styles.descStyle}>
          {description}
        </Text>
        <View style={styles.authorContainer}>
          <Image source={imageSource} style={styles.authorImage} />
          <Text style={styles.author}>Hosted by {host}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProgramCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: s(280),
    height: vs(330),
    borderWidth: s(0.2),
    borderRadius: ms(10),
    overflow: 'hidden',
  },
  imageStyle: {
    height: '47%',
    resizeMode: 'cover',
    width: '100%',
  },
  headStyle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(17),
    fontWeight: '600',
    color: '#251605',
  },
  descStyle: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(14),
    color: '#424242',
  },
  author: {
    fontSize: ms(12),
    fontFamily: 'Inter-Medium',
    color: '#251605',
  },
  content: {padding: 14, gap: 8},
  authorContainer: {flexDirection: 'row', alignItems: 'center', gap: 5},
  authorImage: {width: s(28), height: vs(28), borderRadius: ms(14)},
});
