import React from 'react';
import Screen from '../component/Screen';
import ListItem from '../component/ListItem';
import Crad from '../component/ Crad';
import { FlatList,StyleSheet } from 'react-native';
import BarBottom from '../navigation/BarBottom';

const listhotels=[

    

];
function MyPost({navigation}) { 
    return (
        <Screen style={styles.screen}>
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

export default MyPost;