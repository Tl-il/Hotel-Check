import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import{MaterialCommunityIcons} from '@expo/vector-icons'



function MyfavoritesButton ({style}) {

  const [MyfavoritesButton, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!MyfavoritesButton);
  };

  return (
    <TouchableOpacity onPress={toggleLike}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }} >
        <MaterialCommunityIcons name={MyfavoritesButton ? 'heart-off-outline' : 'heart-outline'} size={24} color={MyfavoritesButton ? 'red' : 'black'} style={style} />
        {/* <Text style={{ marginLeft: 5 }}>{MyfavoritesButton ? '' : 'myfavorite'}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default MyfavoritesButton;
