/* eslint-disable prettier/prettier */
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import AppButton from '../../components/Button';
import ContactDetailsCard from '../../components/ContactDetailsCard';
import ContactCard from '../../components/ContactCard';

const HelpAndSupport = () => {
  return (
    <ScrollView>
      <View style={styles.firstContainer}>
        <Text style={styles.topContent}>
          For any participation and program proposal or desire to introduce
          yourself on the radio; , making an advertisement and placing your ad,
          you can send a message here so that you will be contacted as soon as
          possible
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Name"
          placeholderTextColor={'#A1A3A2'}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor={'#A1A3A2'}
        />
        <TextInput
          style={styles.textInput}
          placeholder="PhoneNumber"
          placeholderTextColor={'#A1A3A2'}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Subject"
          placeholderTextColor={'#A1A3A2'}
        />
        <TextInput
          placeholderTextColor={'#A1A3A2'}
          style={[styles.textInput, styles.textArea]}
          placeholder="Message"
          multiline
        />
        <View style={styles.buttonContainer}>
          <AppButton onPress={() => {}} text="Send a Message" />
        </View>
      </View>
      <View style={styles.secondContainer}>
        <Image
          source={require('../../assets/HelpAndSupport/one.png')}
          style={styles.firstImage}
        />
        <Text style={styles.imageTilte}>
          A corner of Khayyam Nishaburi's biography
        </Text>
      </View>
      <View style={styles.thirdContainer}>
        <ContactDetailsCard
          image={require('../../assets/HelpAndSupport/mail.png')}
          title={'Email us'}
          type={'radiodelnavaz@yahoo.com'}
        />
        <ContactDetailsCard
          image={require('../../assets/HelpAndSupport/location.png')}
          title={'Address'}
          type={'11540 Rockfield Blvd, Irvine, CA 92618'}
        />
        <ContactDetailsCard
          image={require('../../assets/HelpAndSupport/phone.png')}
          title={'Call Us'}
          type={'1-(310)-848-8290 ,1-(949)-424-4718'}
        />
      </View>
      <ContactCard />
    </ScrollView>
  );
};

export default HelpAndSupport;

const styles = StyleSheet.create({
  firstContainer: {paddingHorizontal: s(15), paddingBottom: vs(20)},
  textInput: {
    backgroundColor: '#E6E8E7',
    borderRadius: ms(6),
    marginVertical: vs(5),
    paddingHorizontal: s(8),
  },
  topContent: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(16),
    color: '#251605',
    paddingVertical: vs(15),
  },
  textArea: {minHeight: vs(100), textAlignVertical: 'top'},
  buttonContainer: {alignItems: 'center'},
  secondContainer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: vs(25),
    paddingHorizontal: s(15),
  },
  firstImage: {width: '100%', height: vs(380), resizeMode: 'cover'},
  imageTilte: {
    color: '#251605',
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(20),
    textAlign: 'center',
    paddingVertical: vs(10),
  },
  thirdContainer: {
    backgroundColor: '#06070E',
    flex: 1,
    paddingHorizontal: s(15),
    paddingVertical: vs(20),
    gap: 15,
  },
});
