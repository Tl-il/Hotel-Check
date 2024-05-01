import React from 'react';
import { TextInput, View,StyleSheet,Platform } from 'react-native';
import{MateriaCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';

function AppTextInput({icon,...otherProp}) {
    return (
       <View style={styles.container}>
{icon && <MateriaCommunityIcons name={icon} size={20} colors={colors.litegray} />}
<TextInput style={styles.textInput} {...otherProp}/>
       </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.grayflash,
        borderRadius:25,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginVertical:10,
        
    },
    textInput:{
        fontSize:18,
        fontFamily: Platform.OS === "android" ? 'Roboto' : 'Avneir',
    }
})

export default AppTextInput
;