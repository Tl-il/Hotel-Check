import React, { useEffect, useState, useRef } from 'react';
import Screen from '../component/Screen';
import Crad from '../component/ Crad';
import { FlatList, StyleSheet, RefreshControl } from 'react-native';
import 'firebase/storage';
import fetchHotelData from '../api/details';
import { saveHotelsToStorage, loadSavedHotels, clearHotelsFromStorage } from '../utility/apiStronge';

function HomeScreen({ navigation }) { 
  const [hotels, setHotels] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const intervalRef = useRef(null);

  const saveHotelData = async (hotelData) => {
    const hotel = {
      id: hotelData.summary.id,  // מזהה המלון
      name: hotelData.summary.name,  // שם המלון
      image: hotelData.propertyGallery?.images?.[0]?.image?.url || '',  // תמונת המלון
      country: hotelData.summary.location?.address?.countryCode || 'Unknown',  // קוד המדינה
      city: hotelData.summary.location?.address?.city || 'Unknown',  // עיר
      rating: hotelData.reviewInfo.summary?.overallScoreWithDescriptionA11y?.value || '4.0',  // דירוג הכוכבים (אם קיים)
    };

    setHotels(prevHotels => {
      const isExisting = prevHotels.some(item => item.id === hotel.id);
      if (!isExisting) {
        const updatedHotels = [...prevHotels, hotel];
        saveHotelsToStorage(updatedHotels); // שמירת נתוני המלונות
        return updatedHotels;
      }
      return prevHotels;
    });
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await clearHotelsFromStorage(); // נקה את הנתונים הקיימים באחסון
    setHotels([]);
    setRefreshing(false);
    setIsFetching(true); // התחל מחדש את הבאת הנתונים
  };

  useEffect(() => {
    const loadSavedHotelsFromStorage = async () => {
      const savedHotels = await loadSavedHotels();
      const validHotels = savedHotels.filter(hotel => hotel.id && hotel.name); // וודא שהמלון תקין
      setHotels(validHotels);
    };

    loadSavedHotelsFromStorage(); // טען מלונות שמורים בעת טעינת המסך
  }, []);

  useEffect(() => {
    if (isFetching) {
      let currentHotelId = 1105155;
      let count = 0;
      intervalRef.current = setInterval(async () => {
        if (count < 6) {
          try {
            const hotelData = await fetchHotelData(currentHotelId); // הבאת נתוני המלון
            if (hotelData) {
              await saveHotelData(hotelData); // שמור את נתוני המלון
            }
          } catch (error) {
            console.error('Error fetching hotel data:', error);
          }
          currentHotelId += 1;
          count += 1;
        } else {
          clearInterval(intervalRef.current);
          setIsFetching(false);
        }
      }, 3500); // מרווח בין קריאות

      return () => clearInterval(intervalRef.current);
    }
  }, [isFetching]);

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={hotels}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Crad 
            uri={item.image}
            title={`${item.name} - ${item.city}, ${item.country}`}
            subTitle={`⭐ ${item.rating}`}
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
