import React,{useEffect,useState,useRef} from 'react';
import Screen from '../component/Screen';
import ListItem from '../component/ListItem';
import Crad from '../component/ Crad';
import { FlatList,StyleSheet,RefreshControl } from 'react-native';
import MyfavoritesButton from '../component/Button/MyfavoritesButton';
import routes from '../navigation/routes';
import details from '../api/details';
import 'firebase/storage';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from "firebase/auth";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewPost from './NewPost';
import { value } from 'deprecated-react-native-prop-types/DeprecatedTextInputPropTypes';

function HomeScreen({navigation}) { 

  const [hotels, setHotels] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const intervalRef = useRef(null);

  const fetchHotelData = async (id) => {
    const options = {
      method: 'GET',
      url: 'https://booking-com.p.rapidapi.com/v1/hotels/data',
      params: {
        hotel_id: id,
        locale: 'en-gb',
        image_quality: 'high',
      },
      headers: {
        'x-rapidapi-key': '8878e7dac2msh8f76c860996aad3p136acdjsn304ba7bdee12',
        'x-rapidapi-host': 'booking-com.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const hotelData = response.data;
      saveHotelData(hotelData);
    } catch (error) {
      console.error(error);
    }
  };

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

  const saveHotelsToStorage = async (hotels) => {
    try {
      await AsyncStorage.setItem('hotels', JSON.stringify(hotels));
    } catch (error) {
      console.error('Failed to save hotels to storage', error);
    }
  };

  const clearHotelsFromStorage = async () => {
    try {
      await AsyncStorage.removeItem('hotels');
      setHotels([]);
    } catch (error) {
      console.error('Failed to clear hotels from storage', error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await clearHotelsFromStorage();
    setRefreshing(false);
    setIsFetching(true);
  };

  useEffect(() => {
    const loadSavedHotels = async () => {
      try {
        const savedHotels = await AsyncStorage.getItem('hotels');
        if (savedHotels !== null) {
          const parsedHotels = JSON.parse(savedHotels);
          // Ensure all hotels have an id and value field
          const validHotels = parsedHotels.filter(hotel => hotel.id && hotel.value);
          setHotels(validHotels);
        }
      } catch (error) {
        console.error('Failed to load hotels from storage', error);
      }
    };

    loadSavedHotels();
  }, []);


  useEffect(() => {
    if (isFetching) {
      let currentHotelId = 1377074;
      let count = 0;
      intervalRef.current = setInterval(() => {
        if (count < 5) {
          fetchHotelData(currentHotelId);
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
    navigation.navigate('new Post', {
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
            onPress={() => navigation.navigate(routes.LISTING_DETAILS,item)}
            
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