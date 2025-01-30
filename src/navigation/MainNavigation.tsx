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
import {useTranslation} from 'react-i18next';
import SearchScreen from '../Screens/SearchScren';

const Stack = createStackNavigator();

const MainNavigation = () => {
  const {t} = useTranslation();
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
        <Stack.Screen
          name="About Us"
          component={AboutUs}
          options={{title: 'About Us'}}
        />
        <Stack.Screen
          name="AccountPrivacy"
          component={AccountPrivacy}
          options={{title: t('AccountPrivacy'), headerShown: true}}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Founders"
          component={Founders}
          options={{title: t('Founders')}}
        />
        <Stack.Screen
          name="HelpAndSupport"
          component={HelpAndSupport}
          options={{title: t('HelpSupport')}}
        />
        <Stack.Screen
          name="NonProfit"
          component={NonProfit}
          options={{title: t('NonProfit')}}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PressAndEvents"
          component={PressAndEvents}
          options={{title: t('PressEvents')}}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{title: t('PrivacyPolicy'), headerShown: true}}
        />
        <Stack.Screen
          name="ProgramAndHost"
          component={ProgramsAndHosts}
          options={{title: t('ProgramsHosts')}}
        />
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
