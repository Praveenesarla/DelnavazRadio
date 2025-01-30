import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState} from 'react';
import AppInput from '../../components/AppInput';
import AppButton from '../../components/Button';
import {
  moderateScale,
  ms,
  s,
  verticalScale,
  vs,
} from 'react-native-size-matters';
import LeftArrow from '../../assets/icons/LeftArrow';
import {getProfile, login} from '../../api/auth';
import LottieView from 'lottie-react-native';
import {horizontalScale} from '../../utils/scaling.ts';
import {Button, Dialog, Portal} from 'react-native-paper';
import {setItem} from '../../api/localstorage';
import {Pressable} from 'react-native-gesture-handler';
import i18n from '../../../i18n.js';
import {useTranslation} from 'react-i18next';
import LanguageContext from '../../utils/LanguageContext.js';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState('inputs');
  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);

  const submitClick = async () => {
    if (!email || !password) {
      setSuccess('inputs');
      setVisible(true);
    } else {
      try {
        setShowLoader(true);
        const res = await login(email, password);
        if (res?.status === 200) {
          setItem('user', res.data.data);
          setItem('authenticate', res.data.data.token);
          setSuccess('200'); // Login Success
          setVisible(true);
        } else if (res?.status === 401) {
          setSuccess('401'); // Invalid Credentials
          setVisible(true);
        } else if (res?.status === 404) {
          setSuccess('404'); // User Not Found
          setVisible(true);
        } else {
          setSuccess('unknown'); // Fallback case
          setVisible(true);
        }
      } finally {
        setShowLoader(false);
      }
    }
  };

  const successClick = () => {
    profile();
  };

  const profile = async () => {
    const response = await getProfile();
    if (response?.data.data.name) {
      navigation.replace('App');
    } else {
      navigation.replace('Add Profile');
    }
  };

  const hideDialog = () => setVisible(false);

  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'fa' : 'en';
    console.log(`Switching language to: ${newLanguage}`);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <LeftArrow />
        </Pressable>
        <Text style={styles.headerText}>{t('loginHeader')}</Text>
      </View>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{gap: 5}}
          dismissable={false}>
          {success !== '200' && (
            <Dialog.Icon
              icon={
                success === '401' || success === '404'
                  ? 'alert-circle'
                  : success === 'inputs'
                  ? 'alert'
                  : 'check-circle'
              }
              size={40}
            />
          )}
          <Dialog.Content style={{alignItems: 'center'}}>
            {success === '401' ? (
              <Text style={{color: 'red', fontSize: 18}}>
                {t('Invalidcredentials')}
              </Text>
            ) : success === '404' ? (
              <Text style={{color: 'red', fontSize: 18}}>
                {t('UserNotFound')}
              </Text>
            ) : success === 'inputs' ? (
              <Text style={{color: 'red', fontSize: 18}}>
                {t('Pleasefill')}
              </Text>
            ) : success === '200' ? (
              <>
                <LottieView
                  source={require('../../assets/icons/accountVerified.json')}
                  autoPlay
                  loop
                  style={{width: 80, height: 80}}
                />
                <Text style={{color: '#5cb85c', fontSize: 20}}>
                  {t('loginSuccess')}
                </Text>
              </>
            ) : (
              <Text style={{color: 'orange', fontSize: 18}}>
                {t('TryAgain')}
              </Text>
            )}
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={success === '200' ? successClick : hideDialog}>
              {t('Ok')}
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <AppInput
        label={t('email')}
        onChangeText={setEmail}
        value={email}
        placeholder={t('enterEmail')}
      />
      <AppInput
        secureTextEntry
        label={t('password')}
        onChangeText={setPassword}
        value={password}
        placeholder={t('enterPass')}
      />
      <View style={{marginTop: vs(24), marginBottom: vs(10)}}>
        {showLoader ? (
          <TouchableOpacity
            disabled
            style={[
              styles.button,
              {borderWidth: 1, backgroundColor: '#F2E3BC'},
            ]}>
            <LottieView
              source={require('../../assets/icons/loader2.json')}
              autoPlay
              loop
              style={{width: 200, height: 200}}
            />
          </TouchableOpacity>
        ) : (
          <AppButton
            onPress={submitClick}
            text={t('next')}
            backgroundColor="#463730"
          />
        )}
      </View>

      <View style={{alignItems: 'center', flex: 1, marginVertical: vs(15)}}>
        <Text
          onPress={() => navigation.navigate('Signup')}
          style={styles.alreadyText}>
          {t('dontAccount')}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => setLanguage(language === 'en' ? 'fa' : 'en')}>
        <Text style={{color: '#345eeb', fontSize: 18}}>
          {i18n.language === 'en' ? 'Farsi-Version' : 'English-Version'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: s(15),
    marginVertical: 10,
  },
  alreadyText: {
    marginTop: 'auto',
    fontFamily: 'Inter-Regular',
    fontSize: ms(15),
    color: '#101010',
  },
  header: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    marginVertical: vs(30),
  },
  headerText: {
    fontFamily: 'Inter-Medium',
    fontSize: ms(20),
    color: '#251605',
  },
  button: {
    height: verticalScale(50),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    width: horizontalScale(320),
  },
  bottomView: {
    alignItems: 'center',
    flex: 1,
    marginVertical: vs(20),
  },
  languageToggle: {
    marginTop: 15,
  },
  languageToggleText: {
    fontSize: ms(15),
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
});
