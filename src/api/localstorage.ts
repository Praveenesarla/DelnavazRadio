/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';

const setItem = async (itemName: string, item: any) => {
  try {
    await AsyncStorage.setItem(itemName, JSON.stringify(item));
    console.log(`Item ${itemName} set successfully.`);
  } catch (error) {
    console.error(`Error setting item ${itemName}:`, error);
  }
};

const getItem = async (itemName: string) => {
  try {
    return await AsyncStorage.getItem(itemName);
  } catch (error) {
    console.log(error);
  }
};

const removeItem = async (itemName: string) => {
  try {
    await AsyncStorage.removeItem(itemName);
  } catch (error) {
    console.log(error);
  }
};

const clear = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};

const getToken = async () => {
  try {
    const token = await getItem('authenticate');
    return token;
  } catch (error) {
    console.log(error);
  }
};

export {setItem, getItem, removeItem, getToken, clear};
