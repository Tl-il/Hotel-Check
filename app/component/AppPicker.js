import React, { useState } from 'react';
import {View,StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import colors from '../config/colors';
import AppText from './AppText';
import defaultstyles from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';



function AppPicker({items,icon,Placeholder,onSelectItem,selectedItem}) {
    [modalVisible,setModalVisible]=useState(false);

    return (
        <>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={styles.container}>
        <MaterialCommunityIcons
        name={icon} 
        size={20} 
        colors={defaultstyles.colors.grayflash} />
        <AppText style={styles.text}>{selectedItem ? selectedItem.label:Placeholder}</AppText>
        <MaterialCommunityIcons
        name='chevron-down'
        size={20} 
        colors={defaultstyles.colors.grayflash} />
        </View>
        </TouchableWithoutFeedback>

        <Modal visible={modalVisible} animationType="slide" >
            <Screen>
            <Button title="Close" onPress={()=>setModalVisible(false)}/>
            <FlatList
            data={items}
            keyExtractor = {(item)=> item.value.toString()}
            renderItem={({item})=>(
             <PickerItem
            label={item.label} 
            onPress={()=>{
                setModalVisible(false);
                onSelectItem(item);
            }}
            /> 
            )}
            />
            </Screen>
        </Modal>
        </>
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
    text:{
        flex: 1,
    },
})

export default AppPicker;