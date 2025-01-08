import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import RightArrow from '../../assets/icons/RightArrow';

const EventCard = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/cards/event2.png')}
        style={styles.image}
      />
      <View style={{padding: ms(15), gap: 5}}>
        <Text style={styles.head}>Cultural and Educational Conference</Text>
        <Text style={styles.title}>
          Educational Seminar – Celebration of Rumi
        </Text>
        <Text style={styles.time}>June 5, 2024</Text>
        <Text style={styles.content}>
          Cultural and educational conference Delnavaz Non-Profit Foundation
          Location: Irvine, California Everyone is aware that in the Western
          world, particularly after the publication of…
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text>READ MORE</Text>
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
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(17),
    color: '#251605',
  },
  time: {
    color: '#989898',
    fontFamily: 'Inter-Regular',
    fontSize: ms(10),
  },
  content: {
    fontFamily: 'Inter-Regular',
    fontSize: ms(14),
    color: '#424242',
  },
});
