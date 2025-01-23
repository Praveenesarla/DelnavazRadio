/* eslint-disable prettier/prettier */
import {StyleSheet, View, Dimensions, Text, Image} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import AppIcon from '../../assets/images/logo/AppIcon';
import {horizontalScale, verticalScale} from '../../utils/scaling';
import {ms} from 'react-native-size-matters';
import {Screen} from 'react-native-screens';
import {getToken} from '../../api/localstorage';

const {height} = Dimensions.get('window');

const Splash = ({navigation}) => {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const logoRef = useRef(null);
  const [secondImageVisible, setSecondImageVisible] = useState(false);

  useEffect(() => {
    if (firstTextRef.current && secondTextRef.current && logoRef.current) {
      firstTextRef.current.animate(
        {
          0: {translateY: -height},
          1: {translateY: 0},
        },
        3000,
      );

      secondTextRef.current.animate(
        {
          0: {translateY: height},
          1: {translateY: 0},
        },
        3000,
      );

      logoRef.current.animate(
        {
          0: {scale: 0},
          1: {scale: 1},
        },
        3000,
      );
    }

    const timer = setTimeout(() => {
      setSecondImageVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnimationEnd = async () => {
    // Introduce a delay before navigating
    setTimeout(async () => {
      try {
        const token = await getToken();
        if (token) {
          navigation.replace('App', {screen: 'Home'});
        } else {
          navigation.replace('Auth', {screen: 'GetStarted'});
        }
      } catch (error) {
        console.error('Error fetching token:', error);
        navigation.replace('Auth', {screen: 'GetStarted'}); // Fallback if token retrieval fails
      }
    }, 500); // Adjust this delay as needed (500ms is just an example)
  };

  return (
    <View style={styles.logoContainer}>
      {secondImageVisible ? (
        <Animatable.View
          animation="zoomIn"
          duration={2000} // Reduced animation time to make it quicker
          onAnimationEnd={handleAnimationEnd}>
          <Image
            source={require('../../assets/images/banner.jpg')}
            style={{
              width: horizontalScale(325),
              height: verticalScale(200),
              borderRadius: 10,
            }}
          />
        </Animatable.View>
      ) : (
        <>
          <Animatable.Text
            ref={firstTextRef}
            style={styles.msg}
            useNativeDriver>
            رادیو جهانی دلنواز{'\n'}رادیو ایرانیان جنوب کالیفرنیا{'\n'}
            <Text style={{fontSize: ms(18)}}>
              آینده از آن ملتی است که گذشته را به خوبی بشناسد
            </Text>
          </Animatable.Text>

          <Animatable.View
            ref={logoRef}
            style={styles.logoContainer}
            useNativeDriver>
            <AppIcon />
          </Animatable.View>

          <Animatable.Text
            ref={secondTextRef}
            style={styles.secondMsg}
            useNativeDriver>
            Delnavaz global podcast{'\n'}
            <Text style={{fontSize: ms(13), marginVertical: 10}}>
              Iranian Radio from Southern California
            </Text>
            {'\n'}
            <Text style={{fontSize: ms(13)}}>
              The future belongs to a nation that knows its past well
            </Text>
          </Animatable.Text>
        </>
      )}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  logoContainer: {
    paddingHorizontal: horizontalScale(10),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2E3BC',
  },
  logo: {
    width: 200,
    height: 200,
  },
  msg: {
    textAlign: 'center',
    color: 'black',
    fontSize: ms(18),
    opacity: 0.8,
    fontFamily: 'Gilroy-HeavyItalic',
    marginTop: verticalScale(130),
  },
  secondMsg: {
    textAlign: 'center',
    opacity: 0.8,
    color: 'black',
    fontSize: ms(13),
    fontFamily: 'Gilroy-SemiBoldItalic',
    marginBottom: verticalScale(130),
    lineHeight: 20,
  },
});
