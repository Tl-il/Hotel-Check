import React from 'react';
import { TextInput, View,StyleSheet,Platform } from 'react-native';
import{MateriaCommunityIcons} from '@expo/vector-icons';
import defaultstyles from '../config/styles';

function AppTextInput({icon,...otherProp}) {
    return (
       <View style={styles.container}>
{icon && <MateriaCommunityIcons 
name={icon} 
size={20} 
colors={defaultstyles.colors.litegray} />}
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
})

export default AppTextInput
;