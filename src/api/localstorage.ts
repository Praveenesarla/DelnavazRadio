import * as Keychain from 'react-native-keychain';

const setItem = async (itemName: string, item: any) => {
  try {
    await Keychain.setInternetCredentials(
      itemName,
      itemName,
      JSON.stringify(item),
    );
    console.log(`Item "${itemName}" set successfully.`);
  } catch (error) {
    console.error(`Error setting item "${itemName}":`, error);
  }
};

const getItem = async (itemName: string) => {
  try {
    const credentials = await Keychain.getInternetCredentials(itemName);
    if (credentials) {
      return credentials.password;
    } else {
      console.log(`No item found with name "${itemName}".`);
      return null;
    }
  } catch (error) {
    console.error(`Error getting item "${itemName}":`, error);
    return null;
  }
};

const removeItem = async (itemName: string) => {
  try {
    await Keychain.resetInternetCredentials(itemName);
    console.log(`Item "${itemName}" removed successfully.`);
  } catch (error) {
    console.error(`Error removing item "${itemName}":`, error);
  }
};

const clear = async () => {
  console.log(
    'Unfortunately, react-native-keychain does not support clearing all items directly.',
  );
  console.log(
    'You need to manually clear individual items by knowing their names.',
  );
};

const getToken = async () => {
  try {
    const token = await getItem('authenticate');
    return token;
  } catch (error) {
    console.error('Error getting authentication token:', error);
  }
};

export {setItem, getItem, removeItem, getToken, clear};
