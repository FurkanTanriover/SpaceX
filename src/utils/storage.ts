import AsyncStorage from '@react-native-async-storage/async-storage';
import { TOKEN } from './constants';
export const saveToken = async (token:string) => {
    try {
      await AsyncStorage.setItem(TOKEN, JSON.stringify(token));
    } catch (error) {
      console.log('Error saving token:', error);
    }
  };
  
  export const loadToken = async () => {
    try {
      const token = await AsyncStorage.getItem(TOKEN);
      return token ? JSON.parse(token) : null;
    } catch (error) {
      console.log('Error loading token', error);
      return null;
    }
  };