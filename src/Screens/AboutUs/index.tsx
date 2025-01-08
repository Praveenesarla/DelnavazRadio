import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import ContactCard from '../../components/ContactCard';

const AboutUs = ({navigation}) => {
  return (
    <ScrollView
      style={{flex: 1}}
      contentContainerStyle={{alignItems: 'center'}}>
      {/* First Section */}
      <View style={styles.firstContainer}>
        <Image
          source={require('../../assets/aboutus/one.png')}
          style={styles.imageContainer}
        />
        <Text style={styles.titleText}>Esteemed Global Podcast</Text>
        <View>
          <Text style={styles.paraText}>
            A Cultural Beacon for the Persian Community in Irvine, California
            and Beyond Irvine, California, is known for its rich tapestry of
            cultural diversity, a city where various cultures and communities
            thrive together.
          </Text>
          <Text style={styles.paraText}>
            Adding to this multicultural landscape, Delnavaz Radio has emerged
            as a new voice for the Persian community. Launched in Irvine, this
            radio station aims to connect, entertain, and inform Persian
            listeners through a variety of programs that celebrate Persian
            culture and music. It stives to educate Iranians about Persian
            history, culture, art, psychology, society, literature, and
            mysticism.
          </Text>
          <Text style={styles.paraText}>
            Iranian Radio (Irvine),” a platform dedicated to exploring the rich
            history and culture of Iran and its profound impact on global
            civilization. Delnavaz Radio, an independent media outlet free from
            religious or political affiliations, will soon launch its weekly
            podcast series, covering cultural news, local events in Irvine,
            literary works, scientific wonders, historical insights, and
            educational content on mental, spiritual health, music history,
            immigration, and meditation.
          </Text>
          <Text style={styles.paraText}>
            The programs will cover topics such as history, mental health and
            well-being, wonders of the world, as well as literary and cultural
            programs, regional music and traditions, immigration issues, and
            humor and entertainment. Samples of these programs are currently
            available on the Radio Delnavaz website.
          </Text>
          <Text style={styles.paraText}>
            Initially, these programs will be broadcast for four hours on
            Saturdays and another four hours on Sundays, from 9 AM to 1 PM, with
            several replays scheduled. From Monday to Friday, six hours of
            programming will be aired each day, along with repeats of various
            classical and jazz music selections tailored to diverse tastes.
          </Text>
          <Text style={styles.paraText}>
            Additionally, listeners can select and listen to specific programs
            of interest by clicking on the program of their choice. With a team
            boasting four decades of media experience, Delnavaz Radio aims to
            enrich immigrant communities through engaging programming and humor,
            nurturing the young generation’s connection to their heritage.
          </Text>
        </View>
      </View>

      {/* Second Section */}
      <View style={styles.secondContainer}>
        <Image
          source={require('../../assets/aboutus/two.png')}
          style={styles.imageContainer}
        />
        <Text style={styles.titleText}>Radio Directors – Babak Safvat</Text>
        <View>
          <Text style={styles.paraText}>
            Babak Safvat, son of Amir Hossein, began his career after completing
            his studies in the arts by writing several plays and directing at
            Tehran City Theater. He later traveled to India to become acquainted
            with its mysticism. Upon his return, he served as the CEO of several
            film production companies, producing and directing hundreds of
            documentary and narrative programs for television, particularly
            focusing on mysticism.
          </Text>
          <Text style={styles.paraText}>
            Among his accomplishments are reviving the Sound and Light project
            at Persepolis, serving as the editor of Saraye Mehr magazine,
            authoring and publishing two volumes on Iran, and teaching Masnavi
            Ma’navi in various states in the U.S. He has also delivered numerous
            lectures at the University of St. Thomas and cultural centers in
            Houston and Dallas. Babak has organized conferences for
            Bazm-e-Arefan in Los Angeles in collaboration with Ketab Corp,
            written and produced CDs for Bazm-e-Khoda in cooperation with
            Fereydoun Farahandouz, launched Ashena Media, produced dozens of CDs
            and DVDs on Iranian culture, and established the spiritual radio
            station Mehr and the global center Molana. He is currently the
            director of the non-profit radio station Delnavaz.
          </Text>
          {/* <Text style={styles.paraText}>
            Interviews with intellectuals from Iran’s children’s products
            department “Aunt Bear’s Tree of Knowledge” podcast segment.
          </Text> */}
        </View>
      </View>

      {/* Third Section */}
      <LinearGradient
        colors={['#BCE2B7', '#2E4E2E']}
        style={{
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: s(15),
          paddingVertical: vs(30),
        }}>
        <Image
          source={require('../../assets/aboutus/three.png')}
          style={{width: '100%', height: 430, resizeMode: 'cover'}}
        />
        <Text style={[styles.titleText, {color: '#ffffff'}]}>
          Radio Directors – Arash Haghighat
        </Text>
        <View>
          <Text style={[styles.paraText, {color: '#ffffff'}]}>
            Arash Haghighat was born in the historical and cultural district of
            Sangelaj in Tehran and was raised in a refined and cultured family.
            Through his father’s passion for the poet Omar Khayyam and his
            uncle, Abdolrafi Haghighat, Arash became familiar with the vast
            treasures of literature, art, and mysticism.
          </Text>
          <Text style={[styles.paraText, {color: '#ffffff'}]}>
            After completing high school, Arash entered university and
            successfully graduated in chemical engineering, specializing in
            petrochemical industries. Due to his political activism for freedom
            and the difficult circumstances of the time, like many others, he
            was forced into exile and is now residing in the United States.
            Since his arrival, he has continued his education and has obtained
            three professional licenses in construction from the state of
            California.
          </Text>
          <Text style={[styles.paraText, {color: '#ffffff'}]}>
            From childhood, Arash has had a deep passion for playing the santur,
            and under the recommendation of his esteemed uncle, he studied with
            Master Zandi. Additionally, he has pursued swimming professionally.
            With a strong background in public relations, and marketing, and
            extensive expertise in technical and artistic matters, Arash plays a
            pivotal role in the establishment of Delnavaz Radio
          </Text>
        </View>
      </LinearGradient>
      <ContactCard />
    </ScrollView>
  );
};

export default AboutUs;

const styles = StyleSheet.create({
  firstContainer: {
    paddingHorizontal: s(14),
    alignItems: 'center',
    paddingVertical: vs(14),
  },
  secondContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: s(14),
    paddingVertical: vs(20),
  },
  imageContainer: {
    width: s(320),
    height: vs(200),
    marginVertical: vs(20),
    borderRadius: 10,
    resizeMode: 'cover',
  },
  titleText: {
    fontFamily: 'Inter-SemiBold',
    alignSelf: 'flex-start',
    fontSize: ms(20),
    color: '#251605',
  },
  paraText: {
    paddingVertical: vs(5),
    fontSize: ms(16),
    textAlign: 'left',
  },
});
