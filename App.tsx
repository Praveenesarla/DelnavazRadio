/* eslint-disable prettier/prettier */
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import MainNavigation from './src/navigation/MainNavigation';
import {useSetupPlayer} from './src/hooks/useSetupPlayer';
import {PaperProvider} from 'react-native-paper';
import notifee, {
  AndroidImportance,
  AndroidStyle,
  AuthorizationStatus,
  EventType,
} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const App = () => {
  let token = '';
  const onLoad = () => {
    console.log('track player setup...');
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '383878382444-g0ua4lmml9cvv1f27dn6cl7g5oultrmb.apps.googleusercontent.com',
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      // Get the users ID token
      const {data} = await GoogleSignin.signIn();

      console.log(data);
      // Alert.alert('Success login');
      // navigation.navigate('HomeScreen', {userDetails: data?.user});
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(
        data?.idToken,
      );

      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function requestUserPermission() {
      const settings = await notifee.requestPermission();

      if (settings.authorizationStatus >= AuthorizationStatus.AUTHORIZED) {
        console.log('Permission settings:', settings);
      } else {
        console.log('User declined permissions');
      }
    }

    requestUserPermission();

    const subscribeToTopic = async () => {
      try {
        await messaging().subscribeToTopic('all_users');
        console.log('Subscribed to the topic : all_users');
      } catch (error) {
        console.log('Subscribed to topic failed', error);
      }
    };
    subscribeToTopic();

    // Create a notification channel for Android
    const createNotificationChannel = async () => {
      await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        importance: AndroidImportance.HIGH,
        sound: 'default',
      });
    };

    createNotificationChannel();

    // Foreground handler
    const unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
      console.log('Notification foreground received', remoteMessage);
      const imageUrl = remoteMessage.notification?.android?.imageUrl;

      await notifee.displayNotification({
        title: remoteMessage.notification?.title || 'New Notification',
        body: remoteMessage.notification?.body || 'Check out this update',
        android: {
          color: 'black',
          channelId: 'default',
          largeIcon: require('./src/assets/icons/largeicon.png'),
          importance: AndroidImportance.HIGH,
          smallIcon: 'ic_launcher',
          pressAction: {id: 'default'},
          style: imageUrl
            ? {type: AndroidStyle.BIGPICTURE, picture: imageUrl}
            : undefined,
        },
      });
    });

    // Background handler (using Firebase)
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Notification background received', remoteMessage);
      const imageUrl = remoteMessage.notification?.android?.imageUrl;

      await notifee.displayNotification({
        title: remoteMessage.notification?.title || 'New Notification',
        body: remoteMessage.notification?.body || 'Check out this update',
        android: {
          color: 'black',
          largeIcon: require('./src/assets/icons/largeicon.png'),
          channelId: 'default',
          importance: AndroidImportance.HIGH,
          smallIcon: 'ic_launcher',
          pressAction: {id: 'default'},
          style: imageUrl
            ? {type: AndroidStyle.BIGPICTURE, picture: imageUrl}
            : undefined,
        },
      });
    });

    // Handle notification when app is opened from a background state
    const unsubscribeOnNotificationOpenedApp =
      messaging().onNotificationOpenedApp(remoteMessage => {
        console.log('Notification opened from background state', remoteMessage);
      });

    // Handle notification when the app is terminated
    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log(
            'Notification opened from terminated state',
            remoteMessage,
          );
        }
      });

    // Clean up the subscriptions
    return () => {
      unsubscribeOnMessage();
      unsubscribeOnNotificationOpenedApp();
    };
  }, []);

  useSetupPlayer({onLoad});
  return (
    <PaperProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <Text style={{fontSize: 50}} onPress={onGoogleButtonPress}>
          Google
        </Text>
      </GestureHandlerRootView>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
