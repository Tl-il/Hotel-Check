import React from 'react';
import { TextInput, View,StyleSheet,Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import defaultstyles from '../config/styles';

function AppTextInput({icon,
     ...otherProp}) {
    return (
       <View style={styles.container}>
        {icon && <MaterialCommunityIcons 
        name={icon} 
        size={20} 
        colors={defaultstyles.colors.black}
        style={styles.icon} /> }
        <TextInput style={defaultstyles.text} {...otherProp}/>
       </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultstyles.colors.grayflash,
        borderRadius:25,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginVertical:10,
        
    },
    textinput:{
        fontSize:20, 
        fontFamily: Platform.OS === "android" ? 'Roboto' : 'Avneir',
    },

    icon: {
        marginRight: 10,
      },
})

export default AppTextInput
;