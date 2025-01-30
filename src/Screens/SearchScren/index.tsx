import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AppIcon from '../../assets/images/logo/AppIcon';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchInput from '../../components/SearchInput';
import {ms, s, vs} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';
import {searchPodcast} from '../../api/auth';
import TopPodcastCard from '../../components/TopPodcastCard';
import TrackPlayer from 'react-native-track-player';
import {FlashList} from '@shopify/flash-list';

const SearchScreen = ({navigation}) => {
  const {t} = useTranslation();
  const [keyword, setKeyWord] = useState('');
  const [searchPodcastList, setSearchPodcastList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const podcastList = async () => {
    if (!keyword.trim()) return; // Prevent empty search

    setIsLoading(true); // Set loading to true when starting to fetch

    try {
      const response = await searchPodcast(keyword);
      if (response?.data.status === 200) {
        const tracks = response.data.data;
        const transTracks = tracks.map(track => ({
          url: track.recordingfile.url,
          title: track.name,
          artist: track.category,
          artwork: track.bannerimage.url,
        }));

        setSearchPodcastList(transTracks);
      } else {
        console.error('Failed to fetch podcasts:', response?.data.message);
      }
    } catch (error) {
      console.error('Error fetching podcasts:', error);
    } finally {
      setIsLoading(false); // Set loading to false after data is fetched
    }
  };

  const handlePlayTrack = async selectedTrack => {
    const trackIndex = searchPodcastList.findIndex(
      track => track.url === selectedTrack.url,
    );

    if (trackIndex === -1) {
      console.error('Track not found in search list');
      return;
    }

    const beforeTracks = searchPodcastList.slice(0, trackIndex);
    const afterTracks = searchPodcastList.slice(trackIndex + 1);

    try {
      await TrackPlayer.reset();

      await TrackPlayer.add(selectedTrack);
      await TrackPlayer.add(afterTracks);
      await TrackPlayer.add(beforeTracks);

      await TrackPlayer.play();
    } catch (error) {
      console.error('Error in handling playback:', error);
    }
  };

  return (
    <View style={{flex: 1, alignItems: 'center', paddingBottom: vs(25)}}>
      {/* Header */}
      <View style={{gap: 15, paddingTop: vs(25)}}>
        <View style={styles.header}>
          <Icon
            name="arrow-back"
            size={40}
            color={'black'}
            onPress={() => navigation.goBack()}
          />
          <AppIcon width={s(48)} height={vs(48)} />
        </View>
        <Text style={styles.headerTitle}>{t('whatToday')}</Text>
        <SearchInput
          value={keyword}
          keyboardType="web-search"
          onChangeText={setKeyWord}
          onSubmitEditing={podcastList} // Trigger search on submit
          placeholder={t('searchPodcast')}
        />
      </View>
      <View style={{flex: 1, marginTop: 6}}>
        <FlatList
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: 10,
            paddingHorizontal: s(15), // Padding around the grid
            paddingBottom: vs(5), // Bottom padding
          }}
          columnWrapperStyle={{
            justifyContent: 'space-between', // Distribute items with space between them
            marginBottom: vs(5),
            gap: 15,
          }}
          data={searchPodcastList}
          renderItem={({item}) => (
            <TopPodcastCard
              item={item}
              handlePlay={selectedTrack => {
                handlePlayTrack(selectedTrack);
              }}
              style={{
                flex: 1, // Ensures equal size
                marginRight: s(10), // Adjust spacing between cards in a row
                marginLeft: s(5), // Optional: Adds small spacing on the left
              }}
            />
          )}
          keyExtractor={(item, index) => index.toString()} // Ensure unique keys
          ListHeaderComponent={
            !isLoading &&
            searchPodcastList.length > 0 &&
            keyword.trim() !== '' ? (
              <Text style={styles.resultsHeader}>
                {t('searchResults')} "{keyword}"
              </Text>
            ) : null
          }
        />
      </View>
    </View>
  );
};

export default SearchScreen;

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
    textAlign: 'left',
  },
  resultsHeader: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(20),
    color: '#251605',
    marginBottom: vs(10),
    textAlign: 'left',
    width: '100%',
  },
});
