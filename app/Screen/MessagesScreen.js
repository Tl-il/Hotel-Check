import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';
import ListItem from '../component/ListItem';
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
        <SafeAreaView>
       <FlatList
       data={messages}
       keyExtractor={messages=>messages.id.toString()}
       renderItem={({item})=> <ListItem 
       title={item.title}
       subTitle={item.description}
       image={item.image}
       /> }/>
       </SafeAreaView>
    );
}

export default MessagesScreen;