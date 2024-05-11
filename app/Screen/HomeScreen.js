import React from 'react';
import Screen from '../component/Screen';
import ListItem from '../component/ListItem';
import Crad from '../component/ Crad';
import { FlatList,StyleSheet } from 'react-native';

const listhotels=[
    {
        id:1,
        title:'Dan Eilat Hotel',
        stars:4.3,
        image: require('../assets/hotel1.jpeg')

    },
    {
        id:2,
        title:'Wost Lagoon Netanya Hotel',
        stars:4.6,
        image: require('../assets/hotel2.jpeg')

    },
    {
        id:3,
        title:'Hilton Tel-Aviv Hotel',
        stars:3.8,
        image: require('../assets/hotel3.jpeg')

    },
    {
        id:4,
        title:'Orient Jerusalem Hotel',
        stars:4.9,
        image: require('../assets/hotel3.jpg')

    }
];
function HomeScreen({navigation}) { 
    return (
        <Screen style={styles.screen}>
           <FlatList
           data={listhotels}
           keyExtractor={listhotels=>listhotels.id.toString()}
           renderItem={({item})=>
           <Crad // אם לעשות את זה כרשימה?
           image={item.image}  onPress={() =>navigation.navigate('Lisit')}
           title={item.title}
           subTitle={ "⭐" + item.stars} 
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