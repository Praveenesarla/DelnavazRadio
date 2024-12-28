import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';

// Define the types for the props
interface ContactDetailsCardProps {
  type: string;
  title: string;
  image: any;
}

const ContactDetailsCard: React.FC<ContactDetailsCardProps> = ({
  type,
  title,
  image,
}) => {
  return (
    <View style={styles.contactContainer}>
      <Image source={image} style={styles.iconImage} />
      <View>
        <Text style={styles.contactText}>{title}</Text>
        <Text style={[styles.contactText, {color: '#FFB800'}]}>{type}</Text>
      </View>
    </View>
  );
};

export default ContactDetailsCard;

const styles = StyleSheet.create({
  contactContainer: {flexDirection: 'row', gap: 7},
  iconImage: {height: vs(43), width: s(46), resizeMode: 'contain'},
  contactText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(15),
    color: '#FFFFFF',
  },
});
