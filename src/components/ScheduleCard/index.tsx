import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';

const ScheduleCard = ({item}) => {
  return (
    <View
      style={{
        borderColor: '#F2E3BC',
        borderWidth: s(2),
        flexDirection: 'row',
        marginHorizontal: s(15),
        marginTop: vs(14),
        gap: 15,
        alignItems: 'center',
        borderRadius: ms(6),
      }}>
      <Image
        source={require('../../assets/images/baner2.jpg')}
        style={{width: s(80), height: vs(80), borderRadius: ms(10)}}
      />
      <View style={{justifyContent: 'space-around', gap: 8}}>
        <Text style={{fontFamily: 'Inter-Regular'}}>{item.duration}</Text>

        <Text
          style={{color: 'black', fontFamily: 'Inter-Bold', fontSize: ms(15)}}>
          {item.title}
        </Text>
        <Text
          style={{
            fontFamily: 'Inter-Regular',
            color: '#808080',
            fontSize: ms(14),
          }}>
          {item.host}
        </Text>
      </View>
    </View>
  );
};

export default ScheduleCard;

const styles = StyleSheet.create({});
