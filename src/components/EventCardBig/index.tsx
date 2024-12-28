import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import RightArrow from '../../assets/icons/RightArrow';

const EventCardBig = () => {
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
          Cultural and Educational Conference
        </Text>
        <Text
          style={{
            color: '#251605',
            fontFamily: 'Inter-SemiBold',
            fontSize: ms(20),
          }}>
          Educational Seminar – Celebration of Rumi
        </Text>
        <Text
          style={{
            color: '#989898',
            fontFamily: 'Inter-Regular',
            fontSize: ms(12),
          }}>
          June 5, 2024
        </Text>
        <Text
          style={{
            fontFamily: 'Inter-Regular',
            fontSize: ms(16),
            color: '#424242',
          }}>
          Cultural and educational conference Delnavaz Non-Profit Foundation
          Location: Irvine, California Everyone is aware that in the Western
          world, particularly after the publication of…
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
            READ MORE
          </Text>
          <RightArrow />
        </View>
      </View>
    </View>
  );
};

export default EventCardBig;

const styles = StyleSheet.create({});
