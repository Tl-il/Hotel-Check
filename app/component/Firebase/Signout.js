import { getAuth, signOut } from 'firebase/auth';

const auth = getAuth();

const signOutUser = async () => {
  try {
    await signOut(auth);
    await AsyncStorage.removeItem('@user_data');
    console.log('User signed out and data removed locally');
  } catch (error) {
    console.error("Error signing out", error);
  }
};
