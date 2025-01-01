/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../Screens/Splash';
import AboutUs from '../Screens/AboutUs';
import AccountPrivacy from '../Screens/AccountPrivacy';
import EditProfile from '../Screens/EditProfile';
import Founders from '../Screens/Founders';
import NonProfit from '../Screens/NonProfit';
import PressAndEvents from '../Screens/PressAndEvents';
import PrivacyPolicy from '../Screens/PrivacyPolicy';
import ProgramsAndHosts from '../Screens/ProgramsAndHosts';
import HelpAndSupport from '../Screens/HelpAndSupport';
import ProgramContent from '../Screens/ProgramContent';
import PlayerScreen from '../Screens/PlayerScreen';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={AuthNavigator}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="App"
          component={AppNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="About Us" component={AboutUs} />
        <Stack.Screen
          name="AccountPrivacy"
          component={AccountPrivacy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Founders" component={Founders} />
        <Stack.Screen name="HelpAndSupport" component={HelpAndSupport} />
        <Stack.Screen name="NonProfit" component={NonProfit} />
        <Stack.Screen name="PressAndEvents" component={PressAndEvents} />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ProgramAndHost" component={ProgramsAndHosts} />
        <Stack.Screen
          name="ProgramContent"
          component={ProgramContent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="player"
          component={PlayerScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
