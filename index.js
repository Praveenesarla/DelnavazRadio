import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import TrackPlayer from 'react-native-track-player';
import messaging from '@react-native-firebase/messaging';
import {NotificationProvider} from './src/utils/NotificationContext';
import {LanguageProvider} from './src/utils/LanguageContext'; // Import LanguageProvider

// Handle background messages
messaging().setBackgroundMessageHandler(async remoteMessage => {
  console.log('Message handled in the background!', remoteMessage);
});

// Wrap App with both NotificationProvider and LanguageProvider
const Root = () => (
  <NotificationProvider>
    <App />
  </NotificationProvider>
);

// Register the root component
AppRegistry.registerComponent(appName, () => Root);

// Track player service
TrackPlayer.registerPlaybackService(() => require('./service'));
