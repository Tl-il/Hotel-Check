import React from 'react';
import Screen from '../component/Screen';
import ListItem from '../component/ListItem';
import Crad from '../component/ Crad';
import { FlatList,StyleSheet,ImageBackground,Text } from 'react-native';
import BarBottom from '../navigation/BarBottom';


 

function MyPost({navigation}) { 
    return (
        
        <ImageBackground source= {require('../assets/mypost.png')}
        style={styles.background}
        >
        </ImageBackground>

    );}

    const styles = StyleSheet.create({
        background: {
            flex:1

         }

    })

    export default MyPost;