/* eslint-disable prettier/prettier */
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
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
import {login, newPodcast} from '../../api/auth';
import LottieView from 'lottie-react-native';
import {horizontalScale} from '../../utils/scaling.ts';
import {Button, Dialog, Portal} from 'react-native-paper';
import {setItem} from '../../api/localstorage';
import {Pressable} from 'react-native-gesture-handler';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const [success, setSuccess] = useState('inputs');

  const submitClick = async () => {
    if (!email || !password) {
      setSuccess('inputs');
      setVisible(true);
    } else {
      try {
        setShowLoader(true);
        const res = await login(email, password);
        if (res?.status === 200) {
          setItem('authenticate', res.data.data.token);
          setSuccess('200');
          setVisible(true);
        } else if (res?.status === 401) {
          setSuccess('400');
          setVisible(true);
        }
      } finally {
        setShowLoader(false);
      }
    }
  };

  const successClick = () => {
    hideDialog();
    navigation.replace('Add Profile');
  };

  const hideDialog = () => setVisible(false);
  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <LeftArrow />
        </Pressable>
        <Text style={styles.headerText}>Welcome back, Login</Text>
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
                <Text style={{color: 'red', fontSize: 18}}>
                  Invalid credentials
                </Text>
                <Text style={{color: 'red', fontSize: 18}}>Try Again!</Text>
              </>
            ) : success === 'inputs' ? (
              <>
                <Text style={{color: 'red', fontSize: 18}}>
                  *Please fill all the fields
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
                    Login Success
                  </Text>
                </>
              )
            )}
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={success === '200' ? successClick : hideDialog}>
              Ok
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <AppInput
        label="Email"
        onChangeText={setEmail}
        value={email}
        placeholder="Enter your email"
      />
      <AppInput
        secureTextEntry={true}
        label="Password"
        onChangeText={setPassword}
        value={password}
        placeholder="Enter your password"
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
            text="Next"
            backgroundColor="#463730"
          />
        )}
      </View>

      <View style={styles.bottomView}>
        <Text
          style={styles.haveAnAccount}
          onPress={() => navigation.navigate('Signup')}>
          Don’t have an account? Signup
        </Text>
      </View>
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
  orContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginVertical: vs(10),
  },
  haveAnAccount: {
    marginTop: 'auto',
    fontFamily: 'Inter-Regular',
    fontSize: ms(15),
    color: '#101010',
  },
  bottomView: {alignItems: 'center', flex: 1, marginVertical: vs(20)},
  line: {
    borderColor: '#D9D9D9',
    borderWidth: 0.8,
    width: 150,
    height: vs(1),
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
