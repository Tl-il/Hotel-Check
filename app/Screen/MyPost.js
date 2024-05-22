import React from 'react';
import Screen from '../component/Screen';
import ListItem from '../component/ListItem';
import Crad from '../component/ Crad';
import { FlatList,StyleSheet,ImageBackground,Text,View } from 'react-native';
import BarBottom from '../navigation/BarBottom';
import AppTextInput from '../component/AppTextInput';



 

function MyPost({navigation}) { 
    return (
        
        <ImageBackground source= {require('../assets/mypost.png')}
        style={styles.background}
        >
        <View>
            <ListItem>
                
            </ListItem>
        </View>
        </ImageBackground>

    );}

    const styles = StyleSheet.create({
        background: {
            flex:1

         }

    })

    export default MyPost;