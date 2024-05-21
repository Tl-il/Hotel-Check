import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const RatingButton = ({ averageRating, totalRatings,titel }) => {
  const [userRating, setUserRating] = useState(0);

  const handleRating = (rating) => {
    // You can implement the logic here to submit the user's rating to your backend
    setUserRating(rating);
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => handleRating(i)}>
          <Ionicons
            name={userRating >= i ? 'star' : 'star-outline'}
            size={24}
            color={userRating >= i ? '#FFD700' : 'gray'}
          />
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {renderStars()}
      <Text style={{ marginLeft: 5 }}>{userRating} {titel}</Text>
    </View>
  );
};

export default RatingButton;
