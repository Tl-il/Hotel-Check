import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    const item = {
        value: value,
        timestamp: Date.now(),
        };
        const jsonValue = JSON.stringify(item);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Data stored successfully');
  } catch (error) {
    console.error('Error storing data:', error);
  }
}
const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonItem != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.error('Error getting data:', error);
  }
}
export default storeData;