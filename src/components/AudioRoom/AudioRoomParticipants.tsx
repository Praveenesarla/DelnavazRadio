import {useCallStateHooks} from '@stream-io/video-react-native-sdk';
import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

export const AudioRoomParticipants = () => {
  const {useParticipants} = useCallStateHooks();
  const participants = useParticipants();
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        data={participants}
        renderItem={({item}) => (
          <View style={styles.avatar}>
            {/* <Image
              style={[
                styles.image,
                item.isSpeaking && styles.activeSpeakerIndicator,
              ]}
              source={{uri: item.image}}
            /> */}
            <Text style={styles.name}>{item.name}</Text>
          </View>
        )}
        keyExtractor={item => item.sessionId}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
  },
  name: {
    marginTop: 4,
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  avatar: {
    flex: 1,
    alignItems: 'center',
    borderWidth: 4,
    borderColor: 'transparent',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  activeSpeakerIndicator: {
    borderWidth: 4,
    borderColor: 'green',
  },
});
