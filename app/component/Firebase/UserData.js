import AsyncStorage from '@react-native-async-storage/async-storage';

// שמירה של המידע המקומי של המשתמש
const StoreUserData = async (user) => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem('@user_data', jsonValue);
  } catch (e) {
    console.error("Error storing user data", e);
  }
};

// אחזור המידע המקומי של המשתמש
const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@user_data');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error getting user data", e);
  }
};
