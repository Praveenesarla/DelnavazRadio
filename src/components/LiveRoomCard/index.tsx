// LiveRoomCard.js
import React from 'react';
import {View, Text, Image, Button, StyleSheet} from 'react-native';

const LiveRoomCard = ({onJoin}) => {
  return (
    <View style={styles.card}>
      <Image
        source={require('../../assets/images/banner.jpg')}
        style={styles.image}
      />
      <Text style={styles.title}>Live Podcast</Text>
      <Text style={styles.description}>Delnavaz Podcast..</Text>
      <Button title="Start Listening" onPress={onJoin} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    elevation: 5,
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
});

export default LiveRoomCard;
