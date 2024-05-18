import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const LikeIcon = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <TouchableOpacity onPress={toggleLike}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AntDesign name={liked ? 'dislike2' : 'like2'} size={24} color={liked ? 'red' : 'black'} />
        <Text style={{ marginLeft: 5 }}>{liked ? 'Unlike' : 'Like'} ({likes})</Text>
      </View>
    </TouchableOpacity>
  );
};

export default LikeIcon;
