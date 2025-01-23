/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useRef, useContext} from 'react';
import {
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
} from 'react-native';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import ScheduleCard from '../../components/ScheduleCard';
import schedule from '../../data/data.ts';
import {ms} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';
import LanguageContext from '../../utils/LanguageContext.js';

const {width} = Dimensions.get('window');

export default function Example() {
  const swiper = useRef();

  const {t} = useTranslation();
  const {language, setLanguage} = useContext(LanguageContext);
  const initialDate = new Date();
  const initialWeekday = moment(initialDate).format('ddd');

  const [value, setValue] = useState(initialDate);
  const [week, setWeek] = useState(0);
  const [selectedWeekday, setSelectedWeekday] = useState(initialWeekday);

  const weeks = React.useMemo(() => {
    const start = moment().startOf('week').add(week, 'weeks');

    return [-1, 0, 1].map(adj => {
      return Array.from({length: 7}).map((_, index) => {
        const date = moment(start).add(adj, 'weeks').add(index, 'days');
        return {
          weekday: date.format('ddd'),
          date: date.toDate(),
        };
      });
    });
  }, [week]);

  const handleIndexChange = ind => {
    if (ind === 1) return;

    const newIndex = ind - 1;
    setWeek(prevWeek => prevWeek + newIndex);
    setValue(moment(value).add(newIndex, 'weeks').toDate());

    setTimeout(() => {
      swiper.current.scrollTo(1, false);
    }, 100);
  };

  let data;
  switch (selectedWeekday) {
    case 'Mon':
      data = schedule.Monday;
      break;
    case 'Tue':
      data = schedule.TuesDay;
      break;
    case 'Wed':
      data = schedule.WednesDay;
      break;
    case 'Thu':
      data = schedule.ThursDay;
      break;
    case 'Fri':
      data = schedule.FriDay;
      break;
    case 'Sat':
      data = schedule.SaturDay;
      break;
    case 'Sun':
      data = schedule.SunDay;
      break;
    default:
      data = [];
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{t('Schedule')}</Text>
        </View>

        <View style={styles.picker}>
          <Swiper
            index={1}
            ref={swiper}
            loop={false}
            showsPagination={false}
            onIndexChanged={handleIndexChange}>
            {weeks.map((dates, index) => (
              <View style={styles.itemRow} key={index}>
                {dates.map((item, dateIndex) => {
                  const isActive = moment(value).isSame(item.date, 'day');
                  return (
                    <TouchableWithoutFeedback
                      key={dateIndex}
                      onPress={() => {
                        setValue(item.date);
                        setSelectedWeekday(item.weekday);
                      }}>
                      <View
                        style={[
                          styles.item,
                          isActive
                            ? {backgroundColor: '#111', borderColor: '#111'}
                            : {backgroundColor: '#F2E3BC'},
                        ]}>
                        <Text
                          style={[
                            styles.itemWeekday,
                            // isActive && {color: '#fff'},
                            {color: isActive ? '#fff' : '#111'},
                          ]}>
                          {item.weekday}
                        </Text>
                        {/* <Text
                          style={[
                            styles.itemDate,
                            isActive && {color: '#fff'},
                          ]}>
                          {item.date.getDate()}
                        </Text> */}
                      </View>
                    </TouchableWithoutFeedback>
                  );
                })}
              </View>
            ))}
          </Swiper>
        </View>

        {/* Content */}
        <FlatList
          data={data}
          renderItem={({item}) => <ScheduleCard item={item} />}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: ms(20)}} // Add padding at the bottom
          style={{flexGrow: 1}} // Allow FlatList to grow but not take all space
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: ms(24),
  },
  header: {
    paddingHorizontal: ms(16),
  },
  title: {
    fontSize: ms(32),
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: ms(12),
    textAlign: 'left',
  },
  picker: {
    maxHeight: ms(74), // Set a maximum height for the picker
    paddingVertical: ms(12),
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemRow: {
    width,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: ms(12),
  },
  item: {
    flex: 1,
    height: ms(50),
    marginHorizontal: ms(4),
    paddingVertical: ms(6),
    paddingHorizontal: ms(4),
    borderWidth: ms(1),
    borderRadius: ms(8),
    borderColor: '#e3e3e3',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
