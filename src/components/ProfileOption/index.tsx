/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import ProfileArrow from '../../assets/icons/ProfileArrow';
import {ms, s, vs} from 'react-native-size-matters';
import {removeItem} from '../../api/localstorage';
import {useTranslation} from 'react-i18next';
import LanguageContext from '../../utils/LanguageContext';

interface ProfileOptionProps {
  item: {
    title: string;
    screenName?: string; // Make screenName optional
  };
}

const ProfileOption: React.FC<ProfileOptionProps> = ({item, navigation}) => {
  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);
  const onPressNavigation = () => {
    if (item.title === 'Logout') {
      removeItem('authenticate');
      navigation.replace('Auth');
      return;
    }

    if (item.screenName) {
      navigation.navigate(item.screenName);
    }
  };

  return (
    <TouchableOpacity style={styles.mainContainer} onPress={onPressNavigation}>
      <Text style={styles.profileText}>{t(item.title)}</Text>
      <ProfileArrow />
    </TouchableOpacity>
  );
};

export default ProfileOption;

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: s(0.2),
    height: vs(50),
    alignItems: 'center',
  },
  profileText: {
    color: '#251605',
    fontFamily: 'Inter-Regular',
    fontSize: ms(16),
  },
});
