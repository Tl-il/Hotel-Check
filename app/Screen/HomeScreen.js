import React from 'react';
import Screen from '../component/Screen';
import ListItem from '../component/ListItem';
import Crad from '../component/ Crad';
import { FlatList,StyleSheet } from 'react-native';

const listhotels=[
    {
        id:1,
        title:'name of the hotel',
        stars:4.3,
        image: require('../assets/hotel1.jpeg')

    },
    {
        id:2,
        title:'name of the hotel',
        stars:4.6,
        image: require('../assets/hotel2.jpeg')

    }
];
function HomeScreen(props) {
    return (
        <Screen style={styles.screen}>
           <FlatList
           data={listhotels}
           keyExtractor={listhotels=>listhotels.id.toString()}
           renderItem={({item})=>
           <Crad // אם לעשות את זה כרשימה?
           image={item.image}
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