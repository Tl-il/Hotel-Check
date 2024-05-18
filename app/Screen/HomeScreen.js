import React from 'react';
import Screen from '../component/Screen';
import ListItem from '../component/ListItem';
import Crad from '../component/ Crad';
import { FlatList,StyleSheet } from 'react-native';
import MyfavoritesButton from '../component/Button/MyfavoritesButton';

const listhotels=[
    {
        id:1,
        title:'Dan Eilat Hotel',
        stars:4.3,
        image: require('../assets/hotel1.jpeg'),
        price: 200,

    },
    {
        id:2,
        title:'Wost Lagoon Netanya Hotel',
        stars:4.6,
        image: require('../assets/hotel2.jpeg'),
        price: 150,

    },
    {
        id:3,
        title:'Hilton Tel-Aviv Hotel',
        stars:3.8,
        image: require('../assets/hotel3.jpeg'),
        price: 300,

    },
    {
        id:4,
        title:'Orient Jerusalem Hotel',
        stars:4.9,
        image: require('../assets/hotel3.jpg'),
        price: 400,

    }

];
function HomeScreen({navigation}) { 
    return (
        <Screen style={styles.screen}><MyfavoritesButton/>
           <FlatList
           data={listhotels}
           keyExtractor={listing=>listing.id.toString()}
           renderItem={({item})=>
           <Crad // אם לעשות את זה כרשימה?
           image={item.image}  
           title={item.title}
           subTitle={ "⭐" + item.stars} 
           onPress={() =>navigation.navigate('ListingDetails',item)}
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