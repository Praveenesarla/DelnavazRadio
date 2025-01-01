import React, {useEffect} from 'react';
import {
  Call,
  StreamCall,
  useStreamVideoClient,
} from '@stream-io/video-react-native-sdk';
import {StyleSheet, Text, View} from 'react-native';
import InCallManager from 'react-native-incall-manager';
import {AudioRoomUI} from '../AudioRoomUI';

type Props = {goToHomeScreen: () => void; callId: string};

export const CallScreen = ({goToHomeScreen, callId}: Props) => {
  const [call, setCall] = React.useState<Call | null>(null);
  const client = useStreamVideoClient();
  const _call = client?.call('audio_room', callId);

  useEffect(() => {
    // Enable loudspeaker when the component mounts
    InCallManager.start();
    InCallManager.setSpeakerphoneOn(true);

    console.log('Loudspeaker enabled');

    return () => {
      // Clean up when the call ends
      InCallManager.setSpeakerphoneOn(false);
      InCallManager.stop();
      console.log('InCallManager stopped');
    };
  }, []);

  useEffect(() => {
    _call
      ?.join({
        create: true,
        data: {
          // members: [{user_id: 'john_smith'}, {user_id: 'jane_doe'}],
          custom: {
            title: 'React Native test',
            description: 'We are doing a test of react native audio rooms',
          },
        },
      })
      .then(() => setCall(_call));
  }, [client]);

  if (!call) {
    return <Text>Joining call...</Text>;
  }
  return (
    <StreamCall call={call}>
      <View style={styles.container}>
        <AudioRoomUI goToHomeScreen={goToHomeScreen} />
      </View>
    </StreamCall>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
