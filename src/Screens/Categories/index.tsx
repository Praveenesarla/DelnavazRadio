import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import CardHeader from '../../components/CardHeader';
import TopPodcastCard from '../../components/TopPodcastCard';
import ScholarCard from '../../components/ScholarCard';

const CategoriesScreen = () => {
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

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.cateTitle}>Categories</Text>
        <Image
          source={require('../../assets/icons/bell.png')}
          style={{width: s(35), height: vs(35)}}
        />
      </View>
      <CardHeader header={'Top podcast of the week'} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 15,
          paddingBottom: vs(10),
          paddingLeft: s(15),
        }}
        data={DATA}
        renderItem={({item}) => <TopPodcastCard />}
        horizontal
      />
      <CardHeader header={'Children’s Products'} />
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          gap: 15,
          paddingBottom: vs(10),
          paddingLeft: s(15),
        }}
        data={DATA}
        renderItem={({item}) => (
          <ScholarCard image={require('../../assets/card/children.png')} />
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
        data={DATA}
        renderItem={({item}) => (
          <ScholarCard image={require('../../assets/card/english.png')} />
        )}
        horizontal
      />
    </ScrollView>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cateTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(20),
    color: '#251605',
  },
});
