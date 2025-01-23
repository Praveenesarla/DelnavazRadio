/* eslint-disable prettier/prettier */
import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
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
import {login, signUp} from '../../api/auth';
import {Button, Dialog, Modal, Portal} from 'react-native-paper';
import LottieView from 'lottie-react-native';
import {horizontalScale} from '../../utils/scaling.ts';
import {useTranslation} from 'react-i18next';
import LanguageContext from '../../utils/LanguageContext.js';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [success, setSuccess] = useState('inputs');
  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);

  const hideDialog = () => setVisible(false);

  const onSubmit = async () => {
    setShowLoader(true);
    try {
      if (!email || password.length < 8) {
        setSuccess('inputs');
        setVisible(true);
      } else {
        const res = await signUp(email, password);
        console.log('res', res);
        if (res === 201) {
          setSuccess('200');
          setVisible(true);
        } else if (res === 400) {
          setSuccess('400');
          setVisible(true);
        } else {
          setSuccess('400');
          setVisible(true);
        }
      }
    } finally {
      setShowLoader(false);
    }
  };

  const successClick = () => {
    hideDialog();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <LeftArrow />
        </Pressable>
        <Text style={styles.headerText}>{t('signupHeader')}</Text>
      </View>
      <Portal>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{gap: 5}}
          dismissable={false}>
          <Dialog.Icon
            icon={
              success === '400'
                ? 'exclamation-thick'
                : success === 'inputs' && 'alert'
            }
            size={40}
          />
          {/* <Dialog.Title style={styles.title}>Please fill all the fields</Dialog.Title> */}
          <Dialog.Content style={{alignItems: 'center'}}>
            {success === '400' ? (
              <>
                <Text>{t('AccountAlreadyExists')}</Text>
                <Text>{t('PleaseLogIn')}</Text>
              </>
            ) : success === 'inputs' ? (
              <>
                <Text style={{color: 'red', fontSize: 15}}>
                  {t('Pleasefill')}
                </Text>
                <Text style={{color: 'red', fontSize: 15}}>&</Text>
                <Text style={{color: 'red', fontSize: 15}}>
                  {t('Password8characters')}
                </Text>
              </>
            ) : (
              success === '200' && (
                <>
                  <LottieView
                    source={require('../../assets/icons/accountVerified.json')}
                    autoPlay
                    loop
                    style={{width: 80, height: 80}}
                  />
                  <Text style={{color: '#5cb85c', fontSize: 20}}>
                    {t('AccountcreatedSuccesfully')}
                  </Text>
                </>
              )
            )}
          </Dialog.Content>
          <Dialog.Actions>
            <Button
              onPress={
                success === '200' || success === '400'
                  ? successClick
                  : hideDialog
              }>
              Ok
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
            onPress={onSubmit}
            text={t('next')}
            backgroundColor="#463730"
          />
        )}
      </View>

      <View style={{alignItems: 'center', flex: 1, marginVertical: vs(15)}}>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={styles.alreadyText}>
          {t('alreadyAccount')}
        </Text>
      </View>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  mainView: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: s(15),
  },
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginVertical: vs(10),
  },
  line: {
    borderColor: '#D9D9D9',
    borderWidth: 0.8,
    width: 150,
    height: vs(1),
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
    height: verticalScale(48),
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
    width: horizontalScale(345),
  },
});
