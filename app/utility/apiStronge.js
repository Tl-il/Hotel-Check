import AsyncStorage from '@react-native-async-storage/async-storage';

const saveHotelsToStorage = async (hotels) => {
    try {
      await AsyncStorage.setItem('hotels', JSON.stringify(hotels));
    } catch (error) {
      console.error('Failed to save hotels to storage', error);
    }
};

const loadSavedHotels = async () => {
    try {
      const savedHotels = await AsyncStorage.getItem('hotels');
      if (savedHotels !== null) {
        return JSON.parse(savedHotels);
      }
    } catch (error) {
      console.error('Failed to load hotels from storage', error);
    }
    return [];
};

const clearHotelsFromStorage = async () => {
    try {
      await AsyncStorage.removeItem('hotels');
    } catch (error) {
      console.error('Failed to clear hotels from storage', error);
    }
};

export { saveHotelsToStorage, loadSavedHotels, clearHotelsFromStorage };
