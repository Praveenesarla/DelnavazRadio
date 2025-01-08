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

const Streaming = () => {
  const [userDetails, setUserDetails] = useState<object | null>(null);
  const [client, setClient] = useState<StreamVideoClient | null>(null);
  const [activeScreen, setActiveScreen] = useState('home');
  const [rooms, setRooms] = useState([]);
  const [callId, setCallId] = useState('');
  const apiKey = '9mzjbgzehkgq';
  const photo = null;

  // Polling to update rooms periodically
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
      }
    };

    const interval = setInterval(fetchRooms, 5000); // Fetch rooms every 5 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [activeScreen, callId]);

  const tokenProvider = async () => {
    if (!userDetails) {
      console.error('User details are undefined.');
      return null;
    }

    try {
      const response = await fetch(
        'https://podcast-app-blush.vercel.app/generateUserToken',
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
      setCallId(roomId);
      setActiveScreen('call-screen');
      console.error('Join Room Error:', error);
      Alert.alert(
        'Error',
        'Room does not exist or you lack permissions to join.',
      );
    }
  };

  // Fetch user details
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

  // Initialize Stream client
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
            tokenProvider: () => Promise.resolve(token), // Ensure token is returned as a promise
          });
          setClient(streamClient);
        } else {
          console.error('Failed to initialize client: token is undefined.');
        }
      };
      initializeClient();
    }
  }, [userDetails]);

  if (!client) {
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
