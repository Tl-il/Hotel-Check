import React, { useState } from 'react';
import {View,StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppText from './AppText';
import defaultstyles from '../config/styles';
import Screen from './Screen';
import PickerItem from './PickerItem';



function AppPicker({style,items,icon,placeholder,onSelectItem,selectedItem,PickerItemComponent=PickerItem,}) {
    [modalVisible,setModalVisible]=useState(false);

    return (
        <>
        <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
        <View style={styles.container}>
        {icon && (<MaterialCommunityIcons
        name={icon} 
        size={20} 
        colors={defaultstyles.colors.grayflash} />
        )}
        <AppText style={[styles.text,style]}>{selectedItem ? selectedItem.label:placeholder}</AppText>
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
             <PickerItemComponent
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