import React from 'react';
import {StyleSheet,Text, TouchableOpacity,style } from 'react-native';
import colors from '../../config/colors';
function AppButton({title,onPress,color='primary'}) {
    return (
      <TouchableOpacity style={[styles.button, {backgroundColor:colors[color]},style]} onPress={onPress}> 
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: colors.primary,
        borderRadius:25,
        justifyContent:'center',
        padding:15,
        width:'50%',
        marginVertical:5,
    },
    text:{
      textAlign:'center',
        color:'white',
        fontSize:20,
        textTransform:'uppercase',
        fontWeight:'bold',
    }
})

export default AppButton;