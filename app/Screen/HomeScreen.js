import React,{useEffect,useState} from 'react';
import Screen from '../component/Screen';
import ListItem from '../component/ListItem';
import Crad from '../component/ Crad';
import { FlatList,StyleSheet } from 'react-native';
import MyfavoritesButton from '../component/Button/MyfavoritesButton';
import routes from '../navigation/routes';
import details from '../api/details';
import 'firebase/storage';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { getAuth } from "firebase/auth";


// const listhotels=[
//     {
//         id:1,
//         title:'Dan Eilat Hotel',
//         stars:4.3,
//         image: require('../assets/hotel1.jpeg'),
//         price: 200,
        

//     },
//     {
//         id:2,
//         title:'Wost Lagoon Netanya Hotel',
//         stars:4.6,
//         image: require('../assets/hotel2.jpeg'),
//         price: 150,

//     },
//     {
//         id:3,
//         title:'Hilton Tel-Aviv Hotel',
//         stars:3.8,
//         image: require('../assets/hotel3.jpeg'),
//         price: 300,

//     },
//     {
//         id:4,
//         title:'Orient Jerusalem Hotel',
//         stars:4.9,
//         image: require('../assets/hotel3.jpg'),
//         price: 400,

//     }

// ];



function HomeScreen({navigation}) { 

    const [hotels, setHotels] = useState([]);
    const auth = getAuth();
    const db = getFirestore();
  
    const fetchhotels = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Hotels"));
        const hotelsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setHotels(hotelsList);
        console.log("Fetched hotels: ", hotelsList); // הוסף לוג כאן
      } catch (error) {
        console.error("Error fetching hotels: ", error);
      }
    };
    fetchhotels();


    return (
        <Screen style={styles.screen}>
           <FlatList
           data={hotels}
           keyExtractor={listing=>listing.id.toString()}
           renderItem={({item})=>
           <Crad // אם לעשות את זה כרשימה?
           uri={item.image}  
           title={item.name}
           subTitle={ "⭐" + item.rating} 
           onPress={() =>navigation.navigate(routes.LISTING_DETAILS,item)}
           />
           
           }
           />
           
        </Screen>
    );
}
const styles = StyleSheet.create({
    screen:{
        padding:5,
    }
})

export default HomeScreen;