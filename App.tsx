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
import LanguageContext, {LanguageProvider} from './src/utils/LanguageContext';

const App = () => {
  const {notifications} = useNotifications();

  useEffect(() => {
    let unsubscribeOnMessage = null;
    let unsubscribeBackgroundEvent = null;

    const setupNotifications = async () => {
      console.log('Setting up notifications...');

      // Request permissions
      const settings = await notifee.requestPermission();
      if (settings.authorizationStatus < AuthorizationStatus.AUTHORIZED) {
        console.log('User declined notification permissions');
        return;
      }

      // Subscribe to topic
      await messaging().subscribeToTopic('all_users');
      console.log('Subscribed to topic: all_users');

      // Create Android notification channel
      await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
        importance: AndroidImportance.HIGH,
        sound: 'default',
      });

      // Foreground message listener
      unsubscribeOnMessage = messaging().onMessage(async remoteMessage => {
        if (notifications) {
          console.log('Foreground notification received:', remoteMessage);

          await notifee.displayNotification({
            title: 'Live has been Started!!',
            body: 'Join the Live Now',
            android: {
              channelId: 'default',
              importance: AndroidImportance.HIGH,
              smallIcon: 'ic_launcher',
              pressAction: {id: 'default'},
              largeIcon: require('./src/assets/icons/largeicon.png'),
            },
          });
        }
      });

      // Notifee background events
      unsubscribeBackgroundEvent = notifee.onBackgroundEvent(
        async ({type, detail}) => {
          if (type === EventType.PRESS) {
            console.log(
              'Notification pressed in background:',
              detail.notification,
            );
          }
        },
      );
    };

    if (notifications) {
      setupNotifications();
    } else {
      console.log('Notifications are disabled. Cleaning up...');
      if (unsubscribeOnMessage) unsubscribeOnMessage();
      if (unsubscribeBackgroundEvent) unsubscribeBackgroundEvent();

      // Unsubscribe from topics
      messaging()
        .unsubscribeFromTopic('all_users')
        .then(() => console.log('Unsubscribed from topic: all_users'))
        .catch(error =>
          console.error('Failed to unsubscribe from topic:', error),
        );
    }

    return () => {
      if (unsubscribeOnMessage) unsubscribeOnMessage();
      if (unsubscribeBackgroundEvent) unsubscribeBackgroundEvent();
      console.log('Notification handlers cleaned up');
    };
  }, [notifications]);

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

// Global background message handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
  const {notifications} = useNotifications(); // Access `notifications` value dynamically
  if (notifications) {
    console.log('Global background message received:', remoteMessage);

    await notifee.displayNotification({
      title: 'Live has been Started!!',
      body: 'Join the Live Now',
      android: {
        channelId: 'default',
        importance: AndroidImportance.HIGH,
        smallIcon: 'ic_launcher',
        // style: remoteMessage.notification?.android?.imageUrl
        //   ? {
        //       type: AndroidStyle.BIGPICTURE,
        //       picture: remoteMessage.notification?.android?.imageUrl,
        //     }
        //   : undefined,
        largeIcon: require('./src/assets/icons/largeicon.png'),
        pressAction: {id: 'default'},
      },
    });
  } else {
    console.log('Notifications are disabled, skipping background handling.');
  }
});

export default App;

const styles = StyleSheet.create({});
