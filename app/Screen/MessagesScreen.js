import React, { useState } from 'react';
import { FlatList, SafeAreaView,StyleSheet, View } from 'react-native';
import ListItem from '../component/ListItem';
import Screen from '../component/Screen';
import Constants from 'expo-constants';
import colors from '../config/colors';
import Separator from '../component/Separator';
//const[refreshing,setRefreshing]=useState(false);
const messages=[
    {
        id:1,
        title:'Hi',
        description:'how are you?',
        image: require('../assets/profile.jpeg'),
    },
    {
        id:2,
        title:'Hi you',
        description:'good',
        image: require('../assets/profile.jpeg'),
    },
]
function MessagesScreen(props) {
    return (
        <Screen> 
        
       <FlatList
       data={messages}
       keyExtractor={messages=>messages.id.toString()}
       renderItem={({item})=> <ListItem 
       title={item.title}
       subTitle={item.description}
       image={item.image}
       onPress={()=>console.log('the message is:',item)}
       /> }
       ItemSeparatorComponent={Separator}/>
       
       </Screen>
    );
}
// const styles = StyleSheet.create({
//     screen:Constants.statusBarHeight,
// })

export default MessagesScreen;