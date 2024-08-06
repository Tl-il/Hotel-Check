import React, { useEffect, useState, useRef } from 'react';
import Screen from '../component/Screen';
import ListItem from '../component/ListItem';
import Crad from '../component/ Crad';
import { FlatList, StyleSheet, RefreshControl } from 'react-native';
import MyfavoritesButton from '../component/Button/MyfavoritesButton';
import routes from '../navigation/routes';
import details from '../api/details';
import 'firebase/storage';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewPost from './NewPost';
import fetchHotelData from '../api/details';
import { saveHotelsToStorage, loadSavedHotels, clearHotelsFromStorage } from '../utility/apiStronge';

function HomeScreen({ navigation }) { 
  const [hotels, setHotels] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const intervalRef = useRef(null);

  const saveHotelData = async (hotelData) => {
    const hotel = {
      id: hotelData.hotel_id,
      name: hotelData.name,
      image: hotelData.main_photo_url,
      rating: hotelData.review_score,
      country: hotelData.country,
      city: hotelData.city,
      label: hotelData.name,
      value: hotelData.hotel_id,
    };

    setHotels(prevHotels => {
      const isExisting = prevHotels.some(item => item.id === hotel.id);
      if (!isExisting) {
        const updatedHotels = [...prevHotels, hotel];
        saveHotelsToStorage(updatedHotels);
        return updatedHotels;
      }
      return prevHotels;
    });
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await clearHotelsFromStorage();
    setHotels([]);
    setRefreshing(false);
    setIsFetching(true);
  };

  useEffect(() => {
    const loadSavedHotelsFromStorage = async () => {
      const savedHotels = await loadSavedHotels();
      const validHotels = savedHotels.filter(hotel => hotel.id && hotel.value);
      setHotels(validHotels);
    };

    loadSavedHotelsFromStorage();
  }, []);

  useEffect(() => {
    if (isFetching) {
      let currentHotelId = 1377074;
      let count = 0;
      intervalRef.current = setInterval(async () => {
        if (count < 5) {
          const hotelData = await fetchHotelData(currentHotelId);
          if (hotelData) {
            await saveHotelData(hotelData);
          }
          currentHotelId += 1;
          count += 1;
        } else {
          clearInterval(intervalRef.current);
          setIsFetching(false);
        }
      }, 300);

      return () => clearInterval(intervalRef.current);
    }
  }, [isFetching]);

  const handleNewPost = (hotel) => {
    navigation.navigate('NewPost', { // עדכון שם המסך לניווט נכון
      name: hotel.name,
      city: hotel.city,
      country: hotel.country
    });
  };

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={hotels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Crad 
            uri={item.image}
            title={item.name + " - " + item.city + ", " + item.country}
            subTitle={"⭐" + item.rating}
            onPress={() => navigation.navigate('ListingDetails', item)} // ניווט למסך פרטי המלון
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 5,
  },
});

export default HomeScreen;
