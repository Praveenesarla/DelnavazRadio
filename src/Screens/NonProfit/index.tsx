import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import ContactCard from '../../components/ContactCard';

const NonProfit = () => {
  return (
    <ScrollView style={{paddingVertical: vs(10)}}>
      <View
        style={{
          paddingVertical: vs(10),
          paddingBottom: vs(20),
          paddingHorizontal: s(15),
        }}>
        <Text style={styles.title}>Delnavaz Radio</Text>
        <Text style={styles.paragraph}>
          A Cultural Beacon for the Persian Community in Irvine, California and
          Beyond
        </Text>
        <Text style={styles.paragraph}>
          Irvine, California, is known for its rich tapestry of cultural
          diversity, a city where various cultures and communities thrive
          together. Adding to this multicultural landscape, Delnavaz Radio has
          emerged as a new voice for the Persian community. Launched in Irvine,
          this radio station aims to connect, entertain, and inform Persian
          listeners through a variety of programs that celebrate Persian
          culture, music, and news.
        </Text>
        <Text style={styles.paragraph}>
          It stives to educate Iranians about Persian history, culture, art,
          psychology, society, literature, and mysticism.
        </Text>
        <Image
          source={require('../../assets/Nonprofit/one.png')}
          style={styles.imageContainer}
        />
        <Text style={styles.title}>A New Voice on the Airwaves</Text>
        <Text style={styles.paragraph}>
          Delnavaz Radio began broadcasting with the vision of becoming a
          cultural bridge for the Persian community in Irvine and beyond,
          accessible globally. Recognizing the unique position of Persians in
          the diaspora, the station offers a slice of home, providing comfort,
          entertainment, and valuable information. From traditional Persian
          music to contemporary hits, talk shows on cultural issues, and news
          segments covering both local and international events, Delnavaz Radio
          caters to a wide range of tastes and interests.
        </Text>
        <Text style={styles.title}>Programming with Purpose</Text>
        <Text style={styles.paragraph}>
          A standout features of Delnavaz Radio is its diverse programming
          schedule, designed to appeal to all age groups within the Persian
          community. Morning shows focus on uplifting music and motivational
          talks to start the day positively, while afternoon segments are
          dedicated to cultural discussions, interviews with local and
          international Persian artists, authors, and community leaders. Evening
          programming is more entertainment-focused, with a mix of music, live
          call-in shows, and literature readings.
        </Text>
        <Text style={styles.title}>Community Engagement and Support</Text>
        <Text style={styles.paragraph}>
          Beyond entertainment and cultural programming, Delnavaz Radio plays a
          pivotal role in community engagement. The station actively supports
          local Persian businesses, charities, and cultural events, providing
          them with a platform to reach out to the community. Additionally, it
          offers educational segments on various topics, including legal advice,
          health and wellness, and integration challenges faced by immigrants,
          thereby acting as a support system for Persians navigating life in
          California.
        </Text>
        <Text style={styles.title}>Bridging Cultures</Text>
        <Text style={styles.paragraph}>
          Delnavaz Radio’s impact transcends entertainment, as it also serves as
          a vital link between the Persian community and the broader society in
          Irvine and surrounding areas. By showcasing the richness of Persian
          culture, the station fosters greater understanding and appreciation
          among the diverse California’s population. Through collaborative
          events and multicultural programs, Delnavaz Radio contributes to the
          cultural mosaic, promoting inclusivity and mutual respect.
        </Text>
        <Text style={styles.title}>Tune In and Connect</Text>
        <Text style={styles.paragraph}>
          For those eager to experience the vibrancy of Persian culture or stay
          connected with the Persian community, Delnavaz Radio offers an easy
          and accessible platform. Available both on traditional radio
          frequencies and online streaming, the station ensures that listeners,
          regardless of thier location can tune in to their favorite shows and
          feel a sense of belonging.
        </Text>
        <Text style={styles.paragraph}>
          In a world where maintaining cultural identity is more important than
          ever, Delnavaz Radio stands out as a beacon for the Persian community
          in Irvine, California. Through its dedicated programming and community
          engagement efforts, the station not only entertains but also educates
          and connects, making it a cherished asset for Persians and culture
          enthusiasts alike.
        </Text>
      </View>
      <ContactCard />
    </ScrollView>
  );
};

export default NonProfit;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: ms(21),
    color: '#251605',
    paddingVertical: vs(5),
  },
  paragraph: {
    color: '#424242',
    fontFamily: 'Inter-regular',
    fontSize: ms(16),
    paddingVertical: vs(5),
  },
  imageContainer: {
    width: s(320),
    height: vs(200),
    marginVertical: vs(17),
    borderRadius: 10,
    resizeMode: 'cover',
  },
});
