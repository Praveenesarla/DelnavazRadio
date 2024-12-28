import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ms, s, vs} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import ContactCard from '../../components/ContactCard';

const Founders = ({navigation}) => {
  const goToFeed = () => {
    navigation.navigate('App', {screen: 'Profile'});
  };
  return (
    <ScrollView>
      <View
        style={{
          width: '100%',
          height: vs(100),
          backgroundColor: '#A9927D',
          paddingHorizontal: s(15),
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Inter-SemiBold',
            color: '#FFFFFF',
            fontSize: ms(20),
          }}>
          Babak Safvat
        </Text>
        <Text
          style={{
            fontFamily: 'Inter-SemiBold',
            color: '#FFFFFF',
            fontSize: ms(20),
          }}>
          Founder & producer
        </Text>
      </View>
      <LinearGradient
        colors={['#FFFFFF', '#F2E3BC80']} // White to Beige with 50% opacity
        start={{x: 1, y: 0}} // Start from the right
        end={{x: 0, y: 0}} // End at the left
        style={{
          width: '100%',
          height: 'auto',
          paddingHorizontal: s(15),
          padding: ms(15),
        }}>
        <Text style={styles.titleText}>Biography, Diary</Text>
        <Text
          style={{
            fontFamily: 'Inter-Regular',
            fontSize: ms(16),
            color: '#424242',
          }}>
          Babak Safvat, the son of Dr. Amir Hossein Safvat, a descendant of
          Mirza Mehdi Khan Estrabadi, the minister of Nader shah Afshar, was
          born in Tehran. After completing his preliminary studies at Tehran
          Academy of Arts, he started his artistic activities in Tehran City
          Theater by performing several plays and then went to India to continue
          his education and after returning to Iran he succeeded in producing
          and directing dozens of short and feature films in became the domain
          of culture and mysticism
        </Text>
        <Image
          source={require('../../assets/founders/one.png')}
          style={styles.imageContainer}
        />
        <Text style={styles.titleText}>Artistic Productions</Text>
        <Text style={styles.paraText}>
          The plays “Khorshid Sharq”, “Chovar”, “Greg Gashthir”, “Hassani and
          Janab Beber” in the field of dramatic works Producing and writing the
          scripts of “Toledi Digar” and ” Bagh Pardis” in the field of fiction
          works. Directing the documentary films “One Day One Life” and “Diyar
          Ashnayan” 120 episodes in the social group Fictional documentary
          works, “Serai Mehr, Dordaneh Yemen “Hakim Tous”, “Ba Aftab Ta Mehtab
          Farhang Vdab Group. Management of “Hananeh Art Cultural Cooperative”
          and “Manzar Film Cinema Company” in the field of cinematographic
          activities
        </Text>
        <Text style={styles.titleText}>
          The light and Sound Project of Persepolis
        </Text>
        <Text style={styles.paraText}>
          The light and sound of Persepolis is a project with the collaboration
          of the veteran writers of Iran, the ancient memory of Paris and the
          valuable company of the dubbing manager Zhaleh Alou, and by calling
          the best speakers of the country, who once again after the revolution,
          directed by Babak Safvat and in The atmosphere of Persepolis
          resonated, a project that was silent for two decades
        </Text>
        <Text style={styles.titleText}>Mystical Studies and Written Works</Text>
        <Text style={styles.paraText}>
          Due to his interest in oriental mysticism during his years of study in
          India and after that he traveled to Afghanistan, Turkmenistan, Iraq
          and other mystical regions of the world to research about Sufism and
          Eastern mysticism and especially Indian mysticism. Researches after
          returning to Iran, the establishment of the Sarai Mehr mystical center
          with the presence of a group of Iranian university professors and also
          the editorship of the monthly “Sarai Mehr” which was published in Iran
          for several years. Also, in the field of authorship of the books
          “Rendan Jareh Noush” and “Niyaish Nameh” are the titles of his written
          works that were published in Iran.
        </Text>
        <Text style={styles.titleText}>About Rumi</Text>
        <Text style={styles.paraText}>
          For one year, Babak Safvat explained the mystical foundations of
          Rumi’s works on Andisheh TV with the program “Dar Golzar Masnavi” and
          then by organizing educational classes, he taught Iranian mysticism
          and its adaptation to human rights and democracy issues. His spiritual
          sessions have been held at Tarzana Cultural Center, Orange County
          Center and Iranian Cultural Foundation of Houston, and he has given
          speeches at several conferences commemorating Maulana and Hafez at St.
          Thomas University of Houston and Iranian Cultural Center of Texas.
        </Text>
        <Image
          source={require('../../assets/founders/two.png')}
          style={styles.imageContainer}
        />
        <Text style={styles.titleText}>Rumi Global Center</Text>
        <Text style={styles.paraText}>
          Safvat established the Rumi global Center” and after that, in
          cooperation with the book company and the Iran Art Center, for one
          year, he held monthly “Der Bazm Arefan” conferences in Los Angeles,
          where one of Iran’s great mystics was introduced every month.
          including Rumi, Shams, Bayazid, Kharaqani, Halaj, Attar and others,
          and at the same time, many young artists and musicians of the city
          also voluntarily helped and accompanied him in this matter.
        </Text>
        <Image
          source={require('../../assets/founders/three.png')}
          style={styles.imageContainer}
        />
        <Text style={styles.titleText}>In the evening of God</Text>
        <Text style={styles.paraText}>
          In the evening of God, with the voice of Iran’s master and announcer,
          Fereydun Farah Andoz is another CD title written and edited by Babak
          Safvat, in the first part of which is the meeting of Rumi and Shams
          Tabrizi, and in the second part It narrates the ups and downs of
          Rumi’s life after the emigration of Shams until the time of his
          farewell to the earthly world.
        </Text>
        <Text style={styles.paraText}>
          Bazm Khuda is the most complete CD available on the life of Rumi ,
          which was distributed by Kitab Publishing House in Los Angeles.
        </Text>
        <Text style={styles.titleText}>Radio Mehr</Text>
        <Text style={styles.paraText}>
          Radio Mehr, affiliated with “Rumi Global Center”, successfully
          produced hundreds of hours of mystical listening programs in the field
          of cultural and mystical issues in cooperation with dozens of young
          and good-voiced artists in different cities of the world in a period
          of three years. The programs generally include: news related to Rumi,
          prayers, recitations, mystical stories and interviews with writers and
          artists who have cultural products in the field of mystical issues.
          All of these productions are available on Mehr and YouTube channels
          with the same name mehr Rumi global center
        </Text>
        <Text style={styles.titleText}>Delnavaz Podcast</Text>
        <Text style={styles.paraText}>
          The “Delnavaz Podcast,” cherished in Southern California and by
          Iranians worldwide, brings a rich array of cultural programs into the
          homes of its listeners. Featuring diverse content spanning arts,
          humor, and joy, it connects countrymen globally with a touch of home.
          An independent media, without religious or political party bias and
          using new and modern technologies, strives to be a bridge for the
          exchange of knowledge and knowledge of Persian speakers through the
          introduction of businesses, jobs and efficient people.
        </Text>
      </LinearGradient>
      <View
        style={{
          width: '100%',
          height: vs(100),
          backgroundColor: '#A9927D',
          paddingHorizontal: s(15),
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: 'Inter-SemiBold',
            color: '#FFFFFF',
            fontSize: ms(20),
          }}>
          Babak Safvat
        </Text>
        <Text
          style={{
            fontFamily: 'Inter-SemiBold',
            color: '#FFFFFF',
            fontSize: ms(20),
          }}>
          Founder & producer
        </Text>
      </View>
      <LinearGradient
        colors={['#FFFFFF', '#F2E3BC80']} // White to Beige with 50% opacity
        start={{x: 1, y: 0}} // Start from the right
        end={{x: 0, y: 0}} // End at the left
        style={{
          width: '100%',
          height: 'auto',
          paddingHorizontal: s(15),
          padding: ms(15),
          paddingVertical: vs(20),
        }}>
        <Text style={styles.titleText}>Biography of Arash Madah</Text>
        <Text style={styles.paraText}>
          Arash was born in the old and authentic area of ​​Tehran, that is,
          “Sanglech” neighborhood, and he grew up in an educated and cultural
          family, a family in which the mother devoted herself to the beautiful
          job of a teacher and the father worked in the field of financial
          affairs. He was busy, Ani did not stop studying Iranian poetry and
          culture, and his father’s whispers in Arash’s ears at night were
          nothing but reading the beautiful quatrains of “Hakim Omar Khayyam”
          and getting to know this wonder of the world, on the other hand, the
          gift of having an uncle named “Abdol Rafi Haqit “, who is considered
          one of Iran’s famous magnates, provided a suitable platform for Arash
          to be able to explore the great and incomparable treasures of Khorasan
          mysticism and especially Sultan al-Arifin through talking with him and
          studying his countless literary and mystical works. Get to know
          Bastami and Sheikh Kharqani. Thoughts that based on humanism and
          altruism made the seed of service and love for people fertile and
          blossomed in his heart.
        </Text>
        <Image
          source={require('../../assets/founders/four.png')}
          style={styles.imageContainer}
        />
        <Text style={styles.titleText}>Steps of learning science</Text>
        <Text style={styles.paraText}>
          Arash studied at Kamal High School in Tehran, which was one of the
          best schools in Tehran and Iran at the time, and he always sought to
          acquire deep skills and experiences beyond learning so that he could
          equip himself in a more complete way. After finishing high school,
          Arash entered the university and successfully completed the field of
          hemical engineering and petrochemical industries.
        </Text>
        <Text style={styles.titleText}>Immigration to America</Text>
        <Text style={styles.paraText}>
          Arash, like many others, was forced to leave his country due to his
          political struggles and struggles for freedom, as well as due to the
          harsh conditions of the time, and is now living in the United States.
          Since his arrival, he has continued to acquire knowledge and has
          succeeded in obtaining 3 professional bachelor’s degrees in
          construction from the state of California.
        </Text>
        <Text style={styles.titleText}>Other arts</Text>
        <Text style={[styles.paraText]}>
          Since his childhood, he has been very interested in playing the santur
          instrument, and with the advice of his educated uncle, he has also
          benefited from the presence of Zandi master. He is also interested in
          swimming and continues to practice it professionally. Having a
          powerful background in public relations and marketing, as well as
          mastering technical and artistic affairs and many experiences, he is
          considered a solid pillar in the establishment of Delnavaz Radio.
        </Text>
      </LinearGradient>
      <ContactCard />
    </ScrollView>
  );
};

export default Founders;

const styles = StyleSheet.create({
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
    paddingVertical: vs(5),
  },
  paraText: {
    paddingVertical: vs(5),
    fontSize: ms(16),
    textAlign: 'left',
  },
});
