import AsyncStorage from '@react-native-async-storage/async-storage';

// שמירה של המידע המקומי של המשתמש
export const storeUserData = async (user) => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem('@user_data', jsonValue);
    const value = await AsyncStorage.getItem('@user_data');
    const userValue = JSON.parse(value);
    console.log('User data stored:', userValue);
  } catch (e) {
    console.error("Error storing user data", e);
  }
};

// אחזור המידע המקומי של המשתמש
export const getUserData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('@user_data');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error getting user data", e);
  }
};
