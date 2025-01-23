import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../../i18n';

const LanguageContext = createContext({
  language: 'en',
  setLanguage: (p0: string) => {},
});

export const LanguageProvider = ({children}) => {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const loadLanguage = async () => {
      const storedLanguage = await AsyncStorage.getItem('appLanguage');
      if (storedLanguage) {
        setLanguage(storedLanguage);
        i18n.changeLanguage(storedLanguage);
      }
    };

    loadLanguage();
  }, []);

  const changeLanguage = async lang => {
    setLanguage(lang);
    await AsyncStorage.setItem('appLanguage', lang);
    i18n.changeLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{language, setLanguage: changeLanguage}}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
