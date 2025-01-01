/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, Button, TextInput, Alert, StyleSheet} from 'react-native';
import {useStreamVideoClient} from '@stream-io/video-react-native-sdk';

type Props = {goToCallScreen: (roomId: string) => void};

export const CreateRoomScreen = ({goToCallScreen}: Props) => {
  const [roomId, setRoomId] = useState('');
  const client = useStreamVideoClient();

  const createRoom = async () => {
    if (!roomId.trim()) {
      Alert.alert('Error', 'Please enter a valid Room ID');
      return;
    }

    const call = client?.call('audio_room', roomId);
    await call?.create({
      data: {
        custom: {
          title: 'New Room',
          description: 'Room created via CreateRoomScreen',
        },
      },
    });

    Alert.alert('Success', 'Room created successfully.');
    goToCallScreen(roomId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Room ID to Create</Text>
      <TextInput
        style={styles.input}
        placeholder="Room ID"
        value={roomId}
        onChangeText={setRoomId}
      />
      <Button title="Create Room" onPress={createRoom} />
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
