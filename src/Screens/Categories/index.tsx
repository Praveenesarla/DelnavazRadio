import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import CardHeader from '../../components/CardHeader';
import TopPodcastCard from '../../components/TopPodcastCard';
import ScholarCard from '../../components/ScholarCard';
import AppIcon from '../../assets/images/logo/AppIcon';
import Icon from 'react-native-vector-icons/Octicons';
import {useNotifications} from '../../utils/NotificationContext';
import TrackPlayer, {useActiveTrack} from 'react-native-track-player';
import {getAllPodcast, getCategory} from '../../api/auth';
import FloatingPlayer from '../../components/FloatingPlayer';
import {Skeleton} from 'native-base';
import LanguageContext from '../../utils/LanguageContext';
import {useTranslation} from 'react-i18next';

const CategoriesScreen = () => {
  const activeTrack = useActiveTrack();
  const [podcasts, setPodcasts] = useState(null);
  const [History, setHistory] = useState(null);
  const [Comedy, setComedy] = useState(null);
  const [Literature, setLiterature] = useState(null);
  const [Biography, setBiography] = useState(null);
  const [Mysticism, setMysticism] = useState(null);
  const [Interviews, setInterviews] = useState(null);
  const [Children, setChildren] = useState(null);
  const [English, setEnglish] = useState(null);
  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);
  const {notifications, toggleNotifications} = useNotifications();

  useEffect(() => {
    allSongs();
    getCategoryData('/History', setHistory);
    getCategoryData('/Comedy', setComedy);
    getCategoryData('/literature', setLiterature);
    getCategoryData('/Biography', setBiography);
    getCategoryData('/Mysticism', setMysticism);
    getCategoryData('/Interview', setInterviews);
    getCategoryData('/Children', setChildren);
    getCategoryData('/English', setEnglish);
  }, []);

  const allSongs = async () => {
    try {
      const response = await getAllPodcast();
      if (response?.data.status === 200) {
        const tracks = response.data.data.map(transformTrack);
        setPodcasts(tracks);
      } else {
        console.error('Failed to fetch podcasts:', response?.data.message);
      }
    } catch (error) {
      console.error('Error fetching podcasts:', error);
    }
  };

  const getCategoryData = async (endpoint, setState) => {
    try {
      const response = await getCategory(endpoint);
      if (response?.data.status === 200) {
        const tracks = response.data.data.map(transformTrack);
        setState(tracks);
      } else {
        console.error(
          `Failed to fetch ${endpoint} podcasts:`,
          response?.data.message,
        );
      }
    } catch (error) {
      console.error(`Error fetching ${endpoint} podcasts:`, error);
    }
  };

  const transformTrack = track => ({
    url: track.recordingfile.url,
    title: track.name,
    artist: track.category,
    artwork: track.bannerimage.url,
  });

  const handlePlayTrack = async (selectedTrack, category) => {
    const songs =
      {
        top: podcasts,
        History,
        Comedy,
        literature: Literature,
        Biography,
        Mysticism,
        Interview: Interviews,
        Children,
        English,
      }[category] || podcasts;

    const trackIndex = songs?.findIndex(
      track => track?.url === selectedTrack.url,
    );

    if (trackIndex === -1) {
      return;
    }

    const beforeTracks = songs.slice(0, trackIndex);
    const afterTracks = songs.slice(trackIndex + 1);

    await TrackPlayer.reset();
    await TrackPlayer.add(selectedTrack);
    await TrackPlayer.add(afterTracks);
    await TrackPlayer.add(beforeTracks);
    await TrackPlayer.play();
  };

  return (
    <>
      {!podcasts ||
      !History ||
      !Comedy ||
      !Children ||
      !Literature ||
      !English ? (
        <View style={{paddingHorizontal: 15}}>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Skeleton size="60" rounded="full" startColor={'coolGray.300'} />
            <Skeleton size="60" rounded="full" startColor={'coolGray.300'} />
          </View>
          <View style={{marginVertical: 20}}>
            <Skeleton.Text w="56" startColor={'coolGray.300'} lines={1} />
          </View>
          <View
            style={{
              marginTop: 13,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Skeleton w="40" h="48" rounded="xl" startColor={'coolGray.300'} />
            <Skeleton w="40" h="48" rounded="xl" startColor={'coolGray.300'} />
          </View>
          <View style={{marginVertical: 30}}>
            <Skeleton.Text w="56" startColor={'coolGray.300'} lines={1} />
          </View>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginVertical: 10,
            }}>
            <Skeleton w="56" h="40" rounded="xl" />
            <Skeleton w="56" h="40" rounded="xl" />
          </View>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Skeleton w="56" h="40" rounded="xl" />
            <Skeleton w="56" h="40" rounded="xl" />
          </View>
        </View>
      ) : (
        <>
          <ScrollView>
            <View style={styles.header}>
              <AppIcon width={s(48)} height={vs(48)} />
              <TouchableOpacity
                onPress={toggleNotifications}
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
            <CardHeader header={t('topPodcast')} />
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
                  handlePlay={selectedTrack =>
                    handlePlayTrack(selectedTrack, 'top')
                  }
                />
              )}
              horizontal
            />
            <CardHeader header={t('hisPodcast')} />
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
                  handlePlay={selectedTrack =>
                    handlePlayTrack(selectedTrack, item.artist)
                  }
                />
              )}
              horizontal
            />
            <CardHeader header={t('comedyPod')} />
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
                  handlePlay={selectedTrack =>
                    handlePlayTrack(selectedTrack, item.artist)
                  }
                />
              )}
              horizontal
            />
            <CardHeader header={t('biographyPod')} />
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
                  handlePlay={selectedTrack =>
                    handlePlayTrack(selectedTrack, item.artist)
                  }
                />
              )}
              horizontal
            />
            <CardHeader header={t('mystiPod')} />
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
                  handlePlay={selectedTrack =>
                    handlePlayTrack(selectedTrack, item.artist)
                  }
                />
              )}
              horizontal
            />
            <CardHeader header={t('interviewScholars')} />
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
                  handlePlay={selectedTrack =>
                    handlePlayTrack(selectedTrack, item.artist)
                  }
                />
              )}
              horizontal
            />
          </ScrollView>
          {activeTrack && <FloatingPlayer />}
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: ms(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: ms(20),
  },
});

export default CategoriesScreen;
