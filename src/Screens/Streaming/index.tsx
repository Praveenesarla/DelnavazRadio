import React from 'react';
import {
  StreamVideo,
  StreamVideoClient,
} from '@stream-io/video-react-native-sdk';
import {useEffect, useState} from 'react';
import {getProfile, getRoom} from '../../api/auth';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CallScreen} from '../CallScreen';
import LiveRoomCard from '../../components/LiveRoomCard';
import enVariables from '../../utils/enVariables';

const Streaming = () => {
  const [userDetails, setUserDetails] = useState<object | null>(null);
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [activeScreen, setActiveScreen] = useState('home');
  const [rooms, setRooms] = useState([]);
  const [roomsLoading, setRoomsLoading] = useState(true); // New loading state
  const [callId, setCallId] = useState('');
  const photo = null;

  console.log('url', process.env.API_URL);
  console.log('apikey', enVariables.API_KEY);

  const apiKey = '7fgb6ywjyxhk';

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await getRoom();
        const roomData = res?.data?.data || [];
        setRooms(roomData);

        // If on "call-screen" and the room ID no longer exists, navigate home
        if (
          activeScreen === 'call-screen' &&
          !roomData.some(room => room.code === callId)
        ) {
          Alert.alert('Room Ended', 'The active call room no longer exists.');
          setActiveScreen('home');
        }
      } catch (error) {
        console.error('Error fetching rooms:', error);
      } finally {
        setRoomsLoading(false); // Update loading state
      }
    };

    const interval = setInterval(fetchRooms, 5000); // Fetch rooms every 5 seconds
    fetchRooms(); // Fetch initial rooms data
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [activeScreen, callId]);

  const tokenProvider = async () => {
    if (!userDetails) {
      console.error('User details are undefined.');
      return null;
    }

    try {
      const response = await fetch(
        'https://getstream-token.vercel.app/generateUserToken',
        {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            userId: userDetails._id,
            name: userDetails.name,
            image: photo,
            email: userDetails.email,
          }),
        },
      );
      const data = await response.json();
      if (!data.token) {
        throw new Error('Token is undefined in the response.');
      }
      return data.token;
    } catch (error) {
      console.error('Error generating token:', error);
      return null;
    }
  };

  const joinRoom = async roomId => {
    if (!client) {
      Alert.alert('Error', 'Client is not initialized.');
      return;
    }

    const roomExists = rooms.some(room => room.code === roomId);
    if (!roomExists) {
      Alert.alert('Invalid Room', 'The room does not exist.');
      return;
    }

    try {
      const call = client.call('audio_room', roomId);
      await call.join({
        create: false,
      });
      setCallId(roomId);
      setActiveScreen('call-screen');
    } catch (error) {
      console.error('Join Room Error:', error);
      Alert.alert(
        'Error',
        'Room does not exist or you lack permissions to join.',
      );
    }
  };

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await getProfile();
        setUserDetails(response.data.data);
      } catch (error) {
        console.error('Error fetching profile details:', error);
      }
    };
    getDetails();
  }, []);

  useEffect(() => {
    if (userDetails) {
      const initializeClient = async () => {
        const token = await tokenProvider();
        if (token) {
          const streamClient = StreamVideoClient.getOrCreateInstance({
            apiKey,
            user: {
              id: userDetails._id,
              name: userDetails.name,
              image: photo,
            },
            tokenProvider: () => Promise.resolve(token),
          });
          setClient(streamClient);
        } else {
          console.error('Failed to initialize client: token is undefined.');
        }
        console.log('token', token);
      };
      initializeClient();
    }
  }, [userDetails]);

  if (!client || roomsLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} />
      </View>
    );
  }

  return (
    <StreamVideo client={client}>
      {activeScreen === 'call-screen' ? (
        <CallScreen
          goToHomeScreen={() => setActiveScreen('home')}
          callId={callId}
        />
      ) : (
        <FlatList
          data={rooms}
          ListEmptyComponent={
            <View
              style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
              <Text style={{color: 'red', fontSize: 25}}>
                No Live Rooms Available!!
              </Text>
            </View>
          }
          renderItem={({item}) => (
            <LiveRoomCard onJoin={() => joinRoom(item.code)} />
          )}
          keyExtractor={item => item.code}
        />
      )}
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
