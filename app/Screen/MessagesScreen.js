import React, { useState } from 'react';
import { FlatList, SafeAreaView,StyleSheet, View} from 'react-native';
import ListItem from '../component/ListItem';
import Screen from '../component/Screen';
import Constants from 'expo-constants';
import colors from '../config/colors';
import Separator from '../component/Separator';
import DeleteAcition from '../component/Button/DeleteAcition';


//const[refreshing,setRefreshing]=useState(false);
const initialMassages=[
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

    const [messages,setMessages] =useState(initialMassages);
    useState[refreshing,setRefreshing]=useState(false);

    const handlDelelte= messages =>{
        setMessages(messages.filter(m=>m.id !==messages.id));

    }
    return (
        // <Screen> 
        <SafeAreaView>
        
       <FlatList
       data={messages}
       keyExtractor={messages=>messages.id.toString()}
       renderItem={({item})=>(
        <ListItem 
       title={item.title}
       subTitle={item.description}
       image={item.image}
       onPress={()=>console.log('the message is:',item)}
       renderRightActions={()=>
       <DeleteAcition onPress={()=>handlDelelte(item)}/>}
       refreshing={refreshing}
       onRefrsh={()=>
    setMessages(([
        {
            id:2,
            title:'Hi you',
            description:'good',
            image: require('../assets/profile.jpeg'),
        },
    ])
)}
       
       />
    )} 
       ItemSeparatorComponent={Separator}
       />
      {/* </Screen> */} 
      </SafeAreaView>
    );
}  
const styles = StyleSheet.create({
    screen:Constants.statusBarHeight,
})

export default MessagesScreen;