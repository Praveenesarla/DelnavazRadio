import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSetupPlayer} from './src/hooks/useSetupPlayer';
import {PaperProvider} from 'react-native-paper';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainNavigation from './src/navigation/MainNavigation';
import Streaming from './src/Screens/Streaming';

const App = () => {
  useSetupPlayer();
  return (
    <PaperProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <MainNavigation />
      </GestureHandlerRootView>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
