import React, { useEffect,useState} from 'react';
import { View,StyleSheet,Alert,Image} from 'react-native';
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { set } from 'firebase/database';



function ImageInput({imageUri, onChangeImage}) {
    
    const [localImageUri, setLocalImageUri] = useState(imageUri);
    
    useEffect(() => {
        requestPermission();
    }, []);   

 
    const requestPermission = async () => {
        const {granted} = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted)
            alert('You need to enable permission to access the library');
    }
    
    const handlePress = () => {
        if (!localImageUri)selectImage();
        else {
            Alert.alert('Delete', 'Are you sure you want to delete this image?', [
                {text: 'Yes', onPress: () => {
                    onChangeImage(null);
                    setLocalImageUri(null);
                }},

                {text: 'No'},
            ]);

        }
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
                if (!result.canceled)
                    //selectImage=result.assets[0].uri;
                setLocalImageUri(result.assets[0].uri);
                onChangeImage(result.assets[0].uri);

            } catch (error) {
                console.log("Error reading an image", error);
            }
           
        }

    
     
    
    
    return (
        <TouchableWithoutFeedback onPress={handlePress}>
    <View style={styles.container}>
    {!localImageUri && <MaterialCommunityIcons color={colors.light} name="camera" size={40} />}
    {localImageUri && <Image source={{ uri: localImageUri }} style={styles.image} />}
    </View>
    </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        overflow: 'hidden',
    },
    image: {
        width: 100,
        height: 100,
    },
});

export default ImageInput;