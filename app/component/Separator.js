import React from 'react';
import { View,StyleSheet } from 'react-native';
import colors from '../config/colors';

function Separator() {
    return (
      <View style={styles.separator}/>
    );
}
const styles = StyleSheet.create({
    separator:{
        width:'100%',
        height:0.3,
        backgroundColor:colors.litegray,
    }
})

export default Separator;