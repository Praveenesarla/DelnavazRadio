/* eslint-disable prettier/prettier */
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import CardHeader from '../../components/CardHeader';
import TopPodcastCard from '../../components/TopPodcastCard';
import ScholarCard from '../../components/ScholarCard';
import AppIcon from '../../assets/images/logo/AppIcon';
import Icon from 'react-native-vector-icons/Octicons';
import {getItem, setItem} from '../../api/localstorage';
import {useNotifications} from '../../utils/NotificationContext';
import TrackPlayer, {useActiveTrack} from 'react-native-track-player';
import {getAllPodcast, getCategory} from '../../api/auth';
import FloatingPlayer from '../../components/FloatingPlayer';

const CategoriesScreen = () => {
  const activeTrack = useActiveTrack();
  const [notifications, setNotifications] = useState(true);
  const [podcasts, setPodcasts] = useState(null);
  const [History, setHistory] = useState(null);
  const [Comedy, setComedy] = useState(null);
  const [Literature, setLiterature] = useState(null);
  const [Biography, setBiography] = useState(null);
  const [Mysticism, setMysticism] = useState(null);
  const [Interviews, setInterviews] = useState(null);
  const [Children, setChildren] = useState(null);
  const [English, setEnglish] = useState(null);

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

  useEffect(() => {
    allSongs();
    getHistory();
    getBiography();
    getChildren();
    getComedy();
    getInterview();
    getLiterature();
    getEnglish();
    getMysticism();
  }, []);

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

  const getHistory = async () => {
    try {
      const response = await getCategory('/History');
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
        setHistory(transTracks);
      } else {
        console.error('Failed to fetch podcasts:', response?.data.message);
      }
    } catch (error) {
      console.error('Error fetching podcasts:', error);
    }
  };

  const getComedy = async () => {
    try {
      const response = await getCategory('/Comedy');
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
        setComedy(transTracks);
      } else {
        console.error('Failed to fetch podcasts:', response?.data.message);
      }
    } catch (error) {
      console.error('Error fetching podcasts:', error);
    }
  };

  const getLiterature = async () => {
    try {
      const response = await getCategory('/literature');
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
        setLiterature(transTracks);
      } else {
        console.error('Failed to fetch podcasts:', response?.data.message);
      }
    } catch (error) {
      console.error('Error fetching podcasts:', error);
    }
  };
  const getBiography = async () => {
    try {
      const response = await getCategory('/Biography');
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
        setBiography(transTracks);
      } else {
        console.error('Failed to fetch podcasts:', response?.data.message);
      }
    } catch (error) {
      console.error('Error fetching podcasts:', error);
    }
  };

  const getMysticism = async () => {
    try {
      const response = await getCategory('/Mysticism');
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
        setMysticism(transTracks);
      } else {
        console.error('Failed to fetch podcasts:', response?.data.message);
      }
    } catch (error) {
      console.error('Error fetching podcasts:', error);
    }
  };

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

  const handlePlayTrack = async (
    selectedTrack: AddTrack[],
    category: string,
    songs: null,
  ) => {
    if (category === 'top') {
      songs = podcasts;
    } else if (category === 'History') {
      songs = History;
    } else if (category === 'Comedy') {
      songs = Comedy;
    } else if (category === 'literature') {
      songs = Literature;
    } else if (category === 'Biography') {
      songs = Biography;
    } else if (category === 'Mysticism') {
      songs = Mysticism;
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
      <ScrollView>
        <View style={styles.header}>
          <AppIcon width={s(48)} height={vs(48)} />
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
        <CardHeader header={'History Podcasts'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingBottom: vs(10),
            paddingLeft: s(15),
          }}
          data={History}
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
        <CardHeader header={'Comedy Podcasts'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingBottom: vs(10),
            paddingLeft: s(15),
          }}
          data={Comedy}
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
        <CardHeader header={'Biograpghy Podcasts'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingBottom: vs(10),
            paddingLeft: s(15),
          }}
          data={Biography}
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
        <CardHeader header={'Mysticism Podcasts'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingBottom: vs(10),
            paddingLeft: s(15),
          }}
          data={Mysticism}
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
        <CardHeader header={'Interview with scholars'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingBottom: vs(10),
            paddingLeft: s(15),
          }}
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
        <CardHeader header={'Children’s products'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingBottom: vs(10),
            paddingLeft: s(15),
          }}
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
            gap: 15,
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
        <CardHeader header={'Literature'} />
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: 15,
            paddingBottom: vs(10),
            paddingLeft: s(15),
          }}
          data={Literature}
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
      </ScrollView>
      {activeTrack && <FloatingPlayer />}
    </>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
});
