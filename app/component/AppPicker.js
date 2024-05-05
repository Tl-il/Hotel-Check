import React from 'react';
import {View,StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import AppText from './AppText';
import defaultstyles from '../config/styles';

function AppPicker({icon,Placeholder,...otherProps}) {
    return (
        <View style={styles.container}>
        <AppText style={styles.text}>{Placeholder}</AppText>
        <MaterialCommunityIcons
        name={icon} 
        size={20} 
        colors={defaultstyles.colors.grayflash} />
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
    // text:{
    //     flex: 1,
    // },
})

export default AppPicker;