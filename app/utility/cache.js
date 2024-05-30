import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";



const expiryInMinutes = 5;
const prefix= 'cache';
const isExpired = (item) => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, 'minutes')> expiryInMinutes;
}

const storeData = async (key, value) => {
  try {
    const item = {
        value: value,
        timestamp: Date.now(),
        };
        const value = JSON.stringify(item);
    await AsyncStorage.setItem(prefix + key, value);
    console.log('Data stored successfully');
  } catch (error) {
    console.error('Error storing data:', error);
  }
}
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);
    // return item != null ? JSON.parse(value) : null;
    if (!item) 
      return null;
    
    if (isExpired(item)) {
      await AsyncStorage.removeItem(prefix + key);
      console.log('Data is expired');
      return null;
    }
    
    return item.value;

  } catch (error) {
    console.error('Error getting data:', error);
  }
}
export default storeData;