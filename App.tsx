import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainNavigation from './src/navigation/MainNavigation';
import messaging from '@react-native-firebase/messaging';
import notifee, {
  AndroidImportance,
  AndroidStyle,
  AuthorizationStatus,
  EventType,
} from '@notifee/react-native';
import {useNotifications} from './src/utils/NotificationContext';
import {useSetupPlayer} from './src/hooks/useSetupPlayer';
import {NativeBaseProvider} from 'native-base';
import {LanguageProvider} from './src/utils/LanguageContext';

const App = () => {
  const {notifications} = useNotifications();

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
        title: 'Live has Started',
        body: 'Join the Live Now!',
        android: {
          channelId: 'default',
          largeIcon: require('./src/assets/icons/largeicon.png'),
          importance: AndroidImportance.HIGH,
          smallIcon: 'ic_small',
          pressAction: {id: 'default'},
          // style: imageUrl
          //   ? {type: AndroidStyle.BIGPICTURE, picture: imageUrl}
          //   : undefined,
        },
      });
    });

    // Background handler (using Firebase)
    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Notification background received', remoteMessage);
      const imageUrl = remoteMessage.notification?.android?.imageUrl;

      await notifee.displayNotification({
        title: 'Live has Started',
        body: 'Join the Live Now!',
        android: {
          largeIcon: require('./src/assets/icons/largeicon.png'),
          channelId: 'default',
          importance: AndroidImportance.HIGH,
          smallIcon: 'ic_small',
          pressAction: {id: 'default'},
          // style: imageUrl
          //   ? {type: AndroidStyle.BIGPICTURE, picture: imageUrl}
          //   : undefined,
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
  useSetupPlayer();

  return (
    <LanguageProvider>
      <NativeBaseProvider>
        <PaperProvider>
          <GestureHandlerRootView style={{flex: 1}}>
            <MainNavigation />
          </GestureHandlerRootView>
        </PaperProvider>
      </NativeBaseProvider>
    </LanguageProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
