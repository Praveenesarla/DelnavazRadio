/* eslint-disable prettier/prettier */
// NotificationContext.js
import React, {createContext, useContext, useState, useEffect} from 'react';
import {getItem, setItem} from '../api/localstorage.ts';

const NotificationContext = createContext();

export const NotificationProvider = ({children}) => {
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      const response = await getItem('notifications');
      if (response !== null) {
        setNotifications(response);
      } else {
        await setItem('notifications', true);
      }
    };
    fetchNotifications();
  }, []);

  const toggleNotifications = async () => {
    const newNotificationState = !notifications;
    setNotifications(newNotificationState);
    await setItem('notifications', newNotificationState);
  };

  return (
    <NotificationContext.Provider value={{notifications, toggleNotifications}}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  return useContext(NotificationContext);
};
