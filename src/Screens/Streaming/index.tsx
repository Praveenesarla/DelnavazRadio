/* eslint-disable prettier/prettier */
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getProfile} from '../../api/auth';
import {
  StreamVideo,
  StreamVideoClient,
} from '@stream-io/video-react-native-sdk';
import {WelcomeScreen} from '../WelcomeScreen';
import {JoinRoomScreen} from '../JoinRoomScreen';
import {CreateRoomScreen} from '../CreateRoomScreen';
import {CallScreen} from '../CallScreen';

const Streaming = () => {
  const [userDetails, setUserDetails] = useState<object | null>(null);
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [activeScreen, setActiveScreen] = useState('home');
  const [callId, setCallId] = useState('');
  const apiKey = '9mzjbgzehkgq';
  const photo = null;

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const response = await getProfile();
      console.log('ress', response.data.data);
      setUserDetails(response.data.data);
    } catch (error) {
      console.error('Error fetching profile details:', error);
    }
  };

  const goToJoinRoom = () => setActiveScreen('join-room');
  const goToCreateRoom = () => setActiveScreen('create-room');
  const goToCallScreen = id => {
    setCallId(id);
    setActiveScreen('call-screen');
  };
  const goToHomeScreen = () => setActiveScreen('home');

  const tokenProvider = async () => {
    if (!userDetails) return null; // Ensure userDetails is available

    try {
      const response = await fetch(
        'https://podcast-app-blush.vercel.app/generateUserToken',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            userId: userDetails._id, // Use userDetails.full_name as userId
            name: userDetails.name, // Use userDetails.full_name
            image: photo,
            email: userDetails.email, // Use userDetails.email
          }),
        },
      );
      const data = await response.json();
      console.log('token', data.token);
      return data.token;
    } catch (error) {
      console.error('Error generating token:', error);
      return null;
    }
  };

  // Initialize client only after user details are available
  useEffect(() => {
    if (userDetails) {
      const initializeClient = async () => {
        const token = await tokenProvider();
        if (token) {
          const streamClient = StreamVideoClient.getOrCreateInstance({
            apiKey,
            user: {
              id: userDetails._id, // Assuming full_name is the user ID
              name: userDetails.name,
              image: photo,
            },
            tokenProvider: async () => token,
          });
          setClient(streamClient);
        }
      };
      initializeClient();
    }
  }, [userDetails]);

  if (!client) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <StreamVideo client={client}>
      <SafeAreaView style={styles.container}>
        {activeScreen === 'home' && (
          <WelcomeScreen
            navigateToJoinRoom={goToJoinRoom}
            navigateToCreateRoom={goToCreateRoom}
          />
        )}
        {activeScreen === 'join-room' && (
          <JoinRoomScreen goToCallScreen={goToCallScreen} />
        )}
        {activeScreen === 'create-room' && (
          <CreateRoomScreen goToCallScreen={goToCallScreen} />
        )}
        {activeScreen === 'call-screen' && (
          <CallScreen goToHomeScreen={goToHomeScreen} callId={callId} />
        )}
      </SafeAreaView>
    </StreamVideo>
  );
};

export default Streaming;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
