import InCallManager from 'react-native-incall-manager';
import {
  useCall,
  useCallStateHooks,
  OwnCapability,
  useConnectedUser,
} from '@stream-io/video-react-native-sdk';
import React, {useEffect, useState} from 'react';
import {Button} from 'react-native';

export const ToggleMicButton = () => {
  const call = useCall();
  const {useMicrophoneState, useHasPermissions} = useCallStateHooks();
  const {status} = useMicrophoneState();
  const connectedUser = useConnectedUser();
  const hasPermission = useHasPermissions(OwnCapability.SEND_AUDIO);
  const canRequestSpeakingPermissions = call?.permissionsContext.canRequest(
    OwnCapability.SEND_AUDIO,
  );
  // State to track if the user has requested speaking permissions.
  // If they have, we'll disable the toggle microphone button.
  const [isAwaitingAudioApproval, setIsAwaitingAudioApproval] = useState(false);

  useEffect(() => {
    if (!(call && connectedUser)) {
      return;
    }
    const unsubscribe = call.on('call.permissions_updated', event => {
      if (event.type !== 'call.permissions_updated') {
        return;
      }
      if (connectedUser.id !== event.user.id) {
        return;
      }
      setIsAwaitingAudioApproval(false);
      // automatically publish/unpublish audio stream based on the new permissions
      if (event.own_capabilities.includes(OwnCapability.SEND_AUDIO)) {
        call.microphone.enable();
      } else {
        call.microphone.disable();
      }
    });

    return () => unsubscribe();
  }, [call, connectedUser]);

  useEffect(() => {
    InCallManager.start({media: 'audio'});
    InCallManager.setSpeakerphoneOn(true);
    return () => InCallManager.stop();
  }, []);

  const onPress = () => {
    if (!hasPermission) {
      setIsAwaitingAudioApproval(true);
      return call?.requestPermissions({
        permissions: [OwnCapability.SEND_AUDIO],
      });
    }
    call?.microphone.toggle();
  };

  return (
    <Button
      title={`${status === 'enabled' ? 'Mute' : 'Unmute'}`}
      onPress={onPress}
      disabled={
        // !hasPermission ||
        // !canRequestSpeakingPermissions ||
        isAwaitingAudioApproval
      }
    />
  );
};
