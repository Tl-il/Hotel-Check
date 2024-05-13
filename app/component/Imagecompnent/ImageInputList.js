import React from 'react';
import { View,StyleSheet } from 'react-native';
import ImageInput from './ImageInput';

uri='../assets';
function ImageInputList({imageUris = [], onRemoveImage, onAddImage}) {
    return (
       <View styles={styles.container}>
        {imageUris.map((uri =>
            <View key={{uri}} style={{marginRight:10}}>
        <ImageInput 
        imageUri={uri} 
        onChangeImage={()=> onRemoveImage(uri)}
        />
        </View>))}
         <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
    }
})

export default ImageInputList;