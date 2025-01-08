/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, TextInput, Alert, StyleSheet} from 'react-native';
import {useStreamVideoClient} from '@stream-io/video-react-native-sdk';

type Props = {goToCallScreen: (roomId: string) => void};

export const JoinRoomScreen = ({goToCallScreen}: Props) => {
  const [roomId, setRoomId] = useState('');
  const client = useStreamVideoClient();

  const joinRoom = async () => {
    if (!roomId.trim()) {
      Alert.alert('Error', 'Please enter a valid Room ID');
      return;
    }

    try {
      const call = client.call('audio_room', roomId);
      await call.join({
        create: false, // Ensures it won't attempt to create the room
      });
      goToCallScreen(roomId);
    } catch (error) {
      console.error('Join Room Error:', error);
      const errorMessage =
        error.code === 17
          ? 'Room does not exist or you lack permissions to join.'
          : 'An error occurred. Please try again.';
      Alert.alert('Error', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Room ID to Join</Text>
      <TextInput
        style={styles.input}
        placeholder="Room ID"
        value={roomId}
        onChangeText={setRoomId}
      />
      <Button title="Join Room" onPress={joinRoom} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    gap: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
