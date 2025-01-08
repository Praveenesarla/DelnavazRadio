/* eslint-disable prettier/prettier */
import {
  Alert,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AppInput from '../../components/AppInput';
import EventCard from '../../components/EventCard';
import ScholarCard from '../../components/ScholarCard';
import TopPodcastCard from '../../components/TopPodcastCard';
import RecentPodcastCard from '../../components/RecentPodcastCard';
import SearchInput from '../../components/SearchInput';
import AppIcon from '../../assets/images/logo/AppIcon';
import {ms, s, vs} from 'react-native-size-matters';
import ProgramCard from '../../components/ProgramCard';
import CardHeader from '../../components/CardHeader';
import FloatingPlayer from '../../components/FloatingPlayer';
import {recomendedSongs} from '../../data/songs';
import {isTabletMode} from 'react-native-device-info';
import TrackPlayer, {AddTrack, useActiveTrack} from 'react-native-track-player';
import {getAllPodcast, getCategory} from '../../api/auth';
import Icon from 'react-native-vector-icons/Octicons';
import {getItem, getToken, setItem} from '../../api/localstorage';
import {useNotifications} from '../../utils/NotificationContext';

const HomeScreen = ({navigation}) => {
  const [podcasts, setPodcasts] = useState<object[] | null>(null);
  const [Interviews, setInterviews] = useState(null);
  const [Children, setChildren] = useState(null);
  const [English, setEnglish] = useState(null);
  const [notifications, setNotifications] = useState(true);
  const activeTrack = useActiveTrack();
  const DATA: ItemData[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  const displayAlert = () => {
    Alert.alert('Floating Action Button Pressed!');
  };

  useEffect(() => {
    allSongs();
    getInterview();
    getChildren();
    getEnglish();
  }, []);

  const getInterview = async () => {
    try {
      const response = await getCategory('/Interview');
      if (response?.data.status === 200) {
        const tracks = response.data.data;
        const transTracks = tracks.map(
          (track: {
            recordingfile: {url: any};
            name: any;
            category: any;
            bannerimage: {url: any};
          }) => ({
            url: track.recordingfile.url,
            title: track.name,
            artist: track.category,
            artwork: track.bannerimage.url,
          }),
        );
        console.log('History', transTracks);
        setInterviews(transTracks);
      } else {
        console.error('Failed to fetch podcasts:', response?.data.message);
      }
    } catch (error) {
      console.error('Error fetching podcasts:', error);
    }
  };

  const getChildren = async () => {
    try {
      const response = await getCategory('/Children');
      if (response?.data.status === 200) {
        const tracks = response.data.data;
        const transTracks = tracks.map(
          (track: {
            recordingfile: {url: any};
            name: any;
            category: any;
            bannerimage: {url: any};
          }) => ({
            url: track.recordingfile.url,
            title: track.name,
            artist: track.category,
            artwork: track.bannerimage.url,
          }),
        );
        console.log('History', transTracks);
        setChildren(transTracks);
      } else {
        console.error('Failed to fetch podcasts:', response?.data.message);
      }
    } catch (error) {
      console.error('Error fetching podcasts:', error);
    }
  };

  const getEnglish = async () => {
    try {
      const response = await getCategory('/English');
      if (response?.data.status === 200) {
        const tracks = response.data.data;
        const transTracks = tracks.map(
          (track: {
            recordingfile: {url: any};
            name: any;
            category: any;
            bannerimage: {url: any};
          }) => ({
            url: track.recordingfile.url,
            title: track.name,
            artist: track.category,
            artwork: track.bannerimage.url,
          }),
        );
        console.log('History', transTracks);
        setEnglish(transTracks);
      } else {
        console.error('Failed to fetch podcasts:', response?.data.message);
      }
    } catch (error) {
      console.error('Error fetching podcasts:', error);
    }
  };

  const allSongs = async () => {
    try {
      const response = await getAllPodcast();
      if (response?.data.status === 200) {
        const tracks = response.data.data;
        const transTracks = tracks.map(
          (track: {
            recordingfile: {url: any};
            name: any;
            category: any;
            bannerimage: {url: any};
          }) => ({
            url: track.recordingfile.url,
            title: track.name,
            artist: track.category,
            artwork: track.bannerimage.url,
          }),
        );

        setPodcasts(transTracks);
      } else {
        console.error('Failed to fetch podcasts:', response?.data.message);
      }
    } catch (error) {
      console.error('Error fetching podcasts:', error);
    }
  };

  const handlePlayTrack = async (
    selectedTrack: AddTrack[],
    category: string,
    songs: null,
  ) => {
    if (category === 'top') {
      songs = podcasts;
    } else if (category === 'Interview') {
      songs = Interviews;
    } else if (category === 'Children') {
      songs = Children;
    } else if (category === 'English') {
      songs = English;
    } else {
      songs = podcasts;
    }

    console.log(selectedTrack);

    const trackIndex = songs?.findIndex(
      track => track?.url === selectedTrack.url,
    );

    if (trackIndex === -1) {
      return;
    }

    const beforeTracks = songs?.slice(0, trackIndex);
    const afterTracks = songs?.slice(trackIndex + 1);

    await TrackPlayer.reset();

    await TrackPlayer.add(selectedTrack);

    await TrackPlayer.add(afterTracks);

    await TrackPlayer.add(beforeTracks);

    await TrackPlayer.play();
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={{alignItems: 'center', paddingBottom: vs(25)}}
        style={{flex: 1}}>
        {/* Header  */}
        <View style={{gap: 15, paddingTop: vs(25)}}>
          <View style={styles.header}>
            <AppIcon width={s(48)} height={vs(48)} />
            {/* <Image
              source={require('../../assets/icons/bell.png')}
              style={{width: s(42), height: vs(40)}}
            /> */}
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 25,
              }}>
              <Icon
                name={notifications ? 'bell' : 'bell-slash'}
                size={25}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.headerTitle}>
            What kind of podcast do you want to hear today?
          </Text>
          <SearchInput onChangeText={() => {}} placeholder="Search Podcast" />
        </View>
        {/* podcast Card */}
        <View style={{paddingTop: vs(20)}}>
          <RecentPodcastCard />
        </View>
        {/* podcast Card */}
        {/* carousel card list */}
        <CardHeader header={'Top podcast of the week'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingBottom: vs(10),
            paddingLeft: s(15),
          }}
          data={podcasts}
          renderItem={({item}) => (
            <TopPodcastCard
              item={item}
              handlePlay={(selectedTrack: any, category: string) => {
                handlePlayTrack(selectedTrack, (category = 'top'));
              }}
            />
          )}
          horizontal
        />
        {/* carousel card list */}

        <CardHeader header={'Interview with scholars'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: s(15), gap: 25}}
          data={Interviews}
          renderItem={({item}) => (
            <ScholarCard
              item={item}
              handlePlay={(selectedTrack: any, category: string) => {
                handlePlayTrack(selectedTrack, (category = item.artist));
              }}
            />
          )}
          horizontal
        />

        <CardHeader header={'Events Happening'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 25, paddingLeft: s(15)}}
          data={DATA}
          renderItem={({item}) => <EventCard />}
          horizontal
        />
        <CardHeader header={'Children’s Products'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: s(15), gap: 20}}
          data={Children}
          renderItem={({item}) => (
            <ScholarCard
              item={item}
              handlePlay={(selectedTrack: any, category: string) => {
                handlePlayTrack(selectedTrack, (category = item.artist));
              }}
            />
          )}
          horizontal
        />
        <CardHeader header={'English Production'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 14,
            paddingBottom: vs(10),
            paddingLeft: s(15),
          }}
          data={English}
          renderItem={({item}) => (
            <ScholarCard
              item={item}
              handlePlay={(selectedTrack: any, category: string) => {
                handlePlayTrack(selectedTrack, (category = item.artist));
              }}
            />
          )}
          horizontal
        />
        <CardHeader header={'Top Programs Curated for you'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{gap: 30, paddingLeft: s(15)}}
          data={DATA}
          renderItem={({item}) => <ProgramCard />}
          horizontal
        />
      </ScrollView>
      {activeTrack && <FloatingPlayer />}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(24),
    color: '#251605',
  },
});
