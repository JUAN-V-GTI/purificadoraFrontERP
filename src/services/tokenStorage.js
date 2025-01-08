/* eslint-disable no-undef */
// src/services/tokenStorage.js

export const getToken = async () => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      return token;
    } catch (error) {
      console.error('Error getting token:', error);
      throw error;
    }
  };
  
  export const storeToken = async (token) => {
    try {
      await AsyncStorage.setItem('authToken', token);
    } catch (error) {
      console.error('Error storing token:', error);
      throw error;
    }
  };
  
  export const removeToken = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
    } catch (error) {
      console.error('Error removing token:', error);
      throw error;
    }
  };
  